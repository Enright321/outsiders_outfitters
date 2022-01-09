import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import accessories from './data/accessories.js';
import backpacks from './data/backpacks.js';
import boots from './data/boots.js';
import categories from './data/categories.js';
import gallery from './data/gallery.js';
import hammocks from './data/hammocks.js';
import jackets from './data/jackets.js';
import tents from './data/tents.js';
const app = express();

dotenv.config();

connectDB();

app.get('/', (req, res) => {
  res.send('Api is running');
});
app.get('/api/categories', (req, res) => {
  res.json(categories);
});
app.get('/api/categories/accessories', (req, res) => {
  res.json(accessories);
});
app.get('/api/categories/backpacks', (req, res) => {
  res.json(backpacks);
});
app.get('/api/categories/boots', (req, res) => {
  res.json(boots);
});
app.get('/api/categories/gallery', (req, res) => {
  res.json(gallery);
});
app.get('/api/categories/hammocks', (req, res) => {
  res.json(hammocks);
});
app.get('/api/categories/jackets', (req, res) => {
  res.json(jackets);
});
app.get('/api/categories/tents', (req, res) => {
  res.json(tents);
});
app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
