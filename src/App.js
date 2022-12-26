import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Movies from './components/movies';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
