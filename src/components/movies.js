import React, { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://annualmediaserver.onrender.com/api/movies")
        .then((res) => {
          setMovies(res.data);
          console.log(res.data, "render data");
        });
    } catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  // refactor handleSearch to debounce the typed in result

  const debounceSearch = (e) => {
    const searchTerm = e.target.value;
    const timer = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 1500);
    console.log(timer, "timer");
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [movies, searchTerm]);

  return (
    <>
      <div className='search'>
        <input type='text' onChange={debounceSearch} />
        <button>Search</button>
        <h3>
          {" "}
          display search results for {searchTerm}, showing{" "}
          {searchTerm !== "" ? filteredMovies.length : movies.length}
          {searchTerm !== "" && (filteredMovies.length === 1 ? " movie" : " movies")}

          {filteredMovies.length === 0 && searchTerm !== "" && (
            <p>No movies found</p>
          )}
        </h3>
      </div>
      <div className='totals'>
        <h3>
          {" "}
          You have watched <AnnualTotals arr={movies} year={2023} /> movies this
          year
        </h3>
      </div>

      <div>
        {(searchTerm !== ""
          ? filteredMovies.map((movie) => (
              <MediaCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                genre={movie.genre}
                rating={movie.rating}
                image={movie.poster}
              />
            ))
          : movies.map((movie) => (
              <MediaCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                genre={movie.genre}
                rating={movie.rating}
                image={movie.poster}
              />
            )))}
      </div>
    </>
  );
};

export default Movies;
