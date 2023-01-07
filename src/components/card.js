import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const MediaCard = ({ title, year, genre }) => {
  return (
    <Card sx={{ minWidth: 275 }}>  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {year}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {genre}
      </Typography>
    
      
      </Card>
  );
}

export default MediaCard;
