export const applyPlatformPricing = (
  minCost: number,
  maxCost: number
) => {
  const qualityBuffer = 0.1;
  const operationalOverhead = 0.15;
  const margin = 0.2;

  const multiplier = 1 + qualityBuffer + operationalOverhead + margin;

  return {
    minPrice: Math.round(minCost * multiplier),
    maxPrice: Math.round(maxCost * multiplier)
  };
};
