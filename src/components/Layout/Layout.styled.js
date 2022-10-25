import styled from "styled-components";

export const LayoutBox = styled.div`
  margin: 0 auto;
  padding: 8px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding:  0;
  margin-bottom: 8px;
  border-bottom: 1px solid black;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  > nav {
    display: flex;
    padding: 10px;
  }
`;