import React, { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";

import Grid from "@mui/material/Grid";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get("https://annualmediaserver.onrender.com/api/movies")
        .then((res) => {
          setMovies(res.data);
          setLoading(false);
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
<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }} className='search'>
  <input style={{ width: "250px", height: "30px", borderRadius: "5px", border: "1px solid #ccc", padding: "5px 10px", fontSize: "16px", marginRight: "10px" }} type='text' onChange={debounceSearch} />
  <button style={{ backgroundColor: "#e50914", color: "#fff", border: "none", borderRadius: "5px", padding: "5px 10px", fontSize: "16px", cursor: "pointer" }}>Search</button>
  {searchTerm !== "" && (
    <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: "0" }}>
      {" "}
      display search results for {searchTerm}, showing {filteredMovies.length}{" "}
      {filteredMovies.length === 1 ? "movie" : "movies"}
    </h3>
  )}
</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          textAlign: "center",
        }}
        className='totals'
      >
        <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: "0" }}>
          {" "}
          You have watched <AnnualTotals arr={movies} year={2023} /> movies this
          year
        </h3>
      </div>

      {loading ? (
        <div
          className='loading-container'
          style={{
            display: loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src='loading.gif' alt='Loading' />
        </div>
      ) : (
        <Grid container spacing={3}>
          {searchTerm !== ""
            ? filteredMovies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} key={movie.id}>
                  <MediaCard
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}
                    rating={movie.rating}
                    image={movie.poster}
                    plot={movie.plot}
                  />
                </Grid>
              ))
            : movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                  <MediaCard
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}
                    rating={movie.rating}
                    image={movie.poster}
                    plot={movie.plot}
                  />
                </Grid>
              ))}
        </Grid>
      )}
    </>
  );
};

export default Movies;
