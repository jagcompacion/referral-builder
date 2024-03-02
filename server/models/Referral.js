import mongoose from "mongoose";

const referralSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Referral = mongoose.model("Referral", referralSchema);

export default Referral;
