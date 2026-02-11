import { Request, Response } from 'express';
import { getCart, addToCart, submitCart } from '../services/cartService.js';

export const viewCart = (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: getCart(),
  });
};

export const addItemToCart = (req: Request, res: Response) => {
  const { recommendation, quantity } = req.body;

  if (!recommendation || !quantity) {
    return res.status(400).json({
      success: false,
      error: 'Recommendation and quantity are required',
    });
  }

  const updatedCart = addToCart({
    recommendation,
    quantity,
  });

  res.json({
    success: true,
    data: updatedCart,
  });
};

export const submitCartIntent = (_req: Request, res: Response) => {
  const submittedCart = submitCart();

  res.json({
    success: true,
    message: 'Cart submitted successfully',
    data: submittedCart,
  });
};
