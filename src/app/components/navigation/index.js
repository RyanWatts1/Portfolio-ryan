import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../../../logo.svg";
import { Button } from "../../components";
import { useEventListener } from "./useScroll";

const Navigation = ({ hidden, scrollUp, scrollDown }) => {
  console.log(hidden && "HIDDEN", scrollUp ? "UP" : "DOWN");
  return (
    <Container>
      <Logo src={logo} />
      <ListContainer>
        <List>
          <ListItem>
            <Link href="#about">about</Link>
          </ListItem>
          <ListItem>
            <Link href="#experience">Experience</Link>
          </ListItem>
          <ListItem>
            <Link href="#work">Work</Link>
          </ListItem>
          <ListItem>
            <Link href="#contact">Contact</Link>
          </ListItem>
        </List>
        <Button dense>Resume</Button>
      </ListContainer>
    </Container>
  );
};

export { Navigation };

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  align-items: center;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.base};
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
  padding: 0em 2em;
  z-index: 100;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ::before {
    content: "0" counter(item) ".";
    text-align: right;
    color: ${({ theme }) => theme.primary};
    font-size: 12px;
  }
`;

const ListItem = styled.li`
  position: relative;
  font-size: 13px;
  counter-increment: item 1;
  margin: 0px 10px;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;
