const app = require('./bin/express')
const routerAbleMe = require('./module/routes')
const bodyParser = require('body-parser')

const routerAuth = require('../cadastroElogin/src/router/routerAuth')
const routerEstaAuth = require('../cadastroElogin/src/router/routerEstaAuth')

app.use(bodyParser.json())
app.use('/able-me', routerAbleMe)
app.use('/auth', routerAuth)
app.use('/estaAuth', routerEstaAuth)

const PORT = 3030
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})


