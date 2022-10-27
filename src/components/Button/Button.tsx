import React from "react";
import { ButtonStyled } from "./styled";
import img from "../../assets/Preloader.svg";

export type ButtonProps = {
  disable?: boolean;
  isLoading?: boolean;
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
      {props.isLoading && <img src={img} alt="" />}
    </ButtonStyled>
  );
};

export default Button;
