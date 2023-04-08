import React from "react";
import Card from "@mui/material/Card";
import Rating from '@mui/material/Rating';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MediaCard = ({ title, year, genre, image, rating }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ mb: 1.5, padding: "1em 1em 0 1em"}} color='text.primary'>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5, padding: "1em 1em 0 1em" }} color='text.secondary'>
            {year}
          </Typography>
          <Typography sx={{ mb: 1.5, padding: "1em 1em 0 1em" }} color='text.secondary'>
            {genre}
          </Typography>
          <Typography sx={{ mb: 1.5, padding: "1em 1em 0 1em" }} color='text.secondary'>
            {rating}
          </Typography>
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={rating} readOnly />
          <CardMedia component='img' src={image} alt='poster'  sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}/>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default MediaCard;
