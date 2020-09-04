import React from "react";
import styled from "styled-components";

const SectionTitle = ({ children = "No Title", line = true }) => {
  if (line)
    return (
      <Container>
        <Text>{children}</Text>
        <Line />
      </Container>
    );

  return <Text>{children}</Text>;
};

export { SectionTitle };

const Text = styled.h3`
  white-space: nowrap;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 3em;
`;

const Line = styled.div`
  height: 1px;
  width: 300px;
  background: ${({ theme }) => theme.color};
  margin-left: 1em;
  opacity: 0.3;
  margin-top: 10px;
`;
