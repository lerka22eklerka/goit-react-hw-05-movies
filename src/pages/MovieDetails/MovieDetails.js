import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import * as Api from '../../API/ApiRequest';
import PropTypes from 'prop-types';
import { HiArrowSmLeft } from 'react-icons/hi';
import {
  BackBtn,
  Image,
  Title,
  MovieBox,
  InfoBox,
  Label,
  TextContent,
  AdditionalInfoBox,
} from './MovieDetails.styled';

const initialState = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
};

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(initialState);
    const location = useLocation();

       useEffect(() => {
         Api.fetchMovieById(movieId).then(movie => setMovie(movie)).catch('error');
       }, [movieId]);
    
    const {title, poster_path, vote_average, overview, genres } = movie;
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return (
      <>
        <BackBtn to={location.state?.from ?? '/'}>
          <HiArrowSmLeft />
          Go back
        </BackBtn>
        <MovieBox>
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <InfoBox>
            <Title>{title}</Title>
            <Label>User score: {Math.ceil(vote_average *10)} %</Label>
            <Label>Overview</Label>
            <TextContent>{overview}</TextContent>
            <Label>Genres</Label>
            <p>{movieGenres}</p>
          </InfoBox>
        </MovieBox>
        <AdditionalInfoBox>
          Additional information
          <ul>
            <li>
              <NavLink
                to={`/movies/${movieId}/cast`}
                state={{ from: location.state?.from ?? '/' }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet/>
        </AdditionalInfoBox>
      </>
    );

}

export default MovieDetails;

MovieDetails.propTypes = {
  id: PropTypes.string,
};