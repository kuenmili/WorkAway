require('dotenv').config();
const { APIKEY_NODEMAILER, USER_NODEMAILER } = process.env;
const nodemailer = require('nodemailer');

const postChatQuery = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
      user: USER_NODEMAILER,
      pass: APIKEY_NODEMAILER,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'workaway.group@gmail.com',
    subject: 'Consulta',
    html: `<!DOCTYPE html>
      <html>
      
      <head>
        <meta charset="UTF-8">
        <title>${name} ha realizado una consulta</title>
        <style>
          /* Aquí se incluyen los estilos de Tailwind CSS */
          .container {
            min-height: 100vh;
            background-color: #f7fafc;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
      
          .card {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
      
          .title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }
      
          .message {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        </style>
      </head>
      
      <body>
        <div class="container">
          <div class="card">
            <h2 class="title">${name} ha realizado una consulta a través de la plataforma Work Away</h2>
            <p class="message">${message}</p>
          </div>
        </div>
      </body>
      
      </html>
      `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
};

module.exports = postChatQuery;
