require("dotenv").config();
const express = require("express");
const handleSendEmail = require("./src/mailController");
const bodyParser = require("body-parser");
const app = express();
let cors = require("cors");

let corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send", cors(corsOptions), function (req, res) {
  handleSendEmail(req.body)
    .then(() => {
      res.status(200).send({
        status: 200,
        message: "Email enviado com sucesso",
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Servidor escutando na porta 8000");
});
