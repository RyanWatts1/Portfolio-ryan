import React from "react";
import styled from "styled-components";
import { Section, Link } from "../../../app/components";
import Project from "./project";

const NoteworthyProjects = ({ noteworthyProjects = [] }) => (
  <Container>
    {noteworthyProjects.map((project) => (
      <Project key={project.id} {...project} />
    ))}
  </Container>
);

export default NoteworthyProjects;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  position: relative;
  gap: 1.5em;
  margin-top: 50px;
`;
