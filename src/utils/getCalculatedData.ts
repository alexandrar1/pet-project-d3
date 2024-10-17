import { ICost, IUsage } from "../shared/constants/types";

export const getCalculatedData = (usages: IUsage[], costs: ICost[]) => {
  return usages.map((usage) => {
    const cost = costs.find((c) => c.model === usage.model);
    const totalCost =
      (cost?.input || 0) * usage.usage_input +
      (cost?.output || 0) * usage.usage_output;
    return { ...usage, totalCost };
  });
};
