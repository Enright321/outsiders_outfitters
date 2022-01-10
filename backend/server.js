import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

dotenv.config();

connectDB();

app.use((req, res, next) => {
  console.log('Hello');
  next();
});

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/gallery', galleryRoutes);

// error handler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
