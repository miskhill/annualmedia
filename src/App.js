import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Movies from "./components/movies.js";
import Books from "./components/books.js";
import Series from "./components/series.js";
// import SignIn from './components/signIn.js';
// import SignUp from './components/signUp.js';
import NavBar from "./components/navbar.js";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/books' element={<Books />} />
        <Route exact path='/series' element={<Series />} />
        {/* <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
