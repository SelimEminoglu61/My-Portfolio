const express = require("express");
const app = express();
const port = 3001;

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "1967selim61@gmail.com",
    pass: "*******",
  },
});

transporter.verify(function (error, success) {
  if (error) throw error;

  console.log("bağlantı sağlandı", success);
});

let bilgiler = {
  from: "1967selim61@gmail.com",
  to: "selim.eminoglu.9257@gmail.com",
  subject: "Portfolyo Mail Service",
  text: "merhaba abi",
};

transporter.sendMail(bilgiler, function (error, info) {
  if (error) throw error;

  console.log("başarılı", info.response);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
