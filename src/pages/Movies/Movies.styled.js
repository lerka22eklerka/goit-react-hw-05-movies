import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieBox = styled.div`
  display: block;
`;

export const Link = styled(NavLink)`
  color: #000;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;