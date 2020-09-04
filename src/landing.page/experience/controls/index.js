import React from "react";
import styled from "styled-components";

const Controls = ({ jobs = [], height, position, onClick }) => (
  <List>
    {jobs.map((job, index) => (
      <li>
        <Button
          isSelected={position === height * index}
          onClick={() => onClick(index)}
          height={height}
        >
          {job.name}
        </Button>
      </li>
    ))}
    <Highlight currentPosition={position} height={height} />
  </List>
);

export default Controls;

const Highlight = styled.span`
  display: block;
  width: 2px;
  height: ${({ height }) => height}px;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: ${({ currentPosition }) =>
    "translateY(" + currentPosition + "px)"};
  z-index: 10;

  background-color: ${({ theme }) => theme.primary};
  border-radius: 3px;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
`;

const List = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const Button = styled.button`
  border: none;
  outline: none;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: ${({ isSelected }) =>
    isSelected ? "rgb(37 43 46)" : "transparent"};
  height: 42px;
  text-align: left;
  white-space: nowrap;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 13px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.primary : "rgb(136, 146, 176)"};
  text-decoration: none;
  padding: 0px 20px 2px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  border-left: 2px solid rgb(48, 60, 85);

  &:hover {
    background-color: rgb(37 43 46);
    color: ${({ theme }) => theme.primary};
  }

  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
`;
