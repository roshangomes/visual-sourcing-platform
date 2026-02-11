import { Request, Response } from 'express';
import { createImageSession } from '../services/imageService.js';

export const uploadImage = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      error: 'Image file is required',
    });
  }

  const session = await createImageSession(req.file.path);

  res.json({
    success: true,
    data: session,
  });
};
