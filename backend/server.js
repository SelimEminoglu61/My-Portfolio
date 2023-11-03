require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const nodemailer = require("nodemailer");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

app.use(cors());
app.use(express.json());

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "../my-portfolio/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-portfolio/dist/index.html"));
});

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "1967selim61@gmail.com",
    pass: "xjps lnnh rfmn pfmv",
  },
});

transporter.verify(function (error, success) {
  if (error) throw error;
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
    console.log(info.response);
  });

  res.send(JSON.stringify(gelenVeri));
});
