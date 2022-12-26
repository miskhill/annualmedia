import express from 'express';
import { getAllMovies, createMovie, getMovieById } from '../server/controllers/moviesController';
import { getAllBooks, createBook, getBookById } from '../server/controllers/booksController';
import { getAllSeries, getSeriesById, createSeries } from '../server/controllers/seriesController';
import { secureRoute } from './secureRoute';

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', secureRoute, createMovie);

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', secureRoute, createBook);

router.get('/series', getAllSeries);
router.get('/series/:id', getSeriesById);
router.post('/series', secureRoute, createSeries);

export default router;
