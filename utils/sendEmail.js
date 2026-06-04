const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "google_app_password_here",
  },
});

const sendEmail = async (
  to,
  subject,
  text
) => {
  await transporter.sendMail({
    from: "yourgmail@gmail.com",
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;