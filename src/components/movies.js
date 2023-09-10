import React, { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";
import Grid from "@mui/material/Grid";
import Filters from "./utils/filters.js";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("createdAt");
  const [selectedYear, setSelectedYear] = useState(2023);


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

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const whichSort = (array, sortBy) => {
    if (
      sortBy === "genre" ||
      sortBy === "title" ||
      sortBy === "createdAt"
    ) {
      return array.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
    } else {
      return array.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }
  };

  useEffect(() => {
    setFilteredMovies(
      whichSort(
        movies.filter((movie) => {
          return (
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
          ) && movie.createdAt && movie.createdAt.slice(0, 4) === selectedYear.toString();
        }),
        sortBy
      )
    );
  }, [movies, searchTerm, sortBy, selectedYear]);
  
  

  return (
    <>
      <Filters
        handleFilterChange={handleFilterChange}
        handleSortBy={handleSortBy}
        sortBy={sortBy}
        searchTerm={searchTerm}
      />
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
          You have watched <AnnualTotals arr={movies} year={selectedYear} handleYearChange={setSelectedYear} /> movies this
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
          {filteredMovies.map((movie) => (
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
