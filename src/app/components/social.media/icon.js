import React from "react";
import styled from "styled-components";

const Icon = ({ icon, link }) => {
  return (
    <li>
      <Link href={link}>{icon}</Link>
    </li>
  );
};

const Link = styled.a`
  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  color: ${({ theme }) => theme.color};
  top: 0px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    top: -5px;
  }
`;

export default Icon;
