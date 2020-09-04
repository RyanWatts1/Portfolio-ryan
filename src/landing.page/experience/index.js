import React, { useState } from "react";
import styled from "styled-components";
import jobs from "./jobs";
import { Section, SectionTitle } from "../../app/components";
import Controls from "./controls";
import Display from "./display";

const HEIGHT = 42;

const Experience = () => {
  const [position, setPosition] = useState(0);

  return (
    <Section id="experience">
      <SectionTitle>Where I've Worked</SectionTitle>
      <Container>
        <Controls
          jobs={jobs}
          height={HEIGHT}
          position={position}
          onClick={(index) => setPosition(HEIGHT * index)}
        />
        <Display jobs={jobs} height={HEIGHT} position={position} />
      </Container>
    </Section>
  );
};

export default Experience;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 3em;
`;
