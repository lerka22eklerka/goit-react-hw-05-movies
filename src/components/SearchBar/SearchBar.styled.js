import styled from "styled-components";

export const FormBtnStyled = styled.button`
    font-size: 18px;
    padding: 7px 12px;
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
    border-color: #e30b5c;
  }
`;