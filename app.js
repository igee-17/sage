const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const {
  sendEmail,
  sendHome,
  sendBooking,
  sendCorporate,
  sendFeedback,
  contact,
  gettingStarted,
  sendMessage,
  vendorInfo,
} = require("./modules/sendEmail");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const port = process.env.PORT || 8080;
require("dotenv").config();

// allows to send information from frontend to backend
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname), "public", "index.html");

  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// CONTACT
app.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// HOME SERVICE
app.post("/send_home", (req, res) => {
  sendHome(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// APPOINTMENT BOOKING
app.post("/send_booking", (req, res) => {
  sendBooking(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// CORPORATE PACKAGE
app.post("/send_corporate", (req, res) => {
  sendCorporate(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// FEEDBACK
app.post("/send_feedback", (req, res) => {
  sendFeedback(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// =====================================================================================
// ATTIJARA ENDPOINTS
// =====================================================================================

app.post("/attijara/contact", (req, res) => {
  contact(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () =>
  console.log(`nodemailer is listening at http://localhost:${port}`)
);

// =====================================================================================
// PAC WEBSITE ENDPOINTS
// =====================================================================================

app.post("/pacwebsite/getting-started", (req, res) => {
  gettingStarted(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/pacwebsite/send-message", (req, res) => {
  sendMessage(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/pacwebsite/vendor-info", (req, res) => {
  vendorInfo(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});
