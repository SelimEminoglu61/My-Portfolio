require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(
  cors({
    origin: "https://selim-eminoglu-portfolio.vercel.app",
  })
);

// const allowCors = (fn) => async (req, res) => {
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://selim-eminoglu-portfolio.vercel.app"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,OPTIONS,PATCH,DELETE,POST,PUT"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token,Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );
//   return await fn(req, res);
// };

// app.options("/", (req, res) => {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://selim-eminoglu-portfolio.vercel.app"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//   res.status(200).end();
// });

// app.use(allowCors);

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
