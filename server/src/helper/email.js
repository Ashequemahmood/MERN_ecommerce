const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../secret");

console.log(smtpUsername, smtpPassword);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUsername, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line

      html: emailData.html, // html body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.response);
    
  } catch (error) {
    console.error("Error occur while sending email", error);
    throw error;
  }
};

module.exports = emailWithNodeMailer;
