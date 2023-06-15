import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

function gmailTransporter() {
  const hostname = process.env.SMTP_SERVER;
  const port = Number(process.env.SMTP_PORT) as number;
  const username = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: hostname,
    port,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  return transporter;
}

export async function sendEmail(message: Mail.Options) {
  const transporter = gmailTransporter();
  const info = await transporter.sendMail(message);

  return info;
}
