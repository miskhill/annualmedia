import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./config/router.js";
import cors from "cors";
// import path, { dirname } from "path";
// import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
// const path = require('path')
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
const port = process.env.REACT_APP_PORT;
// const host = process.env.REACT_APP_HOST;
console.log(port, "using this port");
// console.log(host, 'using this host');

const startServer = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_DB_URI);
    console.log("MongoDB connected ⭐️");

    app.use(express.json());
    app.use(
      cors({
        origin: ["http://localhost:3000", "https://annualmedia.pages.dev", "https://annual-media-front-end.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    );

    app.use("/api", router);

    app.get("/", (_req, res) => {
      console.log("server home page request");
      res.send("Server home page");
    });

    app.use((req, _res, next) => {
      console.log(`Request received: ${req.method} - ${req.url}`);
      next();
    });

    // internal server errors handled
    app.use((err, _req, res, _next) => {
      console.log(err);
      return res.status(500).send({ message: err.message });
    });

    app.use((_req, res) => {
      return res
        .status(404)
        .render("404", { pageTitle: "Page Not Found", path: "/404" });
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
