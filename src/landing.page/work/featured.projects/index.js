import React from "react";
import styled from "styled-components";
import Project from "./project";

const FeaturedProjects = ({ featuredProjects = [] }) => {
  return (
    <Featured>
      {featuredProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </Featured>
  );
};

export default FeaturedProjects;

const Featured = styled.div`
  display: grid;
  grid-gap: 4em;
`;
