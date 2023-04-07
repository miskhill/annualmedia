import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import axios from "axios";
import AnnualTotals from "./utils/annualTotals.js";

const Series = () => {
  const [series, setSeries] = useState([]);

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

  return (
    <>
      <div className='totals'>
        <h3>
          {" "}
          You have watched <AnnualTotals arr={series} year={2023} /> series this
          year
        </h3>
      </div>
      <div>
        {series.map((series) => {
          return (
            <MediaCard
              key={series.id}
              title={series.title}
              year={series.year}
              genre={series.genre}
              image={series.poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default Series;
