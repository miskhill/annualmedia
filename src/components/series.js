import React, { useState, useEffect } from "react";
import axios from "axios";
import MediaCard from "./card.js";
import AnnualTotals from "./utils/annualTotals.js";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const debounceSearch = (e) => {
    const searchTerm = e.target.value;
    const timer = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 1500);
    console.log(timer, "timer");
    return () => clearTimeout(timer);
  };

  const filteredSeries = series.filter((series) => {
    return series.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const uniqueSeries = [...new Map(filteredSeries.map(item => [item.id, item])).values()];

  return (
    <>
      <div className="search">
        <input type="text" onChange={debounceSearch} />
        <button>Search</button>
        <h3>
          display search results for {searchTerm}, showing{" "}
          {uniqueSeries.length}
          {uniqueSeries.length === 1 ? " series" : " series"}
          {uniqueSeries.length === 0 && searchTerm !== "" && (
            <p>No series found</p>
          )}
        </h3>
      </div>
      <div className="totals">
        <h3>
          You have watched <AnnualTotals arr={series} year={2023} /> series
          this year
        </h3>
      </div>
      <div>
        {uniqueSeries.map((series) => (
          <MediaCard
            key={series.id}
            title={series.title}
            year={series.year}
            genre={series.genre}
            rating={series.rating}
            image={series.poster}
          />
        ))}
      </div>
    </>
  );
};

export default Series;
