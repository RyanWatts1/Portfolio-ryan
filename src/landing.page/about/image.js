import React from "react";
import styled from "styled-components";
import mee from "./mee.jpg";

const Image = () => (
  <Overlay>
    <Img src={mee} />
    <Underlay />
  </Overlay>
);

export default Image;

const Img = styled.img`
  position: absolute;
  border-radius: 4px;
  top: 0;
  height: 300px;
  width: 300px;
  transition: filter 0.3s ease-in;
  mix-blend-mode: darken;
  filter: grayscale(100%);
  &:hover {
    mix-blend-mode: revert;
    filter: grayscale(0%);
  }
  z-index: 2;
`;

const Underlay = styled.div`
  transition: margin 0.1s ease-in;
  position: absolute;
  top: 0;
  width: 300px;
  height: 300px;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  z-index: 1;
`;

const Overlay = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: ${({ theme }) => theme.primary};
  &:hover ${Underlay} {
    margin-left: 0.5em;
    margin-top: 0.5em;
  }
  border-radius: 4px;
`;
