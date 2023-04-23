// import { useState, useEffect } from "react";
// import MediaCard from "./card.js";
// import axios from "axios";
// import AnnualTotals from "./utils/annualTotals.js";

// const Series = () => {
//   const [series, setSeries] = useState([]);

//   useEffect(() => {
//     try {
//       axios
//         .get("https://annualmediaserver.onrender.com/api/series")
//         .then((res) => {
//           setSeries(res.data);
//           console.log(res.data, "render data");
//         });
//     } catch (err) {
//       console.log(err, "catch error");
//     }
//   }, []);

//   return (
//     <>
//       <div className='totals'>
//         <h3>
//           {" "}
//           You have watched <AnnualTotals arr={series} year={2023} /> series this
//           year
//         </h3>
//       </div>
//       <div>
//         {series.map((series) => {
//           return (
//             <MediaCard
//               key={series.id}
//               title={series.title}
//               year={series.year}
//               genre={series.genre}
//               rating={series.rating}
//               image={series.poster}

//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Series;
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

  const filteredSeries = series.filter((s) => {
    return s.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="search">
        <input type="text" onChange={debounceSearch} />
        <button>Search</button>
        <h3>
          {" "}
          display search results for {searchTerm}, showing{" "}
          {filteredSeries.length}
          {filteredSeries.length === 1 ? "series" : "series"}
          {filteredSeries.length === 0 && searchTerm !== "" && (
            <p>No series found</p>
          )}
        </h3>
      </div>
      <div className="totals">
        <h3>
          You have watched{" "}
          <AnnualTotals arr={series} year={2023} /> series this year
        </h3>
      </div>
      <div>
        {series.map((s) => {
          if (searchTerm !== "") {
            return (
              <MediaCard
                key={filteredSeries[0].id}
                title={filteredSeries[0].title}
                year={filteredSeries[0].year}
                genre={filteredSeries[0].genre}
                rating={filteredSeries[0].rating}
                image={filteredSeries[0].poster}
              />
            );
          }
          return (
            <MediaCard
              key={s.id}
              title={s.title}
              year={s.year}
              genre={s.genre}
              rating={s.rating}
              image={s.poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default Series;
