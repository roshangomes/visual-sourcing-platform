import { inventoryCatalog, manufacturerCatalog } from './catalogService.js';
import { applyPlatformPricing } from './pricingService.js';

export const generateRecommendation = (pattern: any) => {
  // 1️⃣ Inventory-first check
  const inventoryMatch = inventoryCatalog.find(item =>
    item.category === pattern.category &&
    item.shape === pattern.shape &&
    item.stoneDensity === pattern.stoneDensity &&
    item.metalVisibility === pattern.metalVisibility &&
    item.finish === pattern.finish
  );

  if (inventoryMatch) {
    const pricing = applyPlatformPricing(
      inventoryMatch.baseCost,
      inventoryMatch.baseCost
    );

    return {
      source: 'INVENTORY',
      productId: inventoryMatch.id,
      pricing,
      moq: inventoryMatch.moq,
      leadTime: `${inventoryMatch.leadTimeDays} days`
    };
  }

  // 2️⃣ Manufacturer fallback
  const manufacturerMatch = manufacturerCatalog.find(item =>
    item.category === pattern.category &&
    item.shape === pattern.shape
  );

  if (manufacturerMatch) {
    const pricing = applyPlatformPricing(
      manufacturerMatch.minCost,
      manufacturerMatch.maxCost
    );

    return {
      source: 'MANUFACTURER',
      productId: manufacturerMatch.id,
      pricing,
      moq: manufacturerMatch.moq,
      leadTime: `${manufacturerMatch.leadTimeDays} days`
    };
  }

  return null;
};
