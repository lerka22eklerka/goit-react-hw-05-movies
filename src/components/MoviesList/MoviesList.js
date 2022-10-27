import { useLocation } from "react-router-dom";
import { Link, MovieItem, MoviesListStyled } from "./MoviesLink.styled";
import PropTypes from 'prop-types';


export const MoviesList = ({movies}) => {
    const location = useLocation();
    
    return (
        <MoviesListStyled>
          {movies.map(({ id, title }) => {
            return (
              <MovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </MovieItem>
            );
          })}
        </MoviesListStyled>
    );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};