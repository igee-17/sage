const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const port = process.env.PORT || 5000;
require("dotenv").config();

// allows to send information from frontend to backend
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({
  recipient_email,
  firstname,
  lastname,
  email,
  phone,
  subject,
  message,
  formName,
  fields,
}) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`,
      },
    });

    const mail_configs = {
      from: "igbagboleye@gmail.com",
      to: recipient_email,
      subject: subject,
      text: formName,
      html: `<body>
      <h2>${subject}</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${firstname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${lastname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${phone}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[4]}</b>: ${subject}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[5]}</b>: ${message}</span></li><br/>
       </ul>
       </body>`,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "an error occured" });
      }
      return resolve({ message: "email sent successfully" });
    });
  });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname), "public", "index.html");

  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () =>
  console.log(`nodemailer is listening at http://localhost:${port}`)
);

// var email =
