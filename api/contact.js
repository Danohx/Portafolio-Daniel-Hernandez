import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Servidor de Google
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
    from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `🚀 Nuevo Mensaje: ${subject}`, // Agregué un emoji para que destaque en tu inbox
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* Reset básico para clientes de correo */
          body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background-color: #0b0d1a; padding: 20px; text-align: center; border-bottom: 3px solid #6366f1; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; }
          .content { padding: 30px 25px; color: #334155; }
          .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold; margin-bottom: 5px; display: block; }
          .value { font-size: 16px; color: #0f172a; margin-bottom: 20px; display: block; }
          .message-box { background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 15px; border-radius: 4px; color: #334155; font-style: italic; line-height: 1.6; }
          .footer { background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        
        <div style="background-color: #f3f4f6; padding: 40px 10px;">
          
          <div class="container" style="background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; font-family: 'Segoe UI', sans-serif;">
            
            <div class="header" style="background-color: #0b0d1a; padding: 25px; text-align: center; border-bottom: 4px solid #6366f1;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Nuevo Contacto</h1>
            </div>

            <div class="content" style="padding: 30px;">
              
              <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">De:</p>
              <p style="margin: 0 0 20px 0; color: #0f172a; font-size: 18px;">${name}</p>

              <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Responder a:</p>
              <p style="margin: 0 0 25px 0; color: #6366f1; font-size: 16px; text-decoration: none;">${email}</p>

              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Mensaje:</p>
              <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 15px; color: #334155; line-height: 1.6; border-radius: 0 4px 4px 0;">
                ${message.replace(/\n/g, '<br>')}
              </div>

            </div>

            <div class="footer" style="background-color: #f1f5f9; padding: 15px; text-align: center; color: #94a3b8; font-size: 12px;">
              Enviado desde tu Portafolio Web V2
            </div>

          </div>
        </div>

      </body>
      </html>
    `,
  });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error enviando el correo' });
  }
}