import { useEffect, useState } from "react";
import * as Api from '../../API/ApiRequest';
import { CastItem, CastList } from "./Cast.styled";
import { useParams } from "react-router-dom";


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
              <p>{name}</p>
              <p>Character: {character}</p>
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

