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
      subject: `Nuevo Mensaje: ${subject}`,
      html: `
        <h3>Tienes un nuevo contacto desde tu web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #6366f1;">
          ${message}
        </blockquote>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error enviando el correo' });
  }
}