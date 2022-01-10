import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import gallery from './data/gallery.js';
import products from './data/products.js';
import categories from './data/categories.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Category from './models/categoryModel.js';
import Gallery from './models/galleryModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Gallery.deleteMany();
    await Category.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    await Gallery.insertMany(gallery);
    await Category.insertMany(categories);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`$[error]`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();
    await Gallery.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.log(`$[error]`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
