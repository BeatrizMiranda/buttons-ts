import React, { useEffect, useState } from "react";
import { ButtonStyled } from "./styled";
import img from "../../assets/Preloader.svg";

export type ButtonProps = {
  disable?: boolean;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);

  console.log("raiz do componente");

  const handleClick = () => {
    setIsLoading(!isLoading);
    // console.log("dentro do click", { isLoading });
    setTimeout(() => {}, 2000);
  };

  useEffect(() => {
    console.log("ís loading mudou", isLoading);
  }, [isLoading]);

  return (
    <ButtonStyled
      /* variant={props.variant} disable={props.disable} */
      {...props}
      type="button"
      onClick={handleClick}
      isLoading={isLoading}
    >
      Aceleradora
      {isLoading && <img src={img} alt="" />}
    </ButtonStyled>
  );
};

export default Button;
