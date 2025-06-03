import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, betreff, message } = body;

  if (!betreff || !email || !message) {
    return new Response(JSON.stringify({ error: 'Alle Felder müssen ausgefüllt sein.' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `${betreff} von ${name} (${email})`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
}
