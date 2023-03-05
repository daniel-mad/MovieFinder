import { CircularProgress, Container, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MovieFullDetails from "../components/MovieFullDetails";
import MovieList from "../components/MovieList";

import Nav from "../components/Nav";
import Paging from "../components/Paging";

import {
  getMostPopularMovies,
  getMovieById,
  getMovieByName,
} from "../services/movieService";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  useEffect(() => {
    (async () => await getMostPopular())();
  }, []);

  const getMostPopular = async () => {
    try {
      setLoading(true);
      const data = await getMostPopularMovies();
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async (movie) => {
    try {
      setLoading(true);
      const data = await getMovieById(movie.id);
      setSelectedMovie(data);
      setOpen(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = async (search) => {
    try {
      setLoading(true);
      const data = await getMovieByName(search);

      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav handleSearch={handleSearch} getMostPopular={getMostPopular} />
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container>
          <MovieList
            movies={movies.slice(startIndex, endIndex)}
            handleMovie={handleOpen}
          />
          <Paging
            movies={movies}
            page={page}
            pageSize={pageSize}
            onChange={onPageChange}
          />

          <Modal open={open} onClose={handleClose}>
            <Box>
              <MovieFullDetails movieDetails={selectedMovie} />
            </Box>
          </Modal>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default Main;
