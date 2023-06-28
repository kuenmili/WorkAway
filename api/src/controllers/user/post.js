const { User } = require('../../models/User');
const { APIKEY_NODEMAILER, USER_NODEMAILER } = process.env;
const nodemailer = require('nodemailer');

const createUser = async ( 
    { 
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
     } ) => {
       
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
            to: email,
            subject: 'Bienvenido a WorkAway',
            text: `Bienvenido ${first_name} ${last_name}`,
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
              <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                  <h1 class="text-2xl font-bold mb-4">¡Bienvenido a nuestra plataforma de reservas de espacios remotos!</h1>
                  <p class="text-base mb-4">Estimado ${first_name} ${last_name},</p>
                  <p class="text-base mb-4">¡Gracias por unirte a nosotros! Te damos la bienvenida a nuestra plataforma de reservas de espacios remotos. Esperamos que encuentres el lugar perfecto para trabajar y conectarte desde cualquier parte.</p>
                  <p class="text-base mb-4">Si tienes alguna pregunta, no dudes en contactarnos. ¡Disfruta de tu experiencia!</p>
                  <p class="text-base">Saludos,<br>
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
        
    const user =  new User({
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
    });   
    
    const savedUser = await user.save();

    return savedUser;
};

module.exports = createUser;
