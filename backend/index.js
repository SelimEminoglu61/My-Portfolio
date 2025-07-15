import { createRequire } from "module";
const require = createRequire(import.meta.url);

require("dotenv").config();

import { Octokit } from "octokit";
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const octokit = new Octokit({
  auth: process.env.API_KEY,
});

const projects = await octokit.request("GET /user/repos", {
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

app.get("/api/contact", (req, res) => {
  res.send(process.env.MY_NUMBER);
});

app.get("/api/myprojects", (req, res) => {
  res.send(projects);
});

app.get("/", (req, res) => {
  res.json("Server is running");
});

const postCors = {
  origin: ["https://selim-eminoglu-portfolio.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

app.post("/", cors(postCors), async (req, res) => {
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

    const info = await transporter.sendMail(bilgiler);
    console.log("E-posta gönderildi:", info.response);
    res.json(gelenVeri);
  } catch (error) {
    console.error("Transporter doğrulama hatası:", error);
    res.status(500).json({ error: "Transporter doğrulama hatası" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor. Link: http://localhost:3000`);
});
