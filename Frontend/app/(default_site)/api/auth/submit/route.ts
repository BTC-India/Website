import dbConnect from '../../../../../../Backend/config/db';
import Partner from '../../../../../../Backend/models/partner';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();

  const { name, email, organization, message, telegramId, partnershipType } = await req.json();

  try {
    const newPartner = new Partner({ name, email, organization, message, telegramId, partnershipType });
    await newPartner.save();
    return NextResponse.json({ message: 'Form submission successful' }, { status: 200 });
  } catch (error) {
    console.error('Error saving partner form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
