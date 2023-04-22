import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    console.log(filteredMovies, "filteredMovies");
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // clear button functionality
  const clearSearch = () => {
      setSearchTerm("");
    }

  return (
    <>
      <div className='search'>
        <input type='text' onChange={handleSearch} />
        <button>Search</button>
      </div>
      {searchTerm.length > 0 && (
        <div className='search-results'>
          <h3>
            Search results for <span>{searchTerm}</span>
            <button onClick={clearSearch}><i className="fas fa-times"></i>Clear</button>
          </h3>
        </div>
      )}

      <div className='totals'>
        <h3>
          {" "}
          You have watched <AnnualTotals arr={movies} year={2023} /> movies this
          year
        </h3>
      </div>

      <div>
        {movies.map((movie) => {
          return (
            <MediaCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              rating={movie.rating}
              image={movie.poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;
