import { Grid } from "@mui/material";
import MediaCard from "./card.js";

const BookGrid = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
          <MediaCard image={book.poster} {...book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGrid;
