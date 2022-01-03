const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { EMAIL, PASSWORD } = process.env;

  const { name, subject, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  if (!name || !subject || !email || !message) {
    return res
      .status(401)
      .send(
        "The `name`,` subject`, `email` and` message` fields are required."
      );
  }

  try {
    const info = await transporter.sendMail({
      from: `Portafolio | ${name} <${email}>`,
      to: "alangiavino97@gmail.com",
      subject: `PORTFOLIO: ${subject}`,
      text: `New message from: ${email} \nmessage`,
      html: `<div>New message from ${email} <br/> ${message}</div>`,
    });

    return res.status(200).send("Mensaje enviado: ", info);
  } catch (error) {
    return res.status(500).send(error);
  }
}
