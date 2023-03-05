import axios from 'axios';
const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;

const getMovieById = async id => {
  const res = await axios.get(`${BASE_URL}/api/movies/${id}`);
  return res.data;
};

const getMovieByName = async name => {
  const res = await axios.get(`${BASE_URL}/api/movies/searchmovie/${name}`);
  return res.data;
};

const getMostPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}/api/Movies/PopularMovies`);
  return res.data;
};

export { getMovieById, getMostPopularMovies, getMovieByName };
