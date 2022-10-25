import styled from "styled-components";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
`;
export const ReviewsBox = styled.li`

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;