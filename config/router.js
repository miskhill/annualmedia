import express from 'express';
import { getAllMovies, createMovie, getMovieById } from '../server/controllers/moviesController.js';
import { getAllBooks, createBook, getBookById } from '../server/controllers/booksController.js';
import { getAllSeries, getSeriesById, createSeries } from '../server/controllers/seriesController.js';
// import { secureRoute } from './secureRoute.js';

//TO DO - add secureRoute to all create routes
//TO DO - add secureRoute to all delete routes and create those routes

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);

router.get('/series', getAllSeries);
router.get('/series/:id', getSeriesById);
router.post('/series', createSeries);

export default router;
