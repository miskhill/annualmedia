import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MovieUploadCard = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "#e50914",
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

  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api"
      : "https://annualmediaserver.onrender.com/api";

  const onSubmit = (movie) => {
    axios
      .post(`${apiUrl}/movies`, movie)
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
        <input placeholder='Title' {...register("title", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.title && <span>The title is required</span>}

        <input placeholder='Year' {...register("year", { required: true })} />
        {errors.year && <span>The year is required</span>}

        <input placeholder='Genre' {...register("genre", { required: true })} />
        {errors.genre && <span>The genre is required</span>}

        <input
          placeholder='Director'
          {...register("director", { required: true })}
        />
        {errors.director && <span>The director is required</span>}

        <input
          placeholder='Poster'
          {...register("poster", { required: true, maxLength: 100 })}
        />
        {errors.poster && <span>The poster is required</span>}

        <input
          placeholder='Actors'
          {...register("actors", { required: true })}
        />
        {errors.actors && <span>The actors are required</span>}

        <input placeholder='Plot' {...register("plot", { required: true })} />
        {errors.plot && <span>The plot is required</span>}

        <input placeholder='Rating' {...register("rating")} />
        {errors.rating && <span>The rating is required</span>}

        <input className='submit-button' type='submit' value='Submit' />
      </form>
    </>
  );
};

export default MovieUploadCard;
