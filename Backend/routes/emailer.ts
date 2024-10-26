import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";

const router = Router();
const PORT: number = 465;
const HOST: string = "smtp.gmail.com";

// Route - 1: Sending mail
router.post("/send-email", async (req: Request, res: Response) => {
  // Get the body
  const { fromName, toName, toEmail, subject, message } = req.body;

  // Get the auth parameters
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: true, //Use SSL
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Mail options
  const mailOptions: nodemailer.SendMailOptions = {
    from: `${fromName} <${EMAIL}>`,
    to: `${toName} <${toEmail}>`,
    subject: subject,
    text: message,
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
