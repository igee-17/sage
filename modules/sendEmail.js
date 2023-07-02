const nodemailer = require("nodemailer");

// CONTACT
function sendEmail({
  recipient_email,
  firstname,
  lastname,
  email,
  phone,
  subject,
  message,
  referral,
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
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[6]}</b>: ${referral}</span></li><br/>
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

// HOME SERVICE
function sendHome({
  name,
  email,
  message,
  address,
  phone,
  formName,
  recipient_email,
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
      subject: "NEW APPLICATION FOR HOME SERVICE",
      text: formName,
      html: `<body>
      <h2>NEW APPLICATION FOR HOME SERVICE</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${name}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${message}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${address}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[4]}</b>: ${phone}</span></li><br/>
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

// APPOINTMENT BOOKING
function sendBooking({
  slot,
  investigation,
  date,
  moreDetails,
  title,
  firstname,
  lastname,
  gender,
  phone,
  email,
  weight,
  referral,
  formName,
  recipient_email,
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
      subject: "NEW APPOINTMENT BOOKING",
      text: formName,
      html: `<body>
      <h2>NEW APPLICATION FOR HOME SERVICE</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${slot}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${investigation}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${date}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${moreDetails}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[4]}</b>: ${title}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[5]}</b>: ${firstname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[6]}</b>: ${lastname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[7]}</b>: ${gender}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[8]}</b>: ${phone}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[9]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[10]}</b>: ${weight}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[11]}</b>: ${referral}</span></li><br/>
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

// CORPORATE PACKAGES
function sendCorporate({
  firstname,
  lastname,
  company,
  email,
  address,
  city,
  state,
  phone,
  heathPackage,
  message,
  noOfStaff,
  formName,
  recipient_email,
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
      subject: "NEW CORPORATE PACKAGE REQUEST",
      text: formName,
      html: `<body>
      <h2>NEW CORPORATE PACKAGE REQUEST</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${firstname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${lastname}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${company}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[4]}</b>: ${address}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[5]}</b>: ${city}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[6]}</b>: ${state}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[7]}</b>: ${phone}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[8]}</b>: ${heathPackage}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[9]}</b>: ${message}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[10]}</b>: ${noOfStaff}</span></li><br/>
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

// FEEDBACK FORM
function sendFeedback({
  doctorName,
  contactNumber,
  address,
  email,
  knowSageDiagnostics,
  sageDiagnosticsUsage,
  responseTime,
  selectedMotivations,
  selectedAlertMode,
  helpdesk,
  quality,
  turnaround,
  dispatch,
  awareness,
  mediaPresence,
  testPrices,
  responseTime2,
  testRange,
  meetingFrequency,
  hadIssues,
  responseQuality,
  feedback,
  fields,
  formName,
  recipient_email,
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
      subject: "NEW CUSTOMER FEEDBACK",
      text: formName,
      html: `<body>
      <h2>NEW CUSTOMER FEEDBACK</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[0]
       }</b>: ${doctorName}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[1]
       }</b>: ${contactNumber}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[2]
       }</b>: ${address}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[3]
       }</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[4]
       }</b>: ${knowSageDiagnostics}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[5]
       }</b>: ${sageDiagnosticsUsage || "NIL"}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[6]
       }</b>: ${responseTime}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[7]
       }</b>: ${selectedMotivations}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[8]
       }</b>: ${selectedAlertMode}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[9]
       }</b>: ${helpdesk}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[10]
       }</b>: ${quality}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[11]
       }</b>: ${turnaround}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[12]
       }</b>: ${dispatch}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[13]
       }</b>: ${awareness}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[14]
       }</b>: ${mediaPresence}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[15]
       }</b>: ${testPrices}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[16]
       }</b>: ${responseTime2}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[17]
       }</b>: ${testRange}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[18]
       }</b>: ${meetingFrequency}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[19]
       }</b>: ${hadIssues}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[20]
       }</b>: ${responseQuality || "NIL"}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${
         fields[21]
       }</b>: ${feedback}</span></li><br/>
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

// =====================================================================================
// ATTIJARA ENDPOINTS
// =====================================================================================

function contact({ name, email, subject, message, recipient_email, fields }) {
  // console.log(recipient_email);

  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.ATTIJARA_EMAIL}`,
        pass: `${process.env.ATTIJARA_PASSWORD}`,
      },
    });

    const mail_configs = {
      from: process.env.ATTIJARA_EMAIL,
      to: recipient_email,
      subject: subject,
      text: "Contact",
      html: `<body>
      <h2>New Message From User</h2>
      <ul style="font-size:1.1em">
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[0]}</b>: ${name}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[1]}</b>: ${email}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[2]}</b>: ${subject}</span></li><br/>
       <li><span style="padding:4px 0;color:#aaa;font-size:1.2em;font-weight:400"><b>${fields[3]}</b>: ${message}</span></li><br/>
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

module.exports = {
  sendEmail,
  sendHome,
  sendBooking,
  sendCorporate,
  sendFeedback,

  // attijara
  contact,
};
