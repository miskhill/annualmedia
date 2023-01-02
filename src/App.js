import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Movies from "./components/movies.js";
// import SignIn from './components/signIn.js';
// import SignUp from './components/signUp.js';
import NavBar from "./components/navbar.js";
import axios from "axios";
import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);
  // const [movies, setMovies] = React.useState('');
  const [books, setBooks] = useState("");
  console.log(books, "books")

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

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

  // map over books and return the titles of each book
  const bookTitles = books.map((book) => {
    return book.title;
  });


  return (
    <BrowserRouter>
      <NavBar />
      {/* <h1>{!data ? "Loading..." : data}</h1> */}
      <h2>{!books ? "Books loading..." : bookTitles}</h2>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movies' element={<Movies />} />
        {/* <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
