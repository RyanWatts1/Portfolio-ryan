import React from "react";
import styled from "styled-components";

const Display = ({ jobs = [], position, height }) => (
  <Content>
    {jobs.map((job, index) => {
      const { Detail } = job;
      return (
        <div hidden={!(position === index * height)}>
          <Detail {...job} />
        </div>
      );
    })}
  </Content>
);

export default Display;

const Content = styled.div``;
