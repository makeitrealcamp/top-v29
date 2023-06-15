const nodemailer = require('nodemailer');

const env = process.env.NODE_ENV ?? 'development';

async function fakeTransporter() {
  // Fake service for testing
  const testAccount = await nodemailer.createTestAccount();

  // 1. crear el transport -> requiere de un servicio de correo
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  return transporter;
}

function googleTransporter() {
  const hostname = process.env.SMTP_SERVER;
  const port = process.env.SMTP_PORT;
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

async function main() {
  // 1. crear el transport -> requiere de un servicio de correo
  const transporter =
    env === 'production' ? googleTransporter() : await fakeTransporter();

  // 2. configurar el mensaje
  const message = {
    from: '"Pepito Pereza 👻" <lolo@gmail.com>"',
    to: 'khriztianmoreno@gmail.com, federicoc03@gmail.com, cabellosalirrosas@gmail.com',
    subject: 'Prueba Envio de correo ✔',
    text: `
      Hello world?
      http://makeitreal.camp
      Ver mas
    `,
    html: `
      <h1 style="color: red;">Hello world?</h1>
      <p style="color: green;">
        bienvenido al mejor bootcamp del mundo ${1 + 3}
        <a href="http://makeitreal.camp">Click aquí</a>
      </p>
      <button class="red"> Ver mas </button>
    `,
    attachments: [
      {
        filename: 'image.png',
        path: './thumbnail.png',
      },
      {
        filename: 'open.txt',
        content: 'Hello world',
      },
    ],
  };

  // 3. enviar el mensaje
  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
