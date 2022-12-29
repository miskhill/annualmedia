import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Movies from './components/movies';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
