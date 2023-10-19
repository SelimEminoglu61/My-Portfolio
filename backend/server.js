const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "1967selim61@gmail.com",
    pass: "xjps lnnh rfmn pfmv",
  },
});

transporter.verify(function (error, success) {
  if (error) throw error;

  console.log(success);
});

app.post("/", (req, res) => {
  const gelenVeri = req.body;

  let bilgiler = {
    from: "1967selim61@gmail.com",
    to: "selim.eminoglu.9257@gmail.com",
    subject: "Portfolyo Mail Service",
    text:
      gelenVeri.name +
      " " +
      gelenVeri.surname +
      "\n" +
      gelenVeri.email +
      "\n" +
      gelenVeri.message,
  };

  transporter.sendMail(bilgiler, function (error, info) {
    if (error) throw error;

    console.log("başarılı", info.response);
  });

  res.send(JSON.stringify(gelenVeri));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
