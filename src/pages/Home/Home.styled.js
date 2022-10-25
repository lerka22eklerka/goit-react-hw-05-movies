import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h2`
  font-family: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
  font-size: 26px;
  font-weight: 800;
  margin: 0;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
`; 

export const MovieItem = styled.li`
  list-style-position: inside;
  list-style-type: square;

  padding: 5px;
  max-width: auto;
`;

export const Link = styled(NavLink)`
  color: rgb(24, 6, 82);
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;
