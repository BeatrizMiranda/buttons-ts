import React from "react";
import { ButtonEntrar } from "./components/ButtonEntrar/ButtonEntrar";
import { AppStyled, ButtonsContainer } from "./styles";
import Button from "./components/Button/Button";
import { Link } from "./components/Link/Link";
import Gifs from "./components/Gifs";

function App() {
  return (
    <AppStyled>
      <ButtonsContainer>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button disable />
        <Button variant="primary" isLoading />
        <ButtonEntrar />
        <Link />
      </ButtonsContainer>
      <br />
      <Gifs />
    </AppStyled>
  );
}

export default App;
