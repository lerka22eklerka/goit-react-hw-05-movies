import styled from "styled-components";

export const FormBtnStyled = styled.button`
    font-size: 16px;
    padding: 8px 16px;
    margin-left: 10px;
    background-color: orangered;
    border: 0;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: background-color linear 250ms;
    &:hover {
        background-color: #c20a4e;
    }
 `;

export const InputStyled = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  outline: 0px solid #e30b5c;
  border-radius: 4px;
  transition: border-color linear 250ms;
  &:focus {
    outline: 0;
    border: 2px solid orangered;
  }
`;