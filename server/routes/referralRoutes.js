import express from "express";
const router = express.Router();
import referralController from "../controllers/referralController";

router.get("/", referralController.getAllReferrals);
router.post("/", referralController.createReferral);

export default router;
