import Papa from "papaparse";
import { DATA_COSTS_CSV, DATA_USAGES_CSV } from "../shared/constants";
import { ICost, IUsage } from "../shared/constants/types";

export const fetchUsages = (): Promise<IUsage[]> => {
  return new Promise((res, rej) => {
    try {
      Papa.parse(DATA_USAGES_CSV, {
        download: true,
        header: true,
        complete: (results) => {
          const parsedData: IUsage[] = results.data.map((row: IUsage) => ({
            ...row,
            usage_input: +row.usage_input,
            usage_output: +row.usage_output,
          }));
          res(parsedData);
        },
      });
    } catch (e) {
      rej(e);
    }
  });
};

export const fetchCosts = (): Promise<ICost[]> => {
  return new Promise((res, rej) => {
    try {
      Papa.parse(DATA_COSTS_CSV, {
        download: true,
        header: true,
        complete: (results) => {
          const parsedCosts: ICost[] = results.data.map((row: ICost) => ({
            model: row.model,
            input: +row.input,
            output: +row.output,
          }));
          res(parsedCosts);
        },
      });
    } catch (e) {
      rej(e);
    }
  });
};
