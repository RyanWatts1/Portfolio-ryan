import React, { useRef } from "react";
import styled from "styled-components";

import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Experience from "./experience";
import Work from "./work";

const LandingPage = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
