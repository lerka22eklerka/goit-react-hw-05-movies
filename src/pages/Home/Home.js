import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../../API/ApiRequest';
import { Link, MovieItem, MoviesList, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api.fetchTrendingMovies().then(movies => setMovies(movies));
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <Title>Trending now</Title>
      <MoviesList>
        {movies.map(({ id, title }) => {
          return (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </MovieItem>
          );
        })}
      </MoviesList>
    </>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.array,
};
