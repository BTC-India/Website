export type PartnerFormData = {
    Name: string;
    email: string;
    telegramId: string;
    partnershipType: 'Sponsorship' | 'Media Partner' | 'Community Partner' | 'Other';
    organization: string;
    message?: string;
  };
  