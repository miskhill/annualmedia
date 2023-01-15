import React, { useState } from "react";
import BookUploadCard from './upload/bookUploadCard';
import MovieUploadCard from "./upload/movieUploadCard";
import SeriesUploadCard from "./upload/seriesUploadCard";

const ImportCard = () => {

  // const [selected, setSelected] = useState(false);

  // const handleSelect = (e) => {
  //   setSelected(e.target.value);
  // };

  // function to choose movie, series or book
  // const chooseUpload = () => {
  //   if (selected === "movie") {
  //     setSelected(true)
  //     return <MovieUploadCard />;
  //   } else if (selected === "series") {
  //     setSelected(true)
  //     return <SeriesUploadCard />;
  //   } else if (selected === "book") {
  //     setSelected(true)
  //     return <BookUploadCard />;
  //   }
  // };

 // allow a user to choose between movie, series or book upload
  
  

  return (
    <>
      <MovieUploadCard  />
      <SeriesUploadCard />
      <BookUploadCard />
    </>
  );
};

export default ImportCard;
