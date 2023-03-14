import express, { Request, Response } from "express";

import { getHeartRateDataFromDatabase } from "../controllers/apiController";

const router = express.Router();

router.get("/heartRateDataFromDatabase", getHeartRateDataFromDatabase);

module.exports = router;
