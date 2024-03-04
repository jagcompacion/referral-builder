import express from "express";
const router = express.Router();
import referralController from "../controllers/referralController";

router.get("/", referralController.getAllReferrals);
router.post("/", referralController.createReferral);
router.put("/:id", referralController.updateReferral);
router.delete("/:id", referralController.deleteReferral);

export default router;
