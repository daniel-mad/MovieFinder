import { Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

import React from "react";

const MovieList = ({ movies, handleMovie }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "80px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} handleMovie={handleMovie} />
      ))}
    </Grid>
  );
};

export default MovieList;
