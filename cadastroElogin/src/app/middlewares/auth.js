const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')

module.exports = (req, res, next) => {

    // informa a header da requisição
    const authHeader = req.headers.authorization;

    // caso não tenha header informado
    if(!authHeader)
        return res.status(401).send({ error: 'Token não informado' })
    
    // token é formado por 'Bearer + + letras e numeros (Bearer 1g1hg2hg3hjg4hjgj54h)
    // dividimos em duas partes, separando o Bearer das letras e números
    const partes = authHeader.split(' ')

    if(!partes.lenght == 2)
        return res.status(401).send({ error: 'Erro no token' })
    
    const [ scheme, token ] = partes
    // se a primeira parte não for Bearer
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado.' })
    
    // verificação final do token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err)
            return res.status(401).send({ error: 'Token inválido.' })
        
        req.userId = decoded.id;
        return next();
    })
};