import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  organization: { type: String, required: true },
  telegramId: { type: String, required: true },
  partnershipType: {
    type: String,
    enum: ["Sponsorship", "Media Partner", "Community Partner", "Other"],
    required: true,
  },
  message: { type: String },
});

export default mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);
