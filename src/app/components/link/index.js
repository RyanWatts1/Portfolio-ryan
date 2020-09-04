import styled from "styled-components";

const Link = styled.a`
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

  display: inline-block;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 14px;
  text-decoration: none;
  margin: 0px auto;

  ::after {
    bottom: 0.1em;
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: rgb(100, 255, 218);
    opacity: 0.5;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

export { Link };
