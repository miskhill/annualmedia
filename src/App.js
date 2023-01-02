import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Movies from './components/movies';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import NavBar from './components/navbar';
import './App.css';


function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <h1>{!data ? "Loading..." : data}</h1>
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
