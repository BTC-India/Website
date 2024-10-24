import Partner from '../models/partner';
import { Request, Response } from 'express';

export const submitPartnerForm = async (req: Request, res: Response): Promise<void> => {
  const { name, email, organization, message, telegramId, partnershipType } = req.body;

  try {
    const newPartner = new Partner({ name, email, organization, message, telegramId, partnershipType });
    await newPartner.save();
    res.status(200).json({ message: 'Form submission successful' });
  } catch (error) {
    console.error('Error saving partner form:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
};
