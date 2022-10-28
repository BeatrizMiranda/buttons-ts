import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from "./Button";

const colors = {
  primary: {
    main: "#4643c6",
    secondary: "#FFFFFF",
  },
  secondary: {
    main: "#FFFFFF",
    secondary: "#4643c6",
  },
};

const gira = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const ButtonStyled = styled.button<ButtonProps>`
  font-weight: 600;
  padding: 10px 44px;
  border-radius: 5px;

  transition: all 500ms;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  position: relative;
  cursor: pointer;

  img {
    display: none;
  }

  ${({ variant = "primary" }) => {
    const { main, secondary } = colors[variant];
    return `
      background-color: ${main};
      color: ${secondary};
      border: 2px solid ${main};
      
      &:hover,
      &:focus {
        background-color: ${secondary};
        color: ${main};
        border: 2px solid ${main};
      }
    `;
  }}

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
  
  ${({ isLoading }) =>
    isLoading &&
    css`
      color: transparent !important;

      img {
        display: block;
        position: absolute;
        top: 24%;
        left: 42%;
        animation: ${gira} 2s linear infinite;
      }
    `}
`;
