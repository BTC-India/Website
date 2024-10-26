import { Router, Request, Response } from "express";
import SpeakerApply from "../models/speaker-apply";
import SpeakerSuggest from "../models/speaker-suggest";

const router = Router();

// // Route - 1: Suggest a speaker
router.post("/suggest", async (req: Request, res: Response) => {
  // Get the body
  const EMAIL_API = process.env.BACKEND_URI + "/api/mail/send-email/";
  const { name, email, speaker, socials, message } = req.body;

  try {
    // Insert te item
    await SpeakerSuggest.create({
      name: name,
      email: email,
      speaker: speaker,
      socials: socials,
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
        subject: "🎤 Speaker Suggestion Received!",
        message: `Hi ${name}, 👋\n\nThank you for your suggestion! We've recorded your speaker recommendation as follows:\n\n🎙 Speaker: ${speaker}\n🔗 Social: ${socials}\n\nWe appreciate your input and will consider it as we finalize our speaker lineup. 😊 Please note that the official list of speakers has yet to be released.\n\nBest regards,\nTeam BTC India\n🌐 Web: https://btc-india.org\n X (twitter): https://x.com/btcindia_org`,
      }),
    });

    // notification mail
    await fetch(EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromName: "BTC India Notifications",
        toName: "BTC India Team",
        toEmail: process.env.NOTIFICATION_EMAIL as string,
        subject: "📬 New Speaker Suggestion Submitted",
        message: `Hello Team,\n\nA new speaker suggestion has been submitted. Here are the details:\n\n👤 Suggested by: ${name}\n📧 Email: ${email}\n🎙 Suggested Speaker: ${speaker}\n🔗 Speaker's Socials: ${socials}\n💬 Message: ${message}\n\nThe suggestion has been successfully added to the database for further review.\n\nBest,\nBTC India Notification System`,
      }),
    });

    // send response
    res.status(200).json({ message: "Speaker selection recorded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route - 2: Apply for speaker
router.post("/apply", async (req: Request, res: Response) => {
  const EMAIL_API = process.env.BACKEND_URI + "/api/mail/send-email";
  const { name, email, organization, telegramId, about } = req.body;
  try {
    // add to db
    await SpeakerApply.create({
      name: name,
      email: email,
      organization: organization,
      telegramId: telegramId,
      about: about,
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
        subject: "🎤 Speaker Application Received!",
        message: `Hi ${name}, 👋\n\nThank you for applying to be a speaker at the BTC India Conference! 🎉 BTC India is one of Asia's largest Bitcoin-focused events, taking place from December 16-18. We're excited about your interest and will follow up with more details in a separate email soon. Until then, please stay tuned!\n\nBest regards,\nTeam BTC India\n🌐 Website: https://btc-india.org\nX (Twitter): https://x.com/btcindia_org`,
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
        subject: "📬 New Speaker Application Received",
        message: `Hello Team,\n\nA new speaker application has been received for the BTC India Conference. Here are the details:\n\n👤 Name: ${name}\n📧 Email: ${email}\n🏢 Organization: ${organization}\n💬 Telegram ID: ${telegramId}\n📝 About: ${about}\n\nThe applicant's information has been successfully added to the database.\n\nBest,\nBTC India Notification System`,
      }),
    });

    // Send response
    res.status(200).json({ message: "Speaker selection recorded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
