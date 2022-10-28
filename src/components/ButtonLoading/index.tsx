import React from "react";
import { ButtonLoadingStyled } from "./styled";
import img from "../../assets/Preloader.svg";

export const ButtonLoading = () => {
  const handleClick = () => {
    setTimeout(() => {}, 2000);
  };

  return (
    <ButtonLoadingStyled onClick={handleClick}>
      <img src={img} alt="" />
    </ButtonLoadingStyled>
  );
};
