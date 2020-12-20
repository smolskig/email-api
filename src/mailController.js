const nodemailer = require("nodemailer");

const handleSendEmail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.USER,
    to: process.env.USER,
    subject: `Nova mensagem de: ${data.name} - ${data.email}`,
    text: data.text,
  });
}

module.exports = handleSendEmail