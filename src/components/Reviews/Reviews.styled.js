import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin-left: 20px;
`;
export const ReviewsBox = styled.li`

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const ReviewTitle = styled.h3`
margin: 0;
padding-top: 15px;

`

export const RevieContent = styled.p`
margin: 0;
`