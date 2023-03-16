import { useState, useEffect } from 'react';
import MediaCard from './card.js';
import axios from 'axios';
import AnnualTotals from './utils/annualTotals.js';

const Series = () => {

  const [series, setSeries] = useState([]);
  console.log(series, "series")

  useEffect(() => {
    try {
      axios.get("/api/series").then((res) => {
        setSeries(res.data);
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <>
      <AnnualTotals arr={series} year={2023} />
    <div>
      {series.map((series) => {  
        return (
          <MediaCard key={series.id} title={series.title} year={series.year} genre={series.genre} image={series.poster } />
        )})}

    </div>
    </>
  );
}

export default Series;