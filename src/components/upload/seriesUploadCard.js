import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const SeriesUploadCard = () => {
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

  // const [resStatus, setResStatus] = useState("");
  // console.log(resStatus, "resStatus");

  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (series) => {
    axios
      .post("/api/series", series)
      .then((res) => {
        console.log(res.data);
        // setResStatus('Success!⭐️');
        // go back to the home page when successful post request
        // window.location.href = "/";
        // navigate("/");
      })
      // if we send data to the server and it's successful, we want to reset the form using the react hook form reset functio
      .catch((err) => {
        console.log(err);
        // setResStatus('Error!🛑');
      });
  };

  // const resetAsyncForm = useCallback(async () => {
  //   const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
  //   reset(result); // asynchronously reset your form values
  // }, [reset]);

  // useEffect(() => {
  //   navigate("/");
  // }, [navigate])

  return (
    <>
      <h1>Series Upload</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={mystyle}>
        <input placeholder='title' {...register("title", { required: true })} />
        {errors.title && <span>The title is required</span>}

        <input placeholder='year' {...register("year", { required: true })} />
        {errors.year && <span>The year is required</span>}

        <input
          placeholder='director'
          {...register("director", { required: true })}
        />
        {errors.director && <span>The director is required</span>}

        <input placeholder='genre' {...register("genre", { required: true })} />
        {errors.genre && <span>The genre is required</span>}

        <input
          placeholder='actors'
          {...register("actors", { required: true })}
        />
        {errors.actors && <span>The actors are required</span>}

        <input
          placeholder='poster'
          {...register("poster", { required: true })}
        />
        {errors.poster && <span>The poster is required</span>}

        <input placeholder='plot' {...register("plot", { required: true })} />
        {errors.plot && <span>The plot is required</span>}

        <input
          placeholder='website'
          {...register("website", { required: true })}
        />
        {errors.website && <span>The website is required</span>}

        <input type='submit' />
      </form>
      {/* {resStatus? <h1>{resStatus}</h1> : null} */}
    </>
  );
};

export default SeriesUploadCard;
