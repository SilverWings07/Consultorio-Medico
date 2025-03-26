// ./frontend/src/pages/Home.js

import React from "react";
import { HomepageContainer, Heading, Paragraph } from "./../components/home.js";

function Homepage() {
  return (
    <HomepageContainer>
      <Heading>Consultorio Médico</Heading>
      <Paragraph>Por favor, inicia sesión para continuar.</Paragraph>
    </HomepageContainer>
  );
}

export default Homepage;
