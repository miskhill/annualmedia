// import React, { useState, useEffect } from "react";
// import MediaCard from "./card.js";
// import axios from "axios";
// import AnnualTotals from "./utils/annualTotals.js";
// import Filter from "./utils/filter.js";
// import Grid from "@mui/material/Grid";

// const Series = () => {
//   const [series, setSeries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredSeries, setFilteredSeries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filters, setFilters] = useState({
//     genres: [],
//     ratings: [],
//     years: [],
//     createdAts: [],
//   });
//   const [selectedFilters, setSelectedFilters] = useState({
//     genre: "",
//     rating: "",
//     year: "",
//     createdAt: "",
//   });

//   useEffect(() => {
//     setLoading(true);
//     try {
//       axios
//         .get("https://annualmediaserver.onrender.com/api/series")
//         .then((res) => {
//           setSeries(res.data);
//           setLoading(false);
//           console.log(res.data, "render data");
//         });
//     } catch (err) {
//       console.log(err, "catch error");
//     }
//   }, []);

//   useEffect(() => {
//     const filtered = series
//       .filter((series) => series.title.toLowerCase().includes(searchTerm.toLowerCase()))
//       .filter((series) => {
//         let match = true;
//         Object.keys(selectedFilters).forEach((key) => {
//           if (selectedFilters[key] !== "") {
//             if (Array.isArray(series[key])) {
//               if (!series[key].includes(selectedFilters[key])) {
//                 match = false;
//               }
//             } else {
//               if (series[key] !== selectedFilters[key]) {
//                 match = false;
//               }
//             }
//           }
//         });
//         return match;
//       });
//     setFilteredSeries(filtered);
//   }, [series, searchTerm, selectedFilters]);

//   // refactor handleSearch to debounce the typed in result

//   const debounceSearch = (e) => {
//     const searchTerm = e.target.value;
//     const timer = setTimeout(() => {
//       setSearchTerm(searchTerm);
//     }, 1500);
//     console.log(timer, "timer");
//     return () => clearTimeout(timer);
//   };

//   useEffect(() => {
//     setFilteredSeries(
//       Array.from(
//         new Set(
//           series
//             .filter((serie) =>
//               serie.title.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((serie) => serie.title)
//         )
//       ).map((title) => series.find((serie) => serie.title === title))
//     );
//   }, [series, searchTerm]);

//   return (
//     <>
//       <div
//         className='search'
//         style={{
//           backgroundColor: "#8c1839",
//           color: "#ffffff",
//           padding: "10px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <input
//           type='text'
//           onChange={debounceSearch}
//           style={{
//             backgroundColor: "#ffffff",
//             color: "#000000",
//             padding: "5px",
//             border: "none",
//             borderRadius: "5px",
//             width: "50%",
//           }}
//         />
//         <button
//           style={{
//             backgroundColor: "#ffffff",
//             color: "#8c1839",
//             padding: "5px",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Search
//         </button>
//         {searchTerm !== "" && (
//           <h3
//             style={{
//               margin: "0",
//               fontSize: "18px",
//               fontWeight: "normal",
//               textAlign: "center",
//             }}
//           >
//             Displaying search results for "{searchTerm}", showing{" "}
//             {filteredSeries.length}{" "}
//             {filteredSeries.length === 1 ? "series" : "series"}
//             {filteredSeries.length === 0 && (
//               <p style={{ margin: "0" }}>No series found</p>
//             )}
//           </h3>
//         )}
//       </div>

//       <div
//         className='totals'
//         style={{
//           backgroundColor: "#f5f5f5",
//           color: "#8c1839",
//           padding: "10px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "normal" }}>
//           You have watched{" "}
//           <AnnualTotals
//             arr={series}
//             year={2023}
//             style={{ fontWeight: "bold" }}
//           />{" "}
//           series this year
//         </h3>
//       </div>
//       <Filter
//         filters={filters}
//         setFilters={setFilters}
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//         mediaType='series'
//       />
//       {loading ? (
//         <div
//           className='loading-container'
//           style={{
//             display: loading ? "flex" : "none",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img src='loading.gif' alt='Loading' />
//         </div>
//       ) : (
//         <Grid container spacing={2}>
//           {searchTerm !== ""
//             ? filteredSeries.map((serie) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3}>
//                   <MediaCard
//                     key={serie.id}
//                     title={serie.title}
//                     year={serie.year}
//                     genre={serie.genre}
//                     rating={serie.rating}
//                     image={serie.poster}
//                     plot={serie.plot}
//                   />
//                 </Grid>
//               ))
//             : series.map((serie) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3}>
//                   <MediaCard
//                     key={serie.id}
//                     title={serie.title}
//                     year={serie.year}
//                     genre={serie.genre}
//                     rating={serie.rating}
//                     image={serie.poster}
//                     plot={serie.plot}
//                   />
//                 </Grid>
//               ))}
//         </Grid>
//       )}
//     </>
//   );
// };

// export default Series;

import React, { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";
import Filters from "./utils/filters.js";
import Grid from "@mui/material/Grid";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("year");
  const [filteredSeries, setFilteredSeries] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get("https://annualmediaserver.onrender.com/api/series")
        .then((res) => {
          setSeries(res.data);
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

  useEffect(() => {
    const regexSearch = new RegExp(searchTerm, "i");
    const filtered = series
      .filter((series) => regexSearch.test(series.title))
      .sort((a, b) => {
        if (sortBy === "year") {
          return b.year - a.year;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
    setFilteredSeries(filtered);
  }, [series, searchTerm, sortBy]);

  return (
    <>
      <Filters
        searchTerm={searchTerm}
        handleFilterChange={handleFilterChange}
        sortBy={sortBy}
        handleSortBy={handleSortBy}
      />
      <div
        className="totals"
        style={{
          backgroundColor: "#f5f5f5",
          color: "#8c1839",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "normal" }}>
          You have watched{" "}
          <AnnualTotals arr={series} year={2023} style={{ fontWeight: "bold" }} />{" "}
          series this year
        </h3>
      </div>
      {loading ? (
        <div
          className="loading-container"
          style={{
            display: loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="loading.gif" alt="Loading" />
        </div>
      ) : (
        <Grid container spacing={2}>
          {filteredSeries.map((serie) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MediaCard
                key={serie.id}
                title={serie.title}
                year={serie.year}
                genre={serie.genre}
                rating={serie.rating}
                image={serie.poster}
                plot={serie.plot}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Series;
