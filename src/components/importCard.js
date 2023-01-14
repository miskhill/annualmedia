import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ImportCard = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (movie) => {
    axios
      .post("/api/movies", movie)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={mystyle}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue='title' {...register("titleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.titleRequired && <span>The title is required</span>}

      <input defaultValue='year'{...register("yearRequired", { required: true })} />
      {errors.yearRequired && <span>The year is required</span>}

      <input defaultValue='genre'{...register("genreRequired", { required: true })} />
      {errors.genreRequired && <span>The genre is required</span>}

      <input defaultValue='director'{...register("directorRequired", { required: true })} />
      {errors.directorRequired && <span>The director is required</span>}

      <input defaultValue='poster'{...register("posterRequired", { required: true })} />
      {errors.posterRequired && <span>The poster is required</span>}

      <input defaultValue="actors"{...register("actorsRequired", { required: true })} />
      {errors.actorsRequired && <span>The actors are required</span>}

      <input defaultValue="plot"{...register("plotRequired", { required: true })} />
      {errors.plotRequired && <span>The plot is required</span>}

      <input defaultValue="imdbID" {...register("imdbIDRequired", { required: true })} />
      {errors.imdbIDRequired && <span>The imdbID is required</span>}

      <input defaultValue="website"{...register("websiteRequired", { required: true })} />
      {errors.websiteRequired && <span>The website is required</span>}

      <input type='submit' />
    </form>
  );
};

export default ImportCard;
