import express, { Request, Response } from "express";
import { getHeartRateData, getSleepData } from "../controllers/apiController";

const router = express.Router();

router.get("/heartRateData", getHeartRateData);
router.get("/getSleepData", getSleepData);

module.exports = router;
