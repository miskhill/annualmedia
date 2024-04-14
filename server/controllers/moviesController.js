import movies from "../models/movie.js";

export const getAllMovies = async (req, res) => {
  // const limit = Number(req.query.limit);
  // const offset = Number(req.query.offset);
  try {
    const findMovies = await movies.find();
    res.status(200).json(findMovies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createMovie = async (req, res) => {
  const { body } = req;
  const newMovie = new movies(body);
  console.log(newMovie, "newMovie");
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log("error creating movie");
  }
};
