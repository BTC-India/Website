import mongoose from "mongoose";

const SpeakerApplySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    telegramId: { type: String, required: true },
    organization: { type: String, required: true },
    about: { type: String, required: true },
  },
  {
    collection: "speakerapplication",
  }
);

export default mongoose.models.SpeakerApply ||
  mongoose.model("SpeakerApply", SpeakerApplySchema);
