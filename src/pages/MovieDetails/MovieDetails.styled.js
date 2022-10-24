import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackBtn = styled(Link)`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  gap: 10px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 500px;
  height: auto;
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const MovieBox = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
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
`;

export const AdditionalInfoBox = styled.div`
  border-bottom: 1px solid #000;
`;