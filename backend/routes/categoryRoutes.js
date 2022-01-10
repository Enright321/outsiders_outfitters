import express from 'express';
import Category from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc    Fetch all categories
// @router  GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
  })
);

export default router;
