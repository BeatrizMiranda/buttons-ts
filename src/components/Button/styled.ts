import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
  font-weight: 600;
  padding: 10px 44px;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#4643c6" : "#FFFFFF"};
  border-radius: 5px;
  color: ${({ variant }) => (variant === "primary" ? "#FFFFFF" : "#4643c6")};
  border: ${({ variant }) =>
    variant === "primary" ? "2px solid #4643c6" : "2px solid #FFFFFF"};

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  ${({ disable }) =>
    disable &&
    `
    background-color: rgba(170, 170, 170, 0.83);
    border: 2px solid transparent;
    color: #FFFFFF;

    &:hover,
    &:focus {
      background-color: rgba(170, 170, 170, 0.83);
      border: 2px solid transparent;
      color: #FFFFFF;
      cursor: auto;
    }
  `}

  &:hover,
	&:focus {
    ${({ variant }) =>
      (variant === "primary" &&
        `
      background-color: #ffffff;
      color: #4643c6;
      border: 2px solid #4643c6;
    `) ||
      (variant === "secondary" &&
        `
    background-color: #4643c6;
    color: #ffffff;
    border: 2px solid #ffffff;
    `)};
  }

  transition: all 500ms;
`;
