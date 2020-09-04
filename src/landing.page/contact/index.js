import React from "react";
import styled from "styled-components";
import { Section, Button as CommonButton } from "../../app/components";

const Contact = () => (
  <Section id="contact">
    <Center>
      <SmallText>What's Next?</SmallText>
      <Title>Get In Touch</Title>
      <Text>
        I am currently looking to turn my passion for web development into a
        career! Feel free to send me an email to reach me. I would love to work
        with you and your team!
      </Text>
      <Button>Say Hello</Button>
    </Center>
  </Section>
);

export default Contact;

const Title = styled.h3`
  white-space: nowrap;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const SmallText = styled.h1`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin: 0px 0px 20px 3px;
`;

const Text = styled.p`
  text-align: center;
  margin: 20px auto;
  color: rgba(204, 214, 246, 0.6);
  width: 500px;
  font-size: 20px;
`;

const Center = styled.div`
  text-align: center;
`;

const Button = styled(CommonButton)`
  margin-top: 3em;
`;
