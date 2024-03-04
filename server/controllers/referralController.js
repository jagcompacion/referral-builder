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
    givenName: req.body.givenName,
    surName: req.body.surName,
    phone: req.body.phone,
    email: req.body.email,
    homeName: req.body.homeName,
    street: req.body.street,
    suburb: req.body.suburb,
    state: req.body.state,
    postCode: req.body.postCode,
    country: req.body.country,
  });

  try {
    const savedReferral = await newReferral.save();
    res.status(201).json(savedReferral);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateReferral = async (req, res) => {
  try {
    const savedReferral = await Referral.findByIdAndUpdate(req.params.id, {
      givenName: req.body.givenName,
      surName: req.body.surName,
      phone: req.body.phone,
      email: req.body.email,
      homeName: req.body.homeName,
      street: req.body.street,
      suburb: req.body.suburb,
      state: req.body.state,
      postCode: req.body.postCode,
      country: req.body.country,
    });
    res.status(200).json(savedReferral);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReferral = async (req, res) => {
  console.log(req.params.id);
  try {
    await Referral.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getAllReferrals,
  createReferral,
  updateReferral,
  deleteReferral,
};
