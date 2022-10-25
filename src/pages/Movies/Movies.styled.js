import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieBox = styled.div`
  display: block;
`;

export const Link = styled(NavLink)`
  color: rgb(24, 6, 82);
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;

export const RequestItem = styled.li`
  list-style-position: inside;
  list-style-type: square;

  padding: 5px;
  max-width: auto;
`;

export const RequestList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
`;