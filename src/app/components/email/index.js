import React from "react";
import styled from "styled-components";

const Email = () => (
  <Container>
    <Content>
      <Link>devshopwatts@gmail.com</Link>
    </Content>
  </Container>
);

export { Email };

const Container = styled.div`
  transition: all 0.1s ease-in;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: ${({ theme }) => theme.color};
  opacity: 0.6;

  cursor: pointer;

  &:hover {
    opacity: 1;
    bottom: 10px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const Link = styled.a`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;
