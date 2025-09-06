/* eslint-disable no-undef */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Debug: Check if environment variables are loaded
console.log('Mail User:', process.env.MAIL_USER);
console.log('Mail App Password exists:', !!process.env.MAIL_APP_PASSWORD);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Verify credentials exist before creating transporter
    if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
      throw new Error('Missing Mail credentials in environment variables');
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    // Verify connection before sending
    await transporter.verify();
    console.log('SMTP connection verified');

    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`, 
      to: process.env.MAIL_USER,
      replyTo: email, // Set reply-to as the form submitter's email
      subject: "New DFG Security Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));