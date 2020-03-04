const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

// const viewPath = path.resolve('./src/resources/mail/');

const { host, port, user, pass  } = require('../config/mail.json')

const transport = nodemailer.createTransport({
    host, 
    port,  
    auth: { user, pass }, 
    tls: {
      servername: 'smtp.mailtrap.io'
    }
  });

const handlebarOptions = {
   viewEngine: {
     extName: '.html',
     partialsDir: path.resolve('./src/resources/mail/'),
     layoutsDir: path.resolve('./src/resources/mail/'),
     defaultLayout: '',
   },
   viewPath: path.resolve('./resources/mail/'),
   extName: '.html',
 }

 transport.use('compile', hbs(handlebarOptions))

 module.exports = transport