import "express";

const express = require("express");
const app = express();
const port = 3001;

// E-posta gönderme işlemi için gerekli kodlar burada olmalı

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
