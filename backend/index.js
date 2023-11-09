require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: ["https://selim-eminoglu-portfolio.vercel.app"],
    methods: ["GET,POST,PUT,DELETE,PATCH,OPTIONS"],
    allowedHeaders: ["Content-Type,Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Hello");
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

  console.log(gelenVeri);

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
