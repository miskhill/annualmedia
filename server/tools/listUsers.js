import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/user.js';

dotenv.config();

const main = async () => {
  const uri = process.env.REACT_APP_DB_URI;

  if (!uri) {
    console.error('REACT_APP_DB_URI is not set. Please export it before running this script.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const users = await User.find({}, 'email role createdAt updatedAt').lean();
    if (!users.length) {
      console.log('No users found.');
    } else {
      users.forEach((user) => {
        console.log(`${user.email} (${user.role}) - created ${user.createdAt?.toISOString?.() ?? 'n/a'}`);
      });
    }
  } catch (err) {
    console.error('Failed to list users:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
  }
};

main();
