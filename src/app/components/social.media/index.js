import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import Github from "./github";
import LinkedIn from "./linkedin";

const SocialMedia = () => (
  <Container>
    <UnorderedList>
      <Icon icon={<Github />} link="www.github.com" />
      <Icon icon={<LinkedIn />} link="www.linkedin.com" />
    </UnorderedList>
  </Container>
);

export { SocialMedia };

const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 20px;
  z-index: 10;
  color: ${({ theme }) => theme.color};
`;

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: 20px;
  grid-gap: 0.5em;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
