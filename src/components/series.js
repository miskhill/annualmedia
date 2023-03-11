import { useState, useEffect } from 'react';
import MediaCard from './card.js';
import axios from 'axios';

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
    <div>
      {series.map((series) => {  
        return (
          <MediaCard key={series.id} title={series.title} year={series.year} genre={series.genre} image={series.poster } />
        )})}

    </div>
  );
}

export default Series;