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
    maxlength: 200,
  },
  poster: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
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
}, { timestamps: true });

export default mongoose.model('Movie', MovieSchema);