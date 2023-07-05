const { CoworkSpace } = require("../../models/CoworkSpace");
const { Reserve } = require("../../models/Reserve");
const { User } = require("../../models/User");
const { APIKEY_NODEMAILER, USER_NODEMAILER } = process.env;
const nodemailer = require('nodemailer');

const cretedReserve = async ({ date_from, date_to, occupants,  coworkspace, user}) => {


  console.log("date_from:", date_from);
  console.log("date_to:", date_to);
  console.log("occupants:", occupants);
  console.log("cowork_space:", coworkspace);
  console.log("user:", user);
  console.log("first_name:", user.first_name);
  console.log("last_name:",user.last_name);
  console.log("email:", user.email);

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
    from: 'Work Away <workaway.group@gmail.com>',
    to: user?.email,
    subject: 'Informacion sobre su reserva de espacio en WorkAway',
    text: `Reserva de ${user?.first_name} ${user?.last_name}`,
    html: `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Bienvenido a nuestra plataforma de reservas de espacios remotos</title>
      <style>
        /* Aquí se incluyen los estilos de Tailwind CSS */
      </style>
    </head>
    
    <body>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">¡Bienvenido a nuestra plataforma de reservas de espacios remotos!</h1>
          <p className="text-base mb-4">Estimado ${user?.first_name} ${user?.last_name},</p>
          <p className="text-base mb-4">¡Gracias por unirte a nosotros! Te damos la bienvenida a nuestra plataforma de reservas de espacios remotos.</p>
          <p className="text-base mb-4">Esta es la informacion de su reserva de espacio en WorkAway</p>
          <p className="text-base mb-4">Espacio: ${coworkspace}</p>
          <p className="text-base mb-4">Dias reservados: Desde ${date_from} - Hasta ${date_to}</p>
          <p className="text-base mb-4">Cantidad de ocupantes reservados: ${occupants}</p>
          <p className="text-base mb-4">Si tienes alguna pregunta, no dudes en contactarnos. ¡Disfruta de tu experiencia!</p>
          <p className="text-base">Saludos,<br>
            Work Away!<br>                    
          </p>
        </div>
      </div>
    </body>
    
    </html>
    `,
};

const info = await transporter.sendMail(mailOptions);  
console.log('Message sent: %s', info.messageId);   

    const reserveCreated = await Reserve.create({
      date_from,
        date_to,
        occupants,
        user,
        cowork_space: coworkspace,

    });

    await CoworkSpace.findByIdAndUpdate(
      coworkspace ,
      {
          $push: {
              reserves: reserveCreated._id,
          }
      },
      { new: true }
  );
  
  await User.findByIdAndUpdate(
      user,
      {
          $push: {
              reserve_id: reserveCreated._id,
          }
      },
      { new: true }
  );
    
    return reserveCreated;
}

module.exports = {
    cretedReserve,
}
