require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: ["https://selim-eminoglu-portfolio.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

app.get("/", (req, res) => {
  res.json("Server is running");
});

app.post("/", async (req, res) => {
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

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "1967selim61@gmail.com",
      pass: "xjps lnnh rfmn pfmv",
    },
  });

  try {
    await transporter.verify();
    console.log("verify");

    const info = await transporter.sendMail(bilgiler);
    console.log("E-posta gönderildi:", info.response);
    res.status(200).json({ success: "E-posta başarıyla gönderildi" });
  } catch (error) {
    console.error("Transporter doğrulama hatası:", error);
    res.status(500).json({ error: "Transporter doğrulama hatası" });
  }

  res.send(JSON.stringify(gelenVeri));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
