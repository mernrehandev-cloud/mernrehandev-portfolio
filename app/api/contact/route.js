const nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message, plan } = data;
    const mailto = "mernrehandev@gmail.com";
    const mainemail = "pakclassifiedbymernrehandev@gmail.com";
    const mainpass = "xwev dqqh rhbb vwju";
    const date = Date();
    const time = date.split(" ")[4];
    let timelatest;

    if (!name || !email || !message || !plan) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const timefirst = Number(time.split(":")[0]);
    const timelast = Number(time.split(":")[1]);

    if (timefirst > 12) {
      timelatest = `${timefirst - 12}:${timelast} PM`;
    } else {
      timelatest = `${timefirst}:${timelast} AM`;
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mainemail, // your Gmail email
        pass: mainpass, // app password (not your normal password)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender
      to: mailto, // your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
      <h2 style="color: blue;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="margin-left: 20px; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
        ${message}
      </p>
      <p><strong>Selected Plan:</strong> ${plan} Plan</p>
      <p><strong>Date Submitted:</strong> ${date.slice(0, 15)}</p>
      <p><strong>Time Submitted:</strong> ${timelatest}</p>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <p style="font-size: 14px; color: #999;">This message was sent from your portfolio contact form.</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
