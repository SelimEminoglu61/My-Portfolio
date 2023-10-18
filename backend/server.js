const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/veri", (req, res) => {
  const gelenVeri = req.body;
  console.log(gelenVeri);
  res.send("geldi" + JSON.stringify(gelenVeri));
});

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "1967selim61@gmail.com",
    pass: "xjps lnnh rfmn pfmv",
  },
});

transporter.verify(function (error, success) {
  if (error) throw error;

  console.log("baglanti saglandi", success);
});

let bilgiler = {
  from: "1967selim61@gmail.com",
  to: "selim.eminoglu.9257@gmail.com",
  subject: "Portfolyo Mail Service",
  text: "merhaba abi",
};

// transporter.sendMail(bilgiler, function (error, info) {
//   if (error) throw error;

//   console.log("başarılı", info.response);
// });

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
