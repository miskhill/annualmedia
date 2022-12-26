
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

const port = 4000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI)
    console.log('MongoDB connected ⭐️')

    app.use(express.json());

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  catch (err) {
    console.log(err);
  }
};

startServer();