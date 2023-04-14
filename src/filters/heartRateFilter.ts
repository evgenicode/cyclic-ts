<<<<<<< HEAD
import { heartRateDataPoint } from "../interfaces/interfaces";

export const heartRateFilter = (data: Array<heartRateDataPoint>) =>
=======
import { hasHealthTypeCode } from "../interfaces/interfaces";

export const heartRateFilter = (data: Array<hasHealthTypeCode>) =>
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8
  data.map((item) => {
    const startTime = new Date(item.samplePoints[0].startTime);
    const value = item.samplePoints[0].value;
    return { startTime, value };
  });
