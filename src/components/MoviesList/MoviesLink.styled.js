import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  color: rgb(24, 6, 82);
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;

export const MovieItem = styled.li`
  list-style-position: inside;
  list-style-type: square;

  padding: 5px;
  max-width: auto;
`;


export const MoviesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
`; 