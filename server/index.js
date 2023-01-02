
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from '../config/router.js';
dotenv.config();

const app = express();

const port = 4000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI)
    console.log('MongoDB connected ⭐️')

    app.use(express.json());
    app.use('/api', router);

    // app.get("/api", (req, res) => {
    //   res.json({ message: "Hello from server!" });
    //   console.log("Hello from server!")
    // });

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })

    app.use((req, _res, next) => {
      console.log(`Request received: ${req.method} - ${req.url}`)
      next()
    })

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