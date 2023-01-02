import movies from '../models/movie.js';

export const getAllMovies = async (req, res) => {
  try {
    const movies = await movies.find();
    res.status(200).json(movies);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await
      movies.findById
        (id);
    res.status(200).json(movie);

  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const createMovie = async (req, res) => {
  const { body } = req;
  const newMovie = new movies(body);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  }
  catch (err) {
    res.status(409).json({ message: err.message });
  }
}