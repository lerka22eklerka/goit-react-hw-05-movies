import styled from "styled-components";

export const CastList = styled.ul`
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
flex-direction: column;
  list-style: none;
`;

export const CastItem = styled.li`
display: flex;
flex-direction: column;
  > img {
    width: 200px;
    height: auto;
    margin-top: 15px;
  }
  > p {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const CastTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
`;