import { Request, Response } from 'express';
import { generateDesignPatterns } from '../services/patternService.js';
import { generateRecommendation } from '../services/recommendationService.js';

export const getRecommendations = async (req: Request, res: Response) => {
  const { attributes } = req.body;

  if (!attributes) {
    return res.status(400).json({
      success: false,
      error: 'Attributes are required'
    });
  }

  const patterns = generateDesignPatterns(attributes);

const recommendations = [];

// Primary
const primaryRec = generateRecommendation(patterns.primary);
if (primaryRec) {
  recommendations.push({
    type: 'PRIMARY',
    ...primaryRec,
  });
}

// Alternatives
patterns.alternatives.forEach(pattern => {
  const rec = generateRecommendation(pattern);
  if (rec) {
    recommendations.push({
      type: 'ALTERNATIVE',
      ...rec,
    });
  }
});


  res.json({
    success: true,
    data: recommendations
  });
};
