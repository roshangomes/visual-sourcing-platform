import { randomUUID } from 'crypto';

export const createImageSession = async (filePath: string) => {
  // Mock attribute extraction (PRD-aligned)
  const attributes = {
    category: 'RING',
    shape: 'ROUND',
    stoneDensity: 'MEDIUM',
    metalVisibility: 'HIGH',
    finish: 'POLISHED'
  };

  return {
    imageSessionId: randomUUID(),
    filePath,
    attributes,
    status: 'COMPLETED',
    createdAt: new Date().toISOString()
  };
};
