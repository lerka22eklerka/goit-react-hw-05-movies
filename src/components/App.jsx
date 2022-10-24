import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails/>} />
        </Route>
      </Routes>
    </>
  );
};
