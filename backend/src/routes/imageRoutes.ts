import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/imageController.js';

const router = Router();

// temp storage (image deleted later)
const upload = multer({
  dest: 'uploads/temp/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

router.post('/upload', upload.single('image'), uploadImage);

export default router;
