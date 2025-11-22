import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/user.js';
import Movie from '../models/movie.js'; 
import movieD from './data/movieD.js';
import Series from '../models/series.js';
import seriesD from './data/seriesD.js';
import Book from '../models/book.js';
import bookD from './data/bookD.js';
dotenv.config();

const buildUserSeeds = () => {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_ROLE = 'admin' } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log('Skipping admin user seed – set ADMIN_EMAIL and ADMIN_PASSWORD to seed a user.');
    return [];
  }

  return [{
    email: ADMIN_EMAIL.trim().toLowerCase(),
    password: ADMIN_PASSWORD,
    role: ADMIN_ROLE,
  }];
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI);
    console.log('MongoDB connected ⭐️');

 // seed mongodb with data from data files
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Series.deleteMany({});
    await Book.deleteMany({});
    console.log('Data deleted 🗑');

    const userSeeds = buildUserSeeds();
    if (userSeeds.length) {
      await User.create(userSeeds);
      console.log('Admin user seeded 👤');
    }
    await Movie.create(movieD);
    await Series.create(seriesD);
    await Book.create(bookD);
    console.log('Data created 🌱');

    mongoose.connection.close();
    console.log('MongoDB disconnected 🚪');
  } catch (err) {
    console.log(err);
  }
};

seedDB();
