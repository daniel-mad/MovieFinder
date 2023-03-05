import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Stack } from "@mui/system";

const MovieCard = ({ movie, handleMovie }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card onClick={() => handleMovie(movie)} sx={{ height: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={movie.image}
            alt={movie.title}
            height={300}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Stack direction="row">
              <StarIcon sx={{ color: "yellow", fontSize: "1rem" }} />
              <Typography variant="body2" component="div">
                {movie.imDbRating}
              </Typography>
            </Stack>

            <Typography variant="body3" component="p">
              {movie.title}
            </Typography>
            <Typography variant="body3" component="div" color="text.secondary">
              {movie.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MovieCard;
