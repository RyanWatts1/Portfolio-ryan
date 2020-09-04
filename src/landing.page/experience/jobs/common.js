import React from "react";
import styled from "styled-components";

const Title = ({ name, title, link }) => (
  <H4>
    <span>{title}</span>
    <Span>
      @ <Link href={link}>{name}</Link>
    </Span>
  </H4>
);

const H4 = styled.h4`
  color: rgb(204, 214, 246);
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const Link = styled.a`
  display: inline-block;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.5;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

const Range = styled.h5`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.05em;
  color: rgb(168, 178, 209);
  margin-bottom: 30px;
`;

const List = styled.ul`
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  width: 700px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal !important;

  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.primary};
  }
`;

export { Title, Range, List, ListItem };
