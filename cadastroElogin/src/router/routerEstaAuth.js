const express = require('express')
const router = express.Router()
const { estaAuth } = require('../app/controllers/controllerEstaAuth')
const authMiddleware = require('../app/middlewares/auth')

router.use(authMiddleware)

// usuário está autenticado?
router.get('/', estaAuth)

module.exports = router