import dotenv from 'dotenv';
import mongoose from 'mongoose';
import  User  from '../models/user.js';
import userD from './data/userD.js';
import  Movie  from '../models/movie.js'; 
import movieD from './data/movieD.js';
import Series  from '../models/series.js';
import seriesD from './data/seriesD.js';
import Book  from '../models/book.js';
import bookD from './data/bookD.js';
dotenv.config();

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

    await User.create(userD);
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
