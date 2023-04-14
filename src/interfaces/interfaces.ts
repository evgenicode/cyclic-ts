<<<<<<< HEAD
export interface heartRateDataSamplePoints {
=======
export interface samplePoint {
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8
  unit: string;
  startTime: number;
  endTime: number;
  value: string;
  key: string;
}

<<<<<<< HEAD
export interface heartRateDataPoint {
  startTime: number;
  samplePoints: Array<heartRateDataSamplePoints>;
  type: number;
}

export interface sleepDataSamplePoints {
  startTime: number;
  endTime: number;
  key: string;
}

export interface sleepDataPoint {
  startTime: number;
  samplePoints: Array<sleepDataSamplePoints>;
  type: number;
}

export interface hasHealthTypeCode {
=======
export interface hasHealthTypeCode {
  startTime: number;
  samplePoints: Array<samplePoint>;
>>>>>>> 8f252b7d659a6ba11d475fddeac06f0a969668e8
  type: number;
}
