const express = require ('express');
const bodyParser = require ('body-parser');
// const router = require('./controllers/router')
const app = express();

const routerAuth = require('./router/routerAuth')
const routerEstaAuth = require('./router/routerEstaAuth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', routerAuth)
app.use('/estaAuth', routerEstaAuth)

// require('./app/controllers/index')(app)

app.listen(3000);
