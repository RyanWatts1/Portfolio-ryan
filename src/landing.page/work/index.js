import React, { useState } from "react";
import styled from "styled-components";
import { Section, SectionTitle, Link, Button } from "../../app/components";
import NoteworthyProjects from "./noteworthy.projects";
import FeaturedProjects from "./featured.projects";

const featuredProjects = [
  {
    id: "feat-1",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-1",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
];

const noteworthyProjects = [
  {
    id: "feat-1",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-2",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-3",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-4",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-5",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-6",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
  {
    id: "feat-7",
    title: "My Proj",
    desc: "This is my first project, do be so critical",
    tech: ["wordpress"],
  },
];

const Work = () => {
  const [show, setShow] = useState(false);
  let noteworthy = [...noteworthyProjects];
  if (show) {
    noteworthy = [...noteworthyProjects];
  } else {
    noteworthy.length = 6;
  }
  return (
    <>
      <Section id="work">
        <SectionTitle>Some Things I've Built</SectionTitle>
        <FeaturedProjects featuredProjects={featuredProjects} />
      </Section>
      <Section id="work">
        <Title>Some Things I've Built</Title>
        <Link>view the archive</Link>
        <NoteworthyProjects noteworthyProjects={noteworthy} />
        <ButtonContainer>
          <Button onClick={() => setShow(!show)}>
            {show ? "Show less" : "Show more"}
          </Button>
        </ButtonContainer>
      </Section>
    </>
  );
};

export default Work;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color};
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 4em;
`;
