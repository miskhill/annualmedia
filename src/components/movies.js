import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";


const Movies = () => {

  const [movies, setMovies] = useState([]);
  console.log(movies, "movies")

  useEffect(() => {
    try {
      axios.get("/api/movies").then((res) => {
        setMovies(res.data);
        console.log(res.data, 'giles');
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => {  
        return (
          <MediaCard key={movie.id} title={movie.title} year={movie.year} genre={movie.genre} image={movie.poster} />
        )})}

    </div>
  );
}

export default Movies;
