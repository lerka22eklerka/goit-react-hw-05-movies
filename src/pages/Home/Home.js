import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../../API/ApiRequest';
import { Title } from './Home.styled';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api.fetchTrendingMovies()
      .then(movies => setMovies(movies))
      .catch('error');
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <Title>Trending now</Title>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.array,
};
