import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    index: true,
    maxlength: 100,
  },
  year: {
    type: Number,
    required: [true, "can't be blank"],
    index: true,
  },
  genre: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
  },
  director: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
  },
  actors: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
  },
  plot: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
  },
  poster: {
    type: String,
    required: [true, "can't be blank"],
    maxlength: 100,
    index: true,
  },
  imdbID: {
    type: String,
    required: [true, "can't be blank"],
    maxlength: 100,
  },
  website: {
    type: String,
    index: true,
    maxlength: 100,
  },
  rating: {
    // rating to be between 0 and 5
    type: Number,
    min: 0,
    max: 5,
    index: true,
    required: [true, "enter a number between 0 and 5"],
  },
}, { timestamps: true });

export default mongoose.model('Movie', MovieSchema);