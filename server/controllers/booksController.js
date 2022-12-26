import book from '../models/book';

export const getAllBooks = async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await
      book.findById
        (id);
    res.status(200).json(book);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const createBook = async (req, res) => {
  const { body } = req;
  const newBook = new book(body);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  }
  catch (err) {
    res.status(409).json({ message: err.message });
  }
}