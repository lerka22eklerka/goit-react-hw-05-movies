import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../API/ApiRequest';
import { RevieContent, ReviewsBox, ReviewsList, ReviewTitle } from './Reviews.styled';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

     useEffect(() => {
       Api.fetchMovieReviews(movieId)
         .then(setReviews)
         .catch('error');
     }, [movieId]);
    
    return (
      <>
        {reviews.length > 0 ? (
          <ReviewsList>
            {reviews.map(({ author, content, id }) => (
              <ReviewsBox key={id}>
                  <div>
                    <ReviewTitle>Author: {author}</ReviewTitle>
                    <RevieContent>{content}</RevieContent>
                  </div>
              </ReviewsBox>
            ))}
          </ReviewsList>
        ) : (
          <p>So sorry... But there is no reviews yet!</p>
        )}
      </>
    );
}

export default Reviews;