import Referral from "../models/Referral";

const getAllReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find();
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReferral = async (req, res) => {
  const newReferral = new Referral({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const savedReferral = await newReferral.save();
    res.status(201).json(savedReferral);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getAllReferrals,
  createReferral,
};
