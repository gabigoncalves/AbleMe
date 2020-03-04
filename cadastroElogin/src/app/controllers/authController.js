const express = require('express');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/User');
const authConfig = require('../../config/auth')
const mailer = require('../../module/mailer')

const router = express.Router();

// função parar gerar token
generateToken = ( params = {} ) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

// ---------------------- LER ----------------------

router.get('/', async (req, res) => {
    const users = await User.find()
    return res.json(users)
})

// ---------------------- DELETAR ----------------------

router.delete('/:_id',  async (req, res) => {
    const { _id } = req.params
    await User.deleteOne({ _id })
    return res.status(204).send('Usuário removido com sucesso!')
})

// ---------------------- CRIAR ----------------------

router.post('/register', async (req, res) => {
    const { email } = req.body

    try {
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'Usuário já existe.' });
        }

        const user = await User.create(req.body)
        user.password = undefined
        
        return res.send({
            user, 
            token: generateToken({ id: user.id })
        })

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar' })
    }
})

// ---------------------- VERIFICAR ----------------------

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'User not found.' });
    
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password.' })
    
    user.password = undefined
    
    res.send({
        user, 
        token: generateToken({ id: user.id })
    })
})

// ---------------------- ATUALIZAR ----------------------

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body

    try {

        const user = await User.findOne({ email })
        if (!user) 
            return res.status(400).send({ error: 'User not found' })

        const token = crypto.randomBytes(20).toString('hex')

        const now = new Date()
        now.setHours(now.getHours()+1)

        await User.findByIdAndUpdate(user.id, {
            '$set': {
            passwordResetToken: token,
            passwordResetExpires: now,
            }
        }, { new: true, useFindAndModify: false }
        );

        mailer.sendMail({
            to: email,
            from: 'gabrielaog2@yahoo.com.br',
            template: '/auth/forgot_password',
            context: { token }
        }), (err) => {
            if(err) {
                console.log(err)
                return res.status(400).send({ error: 'Error on forgor password, try again.' })
            }
        }

        console.log('Token: ', token)
        console.log('Now: ', now)

    } catch(err) {
        console.log(err)
        res.status(400).send({ error: 'Error on forgor password, try again.'})
    }
})


router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires')

        if(!user)
            return res.status(400).send({ error: 'Usuário não encontrado.' })

        if (token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token inválido.' })

        const now = new Date()

        if(now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token expirado. Gere outro.' })

        user.password = password;
        await user.save()
        res.send()

    } catch(err) {
        res.status(400).send({ error: 'Não é possivel resetar a senha, tente novamente.' })
    }
})



module.exports = app => app.use('/auth', router)
