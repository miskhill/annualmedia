import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    index: true,
    maxlength: 100,
  },
  author: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
  },
  genre: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 100,
  },
  publisher: {
    type: String,
    index: true,
    maxlength: 100,
  },
  year: {
    type: Number,
    required: [true, "can't be blank"],
    index: true,
  },
  pages: {
    type: Number,
    required: [true, "can't be blank"],
    index: true,
  },
  poster: {
    type: String,
    index: true,
    maxlength: 100,
  },
  plot: {
    type: String,
    required: [true, "can't be blank"],
    index: true,
    maxlength: 2000,
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

export default mongoose.model('Book', BookSchema);