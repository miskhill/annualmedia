import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./config/router.js";
import path from "path";

dotenv.config();

const app = express();

const port = process.env.REACT_APP_PORT;
console.log(port);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI);
    console.log("MongoDB connected ⭐️");

    app.use(express.json());
    app.use("/api", router);

    app.get("*", (req, res) => {
      console.log(path, 'path');
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });

    app.use((req, _res, next) => {
      console.log(`Request received: ${req.method} - ${req.url}`);
      next();
    });

    app.use((_req, res) => {
      // return res.status(404).json({ message: "Path not found" });
      return res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404'});
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
