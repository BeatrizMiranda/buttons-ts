import React from "react";
import { ButtonStyled } from "./styled";

export type ButtonProps = {
  disable?: boolean;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled
      type="button"
      {...props}
      /* variant={props.variant} disable={props.disable} */
    >
      Aceleradora
    </ButtonStyled>
  );
};

export default Button;
