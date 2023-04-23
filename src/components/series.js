import React, { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSeries, setFilteredSeries] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://annualmediaserver.onrender.com/api/series")
        .then((res) => {
          setSeries(res.data);
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
    setFilteredSeries(
      Array.from(new Set(series.filter((serie) =>
        serie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ).map(serie => serie.title)))
      .map(title => series.find(serie => serie.title === title))
    );
  }, [series, searchTerm]);

  return (
    <>
      <div className='search'>
        <input type='text' onChange={debounceSearch} />
        <button>Search</button>
        <h3>
          {" "}
          display search results for {searchTerm}, showing{" "}
          {searchTerm !== "" ? filteredSeries.length : series.length}
          {searchTerm !== "" && (filteredSeries.length === 1 ? " series" : " series")}

          {filteredSeries.length === 0 && searchTerm !== "" && (
            <p>No series found</p>
          )}
        </h3>
      </div>
      <div className='totals'>
        <h3>
          {" "}
          You have watched <AnnualTotals arr={series} year={2023} /> series this
          year
        </h3>
      </div>

      <div>
        {(searchTerm !== ""
          ? filteredSeries.map((serie) => (
              <MediaCard
                key={serie.id}
                title={serie.title}
                year={serie.year}
                genre={serie.genre}
                rating={serie.rating}
                image={serie.poster}
              />
            ))
          : series.map((serie) => (
              <MediaCard
                key={serie.id}
                title={serie.title}
                year={serie.year}
                genre={serie.genre}
                rating={serie.rating}
                image={serie.poster}
              />
            )))}
      </div>
    </>
  );
};

export default Series;

