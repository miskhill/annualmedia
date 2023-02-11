import { useState, useEffect } from 'react';
import MediaCard from './card.js';
import axios from 'axios';

const Books = () => {

  const [books, setBooks] = useState([]);
  console.log(books, "books")

  useEffect(() => {
    try {
      axios.get("/api/books").then((res) => {
        setBooks(res.data);
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <div>
      {books.map((book) => {  
        return (
          <MediaCard key={book.id} title={book.title} year={book.year} genre={book.genre} image={book.poster} />
        )})}

    </div>
  );
}

export default Books;