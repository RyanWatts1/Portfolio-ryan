import React from "react";
import styled from "styled-components";
import { Paper as CommonPaper } from "../../../../app/components";
import { LinkIcon, GitHubIcon } from "../../icon";

const Project = ({
  url = "https://res.cloudinary.com/level-up-tutorials/image/upload/c7dusgxjnvqmpyiyqk6z",
  title = "No Title",
  desc = "No Descriptions",
  tech = ["Next.js", "Chart.js", "Github API"],
  toGitHub = "no link",
  toProj = "no link",
}) => {
  return (
    <ParentGrid>
      <ImageContainer>
        <Temp>
          <div style={{ width: "100%", paddingBottom: " 62.2857%" }}></div>
          <Image
            alt="card background pattern"
            src={url}
            class="sc-fzqyvX eOQcGc"
            style={{ opacity: 1, transform: "none" }}
          />
        </Temp>
      </ImageContainer>
      <MarkupContainer>
        <H1>Feature Project</H1>
        <Title line={false}>{title}</Title>
        <Paper>
          <Text>{desc}</Text>
        </Paper>
        <Tech>
          {tech.map((item) => (
            <TechText>{item}</TechText>
          ))}
        </Tech>
        <IconContainer>
          <GitHubIcon icon="github" />
          <LinkIcon />
        </IconContainer>
      </MarkupContainer>
    </ParentGrid>
  );
};

export default Project;

const TechText = styled.p`
  opacity: 0.7;
  margin-left: 0.5em;
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: normal;
  color: ${({ theme }) => theme.color};
`;
const Tech = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 25px 0px 10px;
`;

const MarkupContainer = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
`;

const ImageContainer = styled.a`
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  position: relative;
  background-color: ${({ theme }) => theme.primary};

  grid-column: 6 / -1;
  grid-row: 1 / -1;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 3;
    background-color: ${(theme) => theme.paper};
    mix-blend-mode: screen;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: left;

  &:nth-child(2n + 1) ${MarkupContainer} {
    text-align: right;
    grid-column: 7 / -1;
  }

  &:nth-child(2n + 1) ${Tech} {
    justify-content: flex-end;
  }

  &:nth-child(2n + 1) ${ImageContainer} {
    grid-column: 1 / 8;
  }
`;

const Temp = styled.div`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(44%);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  transition-delay: 500ms;

  max-width: 100%;
  vertical-align: middle;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin: 10px 0;
`;

const Title = styled.h3`
  transition: color 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  white-space: nowrap;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin: 0px 0px 20px;
`;

const Paper = styled(CommonPaper)`
  padding: 25px;
`;

const Text = styled.div`
  opacity: 0.7;
`;

const IconContainer = styled.div`
  height: 46px;
  align-items: center;
`;
