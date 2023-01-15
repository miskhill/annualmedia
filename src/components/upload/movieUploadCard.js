import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const MovieUploadCard = () => {
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
    <>
      <h1>Movie Upload</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={mystyle}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue='title'
          {...register("title", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.title && <span>The title is required</span>}

        <input defaultValue='year' {...register("year", { required: true })} />
        {errors.year && <span>The year is required</span>}

        <input
          defaultValue='genre'
          {...register("genre", { required: true })}
        />
        {errors.genre && <span>The genre is required</span>}

        <input
          defaultValue='director'
          {...register("director", { required: true })}
        />
        {errors.director && <span>The director is required</span>}

        <input
          defaultValue='poster'
          {...register("poster", { required: true })}
        />
        {errors.poster && <span>The poster is required</span>}

        <input
          defaultValue='actors'
          {...register("actors", { required: true })}
        />
        {errors.actors && <span>The actors are required</span>}

        <input defaultValue='plot' {...register("plot", { required: true })} />
        {errors.plot && <span>The plot is required</span>}

        <input
          defaultValue='imdbID'
          {...register("imdbID", { required: true })}
        />
        {errors.imdbID && <span>The imdbID is required</span>}

        <input
          defaultValue='website'
          {...register("website", { required: true })}
        />
        {errors.website && <span>The website is required</span>}

        <input type='submit' />
      </form>
    </>
  );
};

export default MovieUploadCard;
