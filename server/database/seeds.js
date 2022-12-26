import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { user, movie, series, book } from '../models/user.js';

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI);
    console.log('MongoDB connected ⭐️');

    await user.deleteMany({});
    await movie.deleteMany({});
    await series.deleteMany({});
    await book.deleteMany({});

    const users = [
      {
        username: 'user1',
        password: 'password',
        email: '
      },
      {
        username: 'user2',
        password: 'password',
        email: '
      },
      {
        username: 'user3',
        password: 'password',
        email: '
      },
    ];

    const movies = [
      {
        