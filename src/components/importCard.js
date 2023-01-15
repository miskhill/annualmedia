import React from "react";
import MovieUploadCard from "./upload/movieUploadCard";
import SeriesUploadCard from "./upload/seriesUploadCard";

const ImportCard = () => {
  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column",
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmitMovie = (movie) => {
  //   axios
  //     .post("/api/movies", movie)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <MovieUploadCard />
      <SeriesUploadCard />
    </>
  );
};

export default ImportCard;
