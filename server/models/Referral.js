import mongoose from "mongoose";

const referralSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  homeName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  suburb: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Referral = mongoose.model("Referral", referralSchema);

export default Referral;
