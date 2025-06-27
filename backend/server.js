const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const toml = require('toml');

const config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "alexnikol092004@gmail.com",
      pass: config.gmail.emailkey,
    },
});

app.post('/sendmail', async (req, res) => {
  const { name, phone } = req.body;

  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  if (!name || !phone) {
    return res.status(400).json({ error: 'Необходимо указать name и phone' });
  }

  const to = "nikol.alex06@mail.ru";
  const subject = 'Вакансия на frontend';
  const text = `Имя пользователя: ${name}\nТелефон: ${phone}`;

  try {
    await transporter.sendMail({
      from: '<alexnikol092004@gmail.com>',
      to,
      subject,
      text,
    });
    res.json({ success: true, message: 'Письмо отправлено!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
