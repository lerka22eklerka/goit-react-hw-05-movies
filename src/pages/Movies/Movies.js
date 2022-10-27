import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as Api from '../../API/ApiRequest';

import { MovieBox } from "./Movies.styled";
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = value => {
       setSearchParams({ query: value });
    };
    
    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (query) {
            Api.fetchMovieByQuery(query)
              .then(movies => setMovies(movies))
              .catch('error');
        }
    }, [searchParams]);
    return (
      <MovieBox>
        <SearchBar onSubmit={handleSearch} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </MovieBox>
    );

}

export default Movies;

