import React from "react";
import { ButtonStyled } from "./components/Button/styled";
import { ButtonLoading } from "./components/ButtonLoading";
import { ButtonEntrar } from "./components/ButtonEntrar/ButtonEntrar";
import { AppStyled } from "./styles";
import Button from "./components/Button/Button";
import { Link } from "./components/Link/Link";

function App() {
  return (
    <AppStyled>
      <Button variant="primary" />
      <br />
      <br />
      <Button variant="secondary" />
      <br />
      <br />
      <Button disable />
      <br />
      <br />
      <ButtonLoading />
      <br />
      <br />
      <ButtonEntrar />
      <br />
      <br />
      <Link />
    </AppStyled>
  );
}

export default App;
