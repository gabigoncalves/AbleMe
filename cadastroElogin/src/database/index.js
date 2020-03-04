const mongoose = require('mongoose');

const url = 'mongodb://localhost/autenticacao'
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
}).then(() => {
    console.log('Tudo OK!');
}).catch((err) => {
    console.log('Erro ao se conectar: ', err)
})

module.exports = mongoose;
