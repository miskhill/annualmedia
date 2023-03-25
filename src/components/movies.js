import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from './utils/annualTotals.js';


const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://annualmediaserver.onrender.com/api/movies").then((res) => {
        setMovies(res.data);
        console.log(res.data, 'render data');
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <>
    <AnnualTotals arr={movies} year={2023} />
    <div>
      {movies.map((movie) => {  
        return (
          <MediaCard key={movie.id} title={movie.title} year={movie.year} genre={movie.genre} image={movie.poster} />
        )})}

      </div>
      </>
  );
}

export default Movies;
