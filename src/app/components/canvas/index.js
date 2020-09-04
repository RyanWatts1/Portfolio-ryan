import styled from "styled-components";

const Canvas = styled.div`
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  overflow-y: scroll;

  background: ${({ theme }) => theme.base};
  color: ${({ theme }) => theme.color};
`;

export { Canvas };
