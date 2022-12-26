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
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);