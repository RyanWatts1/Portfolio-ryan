import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  line-height: 1;
  cursor: pointer;
  margin-left: 10px;
  font-size: 13px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.primary};
  border-image: initial;
  border-radius: 3px;
  padding: ${({ dense = false }) =>
    dense ? "0.75rem 1rem" : "1.25rem 1.75rem"};
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`;

export { Button };
