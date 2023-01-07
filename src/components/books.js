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
        console.log(res.data, 'giles');
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => {  
        return (
          <MediaCard key={book.id} title={book.title} year={book.year} genre={book.genre} />
        )})}

    </div>
  );
}

export default Books;