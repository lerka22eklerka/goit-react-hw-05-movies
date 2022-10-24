import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h1`
`

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
`; 

export const MovieItem = styled.li`
  max-width: 250px;
`;

export const Link = styled(NavLink)`
  color: #000;
  font-size: 1.2rem;
  text-decoration: none;
  max-width: 100px;
  &:hover {
    color: orangered;
  }
`;
