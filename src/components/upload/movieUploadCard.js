import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MovieUploadCard = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "#39a2db",
    padding: "10px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (movie) => {
    axios
      .post("https://annualmediaserver.onrender.com/api/movies", movie)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          navigate("/movies");
        }
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
          placeholder='title'
          {...register("title", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.title && <span>The title is required</span>}

        <input placeholder='year' {...register("year", { required: true })} />
        {errors.year && <span>The year is required</span>}

        <input
          placeholder='genre'
          {...register("genre", { required: true })}
        />
        {errors.genre && <span>The genre is required</span>}

        <input
          placeholder='director'
          {...register("director", { required: true })}
        />
        {errors.director && <span>The director is required</span>}

        <input
          placeholder='poster'
          {...register("poster", { required: true, maxLength: 100 })}
        />
        {errors.poster && <span>The poster is required</span>}

        <input
          placeholder='actors'
          {...register("actors", { required: true })}
        />
        {errors.actors && <span>The actors are required</span>}

        <input placeholder='plot' {...register("plot", { required: true })} />
        {errors.plot && <span>The plot is required</span>}

        <input
          placeholder='imdbID'
          {...register("imdbID", { required: true })}
        />
        {errors.imdbID && <span>The imdbID is required</span>}

        <input type='submit' />
      </form>
    </>
  );
};

export default MovieUploadCard;
