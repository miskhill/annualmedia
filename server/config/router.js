import express from "express";
import {
  getAllMovies,
  createMovie,
  getMovieById,
} from "../controllers/moviesController.js";
import {
  getAllBooks,
  createBook,
  getBookById,
} from "../controllers/booksController.js";
import {
  getAllSeries,
  getSeriesById,
  createSeries,
} from "../controllers/seriesController.js";
import { login } from "../controllers/authController.js";
// import { secureRoute } from './secureRoute.js';

//TO DO - add secureRoute to all create routes
//TO DO - add secureRoute to all delete routes and create those routes

const router = express.Router();

router.get("/movies", getAllMovies);
router.get("/movies/:id", getMovieById);
router.post("/movies", createMovie);

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);

router.get("/series", getAllSeries);
router.get("/series/:id", getSeriesById);
router.post("/series", createSeries);

router.post("/auth/login", login);

export default router;
