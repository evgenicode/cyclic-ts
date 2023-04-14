import { Request, Response } from "express";
<<<<<<< HEAD
import {
  heartRateDataFormated,
  sleepDataFormatted,
} from "../data/getLocalData";
import expressAsyncHandler = require("express-async-handler");
import healthDetailData from "../models/healthDetailModel";
import { heartRateDataPoint, sleepDataPoint } from "../interfaces/interfaces";
import { heartRateFilter } from "../filters/heartRateFilter";
import { sleepDataFilter } from "../filters/sleepDataFilter";

export const getHeartRateDataDev = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.send(heartRateDataFormated);
  }
);

export const getHeartRateData = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data: Array<heartRateDataPoint> = await healthDetailData.find({
=======
import expressAsyncHandler = require("express-async-handler");
import healthDetailData from "../models/healthDetailModel";
import { hasHealthTypeCode } from "../interfaces/interfaces";
import { heartRateFilter } from "../filters/heartRateFilter";

export const getHeartRateDataFromDatabase = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data: Array<hasHealthTypeCode> = await healthDetailData.find({
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8
      type: 7,
    });
    const filteredData = heartRateFilter(data);
    res.status(200).json(filteredData);
  }
);
<<<<<<< HEAD

export const getSleepDataDev = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.send(sleepDataFormatted);
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
=======
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8
