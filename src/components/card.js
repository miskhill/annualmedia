import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Rating from '@mui/material/Rating';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import styles from src/App.css;

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
  "--card-background": "#F7F7F7",
  "--card-text-color": "#333",
});

const StyledCardContent = styled(CardContent)({
  flex: 1,
  backgroundColor: "var(--card-background)",
});

const StyledTitle = styled(Typography)({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: "0.5em",
  color: "var(--card-text-color)",
});

const StyledSubtitle = styled(Typography)({
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: "0.5em",
  color: "#555",
});

const StyledText = styled(Typography)({
  fontSize: 16,
  marginBottom: "0.5em",
  color: "#777",
});

const StyledImage = styled(CardMedia)({
  paddingTop: "5.25%",
});

const MediaCard = ({ title, year, genre, rating, image, plot }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard sx={{ maxWidth: 345, margin: "10px" }}>
    {imageLoaded ? (
      <StyledImage
        component="img"
        height="500"
        image={image}
        alt={title}
        onLoad={() => setImageLoaded(true)}
      />
    ) : (
      <div className="shimmer-wrapper"></div>
    )}
      <StyledCardContent>
        <StyledTitle gutterBottom variant="h5" component="div">
          {title}
        </StyledTitle>
        <StyledText variant="body2" color="text.secondary">
          Year: {year}
        </StyledText>
        <StyledSubtitle variant="body2" color="text.secondary">
          Genre: {genre}
        </StyledSubtitle>
          <Rating name="read-only" value={rating} readOnly />
      </StyledCardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="show more"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          sx={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Plot:</Typography>
          <Typography paragraph>{plot}</Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default MediaCard;




