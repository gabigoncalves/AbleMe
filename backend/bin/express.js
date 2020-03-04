const express = require('express')
const mongoose = require('mongoose')
const app = express()

const url = 'mongodb://localhost/backendAppAbleMe'
mongoose.Promise = global.Promise;
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.log('Erro ao se conectar: ', err)
})

module.exports = app