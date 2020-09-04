import React from "react";
import styled from "styled-components";
import { Button as CompButton, Section } from "../../app/components";

const Hero = () => (
  <Section id="hero" height="100vh">
    <H1>Hi, my name is</H1>
    <H2>Ryan Watts</H2>
    <H2Faded>I develop websites for the internet.</H2Faded>
    <Text>
      I'm a web developer based in NC. I specialize in building beautiful
      websites, UI, applications and much more.
    </Text>
    <Button>Get In Touch</Button>
  </Section>
);

export default Hero;

const H1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin: 0px 0px 20px 3px;
`;

const Text = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-sizing: inherit;
  margin: 0px 0px 15px;
  color: rgba(204, 214, 246, 0.6);
  width: 500px;
  margin-top: 25px;
  font-size: 20px;
`;

const H2 = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0px;
  font-weight: 600;
  color: rgb(204, 214, 246);
  display: block;
`;

const H2Faded = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0px;
  font-weight: 600;
  display: block;
  color: rgba(204, 214, 246, 0.6);
`;

const Button = styled(CompButton)`
  margin-top: 50px;
  margin-right: auto;
`;
