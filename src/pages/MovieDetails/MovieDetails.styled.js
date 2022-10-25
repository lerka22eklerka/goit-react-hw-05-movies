import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackBtn = styled(Link)`
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 5px;
  text-decoration: none;
  :hover,
  :focus {
    color: orangered;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 300px;
  height: auto;
`;

export const Title = styled.h2`
  font-family: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
  font-size: 26px;
  font-weight: 800;
  margin: 0;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const MovieBox = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;

`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: fit-content;
  margin-left: 30px;
`;

export const TextContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const AdditionalInfoBox = styled.div`
  border-bottom: 1px solid #000;
`;

export const AdditionalLink = styled(NavLink)`
  color: rgb(24, 6, 82);
padding-bottom: 8px;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: orangered;
  }
`;
export const LinkStyled = styled.li`
  list-style-position: inside;
  list-style-type: square;
`;