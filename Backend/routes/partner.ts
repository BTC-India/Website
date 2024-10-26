import Partner from "../models/partner";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

// POST route for form submission
router.post("/apply", async (req: Request, res: Response) => {
  const EMAIL_API = process.env.BACKEND_URI + "/api/mail/send-email";

  const { name, email, organization, message, telegramId, partnershipType } =
    req.body;

  try {
    // save in db
    await Partner.create({
      name: name,
      email: email,
      organization: organization,
      telegramId: telegramId,
      partnershipType: partnershipType,
      message: message,
    });

    // Send email
    await fetch(EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromName: "BTC India",
        toName: name,
        toEmail: email,
        subject: "🎤 Partner Application Received!",
        message: `Hi ${name}, 👋\n\nThank you for applying to become a partner at the BTC India Conference! 🎉 BTC India is one of Asia's largest Bitcoin-focused events, happening from December 16-18. We’re thrilled about your interest and look forward to connecting with you soon to discuss potential collaboration.\n\nUntil then, stay tuned, and feel free to explore our event and updates on our website and social media!\n\nBest regards,\nTeam BTC India\n\n🌐 Website: https://btc-india.org\nX (Twitter): https://x.com/btcindia_org`,
      }),
    });

    // self mail
    await fetch(EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromName: "BTC India Notifications",
        toName: "BTC India Team",
        toEmail: process.env.NOTIFICATION_EMAIL as string,
        subject: "📬 New Partner Application Received",
        message: `Hello Team,\n\nA new partner application has been received for the BTC India Conference. Here are the details:\n\n👤 Name: ${name}\n📧 Email: ${email}\n🏢 Organization: ${organization}\n💬 Telegram ID: ${telegramId}\n🤝 Partnership Type: ${partnershipType}\n✉️ Message: ${message}\n\nThe applicant's information has been successfully added to the database.\n\nBest,\nBTC India Notification System`,
      }),
    });

    // Send response
    res.status(200).json({ message: "Partner form data saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
