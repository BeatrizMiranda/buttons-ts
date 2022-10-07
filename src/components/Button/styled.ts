import styled from "styled-components";

type ButtonType = {
  mainColor: string;
  disable?: boolean;
};

export const ButtonStyled = styled.button<ButtonType>`
  padding: 10px 44px;
  background-color: ${({ mainColor }) => mainColor};
  border-radius: 5px;
  color: #ffffff;
  border: 2px solid #4643c6;
  cursor: pointer;

  ${({ disable }) =>
    disable &&
    `
    background-color: grey;
  `}

  &:hover,
	&:focus {
    background-color: #ffffff;
    color: #4643c6;
    border: 2px solid #4643c6;
  }

  transition: all 500ms;
`;
