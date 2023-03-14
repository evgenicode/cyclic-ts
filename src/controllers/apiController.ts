import { Request, Response } from "express";
import expressAsyncHandler = require("express-async-handler");
import healthDetailData from "../models/healthDetailModel";
import { hasHealthTypeCode } from "../interfaces/interfaces";
import { heartRateFilter } from "../filters/heartRateFilter";

export const getHeartRateDataFromDatabase = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data: Array<hasHealthTypeCode> = await healthDetailData.find({
      type: 7,
    });
    const filteredData = heartRateFilter(data);
    res.status(200).json(filteredData);
  }
);
