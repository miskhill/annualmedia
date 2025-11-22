import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

dotenv.config();

const [,, emailArg, passwordArg] = process.argv;

if (!emailArg || !passwordArg) {
  console.error('Usage: npm run update-password -- <email> <newPassword>');
  process.exit(1);
}

const main = async () => {
  const uri = process.env.REACT_APP_DB_URI;

  if (!uri) {
    console.error('REACT_APP_DB_URI is not set. Please export it before running this script.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const user = await User.findOne({ email: emailArg.trim().toLowerCase() });
    if (!user) {
      console.error(`No user found with email ${emailArg}`);
      process.exitCode = 1;
      return;
    }

    user.password = await bcrypt.hash(passwordArg, 10);
    await user.save();
    console.log(`Password updated for ${user.email}`);
  } catch (err) {
    console.error('Failed to update password:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
  }
};

main();
