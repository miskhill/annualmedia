import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import Filters from './utils/filters.js';
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books, "books");

  useEffect(() => {
    try {
      axios.get("/api/books").then((res) => {
        setBooks(res.data);
      });
    } catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  // function to search for title, genre, year, createdAt, author but must not try to access book before init
  // const search = (e) => {
  //   e.preventDefault();
  //   const search = e.target.value;
  //   console.log(search, "search");
  //   axios.get(`/api/books?search=${search}`).then((res) => {
  //     setBooks(res.data);
  //   });
  // };

  // When we have setBooks, we can use it to filter the books
  // const filter = (e) => {
  //   e.preventDefault();
  //   const filter = e.target.value;
  //   console.log(filter, "filter");
  //   axios.get(`/api/books?filter=${filter}`).then((res) => {
  //     setBooks(res.data);
  //   });
  // };


  return (
    <>
      <div>
     <Filters />
      </div>

      <div>
        {books.map((book) => {
          return (
            <MediaCard
              key={book.id}
              title={book.title}
              year={book.year}
              genre={book.genre}
              image={book.poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default Books;
