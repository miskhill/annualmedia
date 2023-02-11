import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const BookUploadCard = () => {
  const mystyle = {
    color: 'white',
    backgroundColor: "#39a2db",
    padding: '10px',
    fontFamily: 'Arial',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (book) => {
    axios
      .post('/api/books', book)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          navigate("/books");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Book Upload</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={mystyle}>
        <input placeholder='title' {...register('title', { required: true })} />
        {errors.title && <span>The title is required</span>}

        <input placeholder='year' {...register('year', { required: true })} />
        {errors.year && <span>The year is required</span>}

        <input
          placeholder='author'
          {...register('author', { required: true })}
        />
        {errors.author && <span>The author is required</span>}

        <input
          placeholder='genre'
          {...register('genre', { required: true })}
        />
        {errors.genre && <span>The genre is required</span>}

        <input placeholder='publisher' {...register('publisher')} />
        {errors.publisher && <span>The publisher is required</span>}

        <input placeholder='pages' {...register('pages')} />
        {errors.pages && <span>The amount of pages is required</span>}

        <input placeholder='poster' {...register('poster')} />
        {errors.poster && <span>The poster is required</span>}

        <input type='submit' />
      </form>
    </>
  );
};

export default BookUploadCard;