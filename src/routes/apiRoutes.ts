import express, { Request, Response } from "express";
<<<<<<< HEAD
import {
  getHeartRateDataDev,
  getHeartRateData,
  getSleepData,
  getSleepDataDev,
} from "../controllers/apiController";

const router = express.Router();

router.get("/heartRateDataDev", getHeartRateDataDev);
router.get("/heartRateData", getHeartRateData);
router.get("/getSleepData", getSleepData);
router.get("/getSleepDataDev", getSleepDataDev);
=======

import { getHeartRateDataFromDatabase } from "../controllers/apiController";

const router = express.Router();

router.get("/heartRateDataFromDatabase", getHeartRateDataFromDatabase);
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8

module.exports = router;
