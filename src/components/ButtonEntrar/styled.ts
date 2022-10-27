import styled from "styled-components";
import seta from "./Vector.svg";

export const ButtonEntrarStyled = styled.button`
  font-weight: 600;
  height: 42px;
  padding: 10px 30px;
  background-color: #4643c6;
  border-radius: 5px;
  color: #ffffff;
  border: 2px solid #4643c6;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 160px;

  &::after {
    content: url("data:image/svg+xml,%0A%3Csvg width='9' height='13' viewBox='0 0 9 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.486252 11.4725L5.44792 6.5L0.486252 1.5275L2.01375 0L8.51375 6.5L2.01375 13L0.486252 11.4725Z' fill='white'/%3E%3C/svg%3E");
  }
`;
