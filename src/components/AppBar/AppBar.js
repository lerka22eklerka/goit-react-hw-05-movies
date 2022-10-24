import { Link } from './AppBar.styled';

export const AppBar = () => {
     return (
       <nav>
         <Link to="/" end>Home</Link>
         <Link to="/movies">Movies</Link>
       </nav>
     );
}