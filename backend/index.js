require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(express.json());

const allowedOrigins = ["https://selim-eminoglu-portfolio.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
