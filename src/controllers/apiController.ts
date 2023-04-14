import { Request, Response } from "express";

import expressAsyncHandler = require("express-async-handler");
import healthDetailData from "../models/healthDetailModel";
import { heartRateDataPoint, sleepDataPoint } from "../interfaces/interfaces";
import { heartRateFilter } from "../filters/heartRateFilter";
import { sleepDataFilter } from "../filters/sleepDataFilter";

export const getHeartRateData = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data: Array<heartRateDataPoint> = await healthDetailData.find({
      type: 7,
    });
    const filteredData = heartRateFilter(data);
    res.status(200).json(filteredData);
  }
);

export const getSleepData = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data: Array<sleepDataPoint> = await healthDetailData.find({
      type: 9,
    });
    const filteredData = sleepDataFilter(data);

    res.status(200).json(filteredData);
  }
);
