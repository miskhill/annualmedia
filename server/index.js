
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

const port = 4000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI)
    console.log('MongoDB connected ⭐️')

    app.use(bodyParser.json());

    app.get("/api", (req, res) => {
      res.json({ message: "Hello from server!" });
      console.log("Hello from server!")
    });

    app.use((_req, res) => {
      return res.status(404).json({ message: 'Path not found' })
    })

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  catch (err) {
    console.log(err);
  }
};

startServer();