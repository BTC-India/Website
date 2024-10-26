import mongoose from "mongoose";

const SpeakerSuggestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    speaker: { type: String, required: true },
    socials: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    collection: "speakersuggestion",
  }
);

export default mongoose.models.SpeakerSuggest ||
  mongoose.model("SpeakerSuggest", SpeakerSuggestSchema);
