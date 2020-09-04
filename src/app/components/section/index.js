import styled from "styled-components";

const Section = styled.section`
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  min-height: ${({ height = "50vh" }) => height};
  margin: 0px auto;
  padding: 150px 0px;
`;

export { Section };
