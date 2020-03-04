const express = require('express')
const router = express.Router()
const { all, registro, autenticacao, esqueceuSenha, resetSenha, remove } = require('../app/controllers/controllerAuth')

// exibir todos os usuários
router.get('/', all)

// registrar usuário
router.post('/register', registro)

// autenticação de usuário 
router.post('/authenticate', autenticacao)

// esqueceu a senha
router.post('/forgot_password', esqueceuSenha)

// resetar a senha
router.post('/reset_password', resetSenha)

// remover um usuário pelo id
router.delete('/:_id', remove)


module.exports = router