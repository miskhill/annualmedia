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
        console.log(res.data, 'giles');
      });
    }
    catch (err) {
      console.log(err, "catch error");
    }
  }, []);

  return (
    <div>
      <h1>Series</h1>
      {series.map((series) => {  
        return (
          <MediaCard key={series.id} title={series.title} year={series.year} genre={series.genre} />
        )})}

    </div>
  );
}

export default Series;