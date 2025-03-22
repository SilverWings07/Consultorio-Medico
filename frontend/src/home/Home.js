// ./frontend/src/home/Home.js

import React from "react";
import { HomepageContainer, Heading, Paragraph, ButtonsContainer, Button } from "./components";

function Homepage() {
  return (
    <HomepageContainer>
      <Heading>Consultorio Médico</Heading>
      <Paragraph>Por favor, inicia sesión para continuar.</Paragraph>
      <ButtonsContainer>
        <Button to="/login">Iniciar Sesión</Button>
        <Button to="/register">Crear Usuario</Button>
      </ButtonsContainer>
    </HomepageContainer>
  );
}

export default Homepage;
