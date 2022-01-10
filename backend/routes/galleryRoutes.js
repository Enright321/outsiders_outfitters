import express from 'express';
import Gallery from '../models/galleryModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc    Fetch gallery
// @router  GET /api/gallery
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const gallery = await Gallery.find({});
    res.json(gallery);
  })
);

export default router;
