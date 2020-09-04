import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <Link href="www.github.com">Built by Ryan Watts</Link>
  </Container>
);

export { Footer };

const Container = styled.footer`
  text-align: center;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color};
  padding: 10px;
  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
