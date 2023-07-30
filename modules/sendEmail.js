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
      <h2 style="margin-bottom: 20px;">New Message From User</h2>
      <ul style="font-size: 1.1em; list-style-type: none; padding: 0;">
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[0]}:</b> ${name}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[1]}:</b> ${email}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[2]}:</b> ${subject}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[3]}:</b> ${message}
          </span>
        </li>
      </ul>
    </body>
    `,
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
// PAC WEBSITE ENDPOINTS
// =====================================================================================

function gettingStarted({
  firstName,
  lastName,
  email,
  address,
  phone,
  message,
  recipient_email,
  fields,
}) {
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
      subject: "Getting Started Form",
      text: "Contact",
      html: `<body>
      <h2 style="margin-bottom: 20px;">Alumni form</h2>
      <ul style="font-size: 1.1em; list-style-type: none; padding: 0;">
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[0]}:</b> ${firstName}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[1]}:</b> ${lastName}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[2]}:</b> ${email}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[3]}:</b> ${address}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[4]}:</b> ${phone}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[5]}:</b> ${message}
          </span>
        </li>
      </ul>
    </body>
    `,
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

// SEND A MESSAGE

function sendMessage({
  fullName,
  email,
  subject,
  message,
  recipient_email,
  fields,
}) {
  console.log(recipient_email);

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
      subject: "Send Us a Message Form",
      text: "Contact",
      html: `<body>
      <h2 style="margin-bottom: 20px;">New Message From User</h2>
      <ul style="font-size: 1.1em; list-style-type: none; padding: 0;">
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[0]}:</b> ${fullName}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[1]}:</b> ${email}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[2]}:</b> ${subject}
          </span>
        </li>
        <li style="margin-bottom: 10px;">
          <span style="display: block; color: #aaa; font-size: 1.2em; font-weight: 400;">
            <b style="text-transform: capitalize;">${fields[3]}:</b> ${message}
          </span>
        </li>
      </ul>
    </body>
    `,
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

// VENDOR INFORMATION

function vendorInfo({
  company,
  streetAddress,
  aptSuiteBuilding,
  city,
  state,
  postalCode,
  country,
  registration,
  dateOfIncorporation,
  paidUpShare,
  authorizedShare,
  tin,
  bank,
  account,
  accountType,
  phone,
  mobile,
  email,
  yearsInBusiness,
  natureOfBusiness,
  registeredWithOtherOrg,
  keyOrganisations,
  workDetails,
  organisation,
  referenceStreet,
  referenceApartment,
  referenceCity,
  referenceState,
  referencePostal,
  referenceCountry,
  contactPerson,
  contactPosition,
  contactPhone,
  referenceBusinessYears,
  recipient_email,
  fields,
}) {
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
      subject: "Vendor Information Form",
      text: "Contact",
      html: `
      <body>
  <h2 style="margin-bottom: 20px;">Vendor Information</h2>
  <table style="font-size: 1.1em; border-collapse: collapse; width: 100%; max-width: 500px; margin: 0 auto; text-align: left;">
    <tbody>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[0]}:</b></td>
        <td>${company}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[1]}:</b></td>
        <td>${streetAddress}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[2]}:</b></td>
        <td>${aptSuiteBuilding}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[3]}:</b></td>
        <td>${city}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[4]}:</b></td>
        <td>${state}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[5]}:</b></td>
        <td>${postalCode}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[6]}:</b></td>
        <td>${country}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[7]}:</b></td>
        <td>${registration}</td>
      </tr>
      <tr>
        <td><b style="text-transform: capitalize;">${fields[8]}:</b></td>
        <td>${dateOfIncorporation}</td>
      </tr>
      <tr>
      <td><b style="text-transform: capitalize;">${fields[9]}</b></td>
      <td>${paidUpShare}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[10]}</b></td>
      <td>${authorizedShare}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[11]}</b></td>
      <td>${tin}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[12]}</b></td>
      <td>${bank}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[13]}</b></td>
      <td>${account}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[14]}</b></td>
      <td>${accountType}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[15]}</b></td>
      <td>${phone}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[16]}</b></td>
      <td>${mobile}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[17]}</b></td>
      <td>${email}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[18]}</b></td>
      <td>${yearsInBusiness}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[19]}</b></td>
      <td>${natureOfBusiness}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[20]}</b></td>
      <td>${registeredWithOtherOrg}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[21]}</b></td>
      <td>${keyOrganisations}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[22]}</b></td>
      <td>${workDetails}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[23]}</b></td>
      <td>${organisation}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[24]}</b></td>
      <td>${referenceStreet}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[25]}</b></td>
      <td>${referenceApartment}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[26]}</b></td>
      <td>${referenceCity}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[27]}</b></td>
      <td>${referenceState}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[28]}</b></td>
      <td>${referencePostal}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[29]}</b></td>
      <td>${referenceCountry}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[30]}</b></td>
      <td>${contactPerson}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[31]}</b></td>
      <td>${contactPosition}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[32]}</b></td>
      <td>${contactPhone}</td>
    </tr>
    <tr>
      <td><b style="text-transform: capitalize;">${fields[33]}</b></td>
      <td>${referenceBusinessYears}</td>
    </tr>
    </tbody>
  </table>
</body>
    `,
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

  //pac website
  gettingStarted,
  sendMessage,
  vendorInfo,
};
