import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import * as Api from '../../API/ApiRequest';
import PropTypes from 'prop-types';
import { Link, MovieBox } from "./Movies.styled";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const handleSearch = value => {
       setSearchParams({ query: value });
    };
    
    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (query) {
            Api.fetchMovieByQuery(query).then(movies => setMovies(movies));
        }
    }, [searchParams]);
    return (
        <MovieBox>
            <SearchBar onSubmit={handleSearch} />
            {movies.length > 0 && (
                <ul>
                    {movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }}>
                                {title}
                            </Link>                           
                    </li>))}
                </ul>
            )}
        </MovieBox>
    )

}

export default Movies;

Movies.propTypes = {
  search: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};