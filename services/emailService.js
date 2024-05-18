const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Email sent to ${to}`);
};

module.exports = sendEmail;
