import { useEffect, useState } from "react";
import * as Api from '../../API/ApiRequest';
import { CastItem, CastList, CastTitle } from "./Cast.styled";
import { useParams } from "react-router-dom";
import defaultImg from '../../img/image-coming-soon.webp';


const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

    useEffect(() => {
    Api.fetchMovieCast(movieId)
      .then(setCast)
      .catch('error');
  }, [movieId]);

  return (
    <>
      {cast ? (
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              )}
              {!profile_path && <img src={defaultImg} alt={name} />}
              <CastTitle>{name}</CastTitle>
              <CastTitle>Character: {character}</CastTitle>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>
          So sorry... But we don't have information about cast of this movie
        </p>
      )}
    </>
  );
};

export default Cast;

