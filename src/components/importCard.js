import React from 'react';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl"



// create a reusable card to allow a user to import movie details
const ImportCard = () => {

return (

  <form >
    <h1>Import Media</h1>
    <FormControl>
      <FormLabel>Title</FormLabel>
      <input type="text" />
    </FormControl>
    <FormControl>
      <FormLabel>Year</FormLabel>
      <input type="text" />
    </FormControl>
    <FormControl>
      <FormLabel>Genre</FormLabel>
      <input type="text" />
    </FormControl>

    <FormControl>
      <FormLabel>Director</FormLabel>
      <input type="text" />
    </FormControl>

    <FormControl>
      <FormLabel>Cast</FormLabel>
      <input type="text" />
    </FormControl>


    <FormControl>
      <FormLabel>Plot</FormLabel>
      <input type="text" />
    </FormControl>

    <FormControl>
      <FormLabel>Poster</FormLabel>
      <input type="text" />
    </FormControl>

    <FormControl>
      <FormLabel>IMDB Rating</FormLabel>
      <input type="text" />
    </FormControl>
    
    <FormControl>
      <FormLabel>Website</FormLabel>
      <input type="text" />
    </FormControl>

  </form>

)}

export default ImportCard;