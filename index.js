require('dotenv').config()
const express = require('express')
const handleSendEmail = require('./src/mailController')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', function (req, res) {
  handleSendEmail(req.body)
  .then(()=>{
    res.status(200).send({
      status:200,
      message:"Email enviado com sucesso"
    })
  })
  .catch(err => {
    res.send(err)
  })
})

app.listen(3000,()=>{
  console.log('Servidor escutando na porta 3000')
})