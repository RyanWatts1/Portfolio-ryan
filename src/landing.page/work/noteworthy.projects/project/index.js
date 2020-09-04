import React from "react";
import styled from "styled-components";
import { Paper as CommonPaper } from "../../../../app/components";
import { LinkIcon, GitHubIcon, FolderIcon } from "../../icon";

const Project = ({ title, desc, tech }) => {
  return (
    <Paper>
      <FolderIcon />
      <IconContainer>
        <LinkIcon />
        <GitHubIcon />
      </IconContainer>
      <Title>{title}</Title>
      <Text>{desc}</Text>
      <Tech>
        {tech.map((item) => (
          <TechText>{item}</TechText>
        ))}
      </Tech>
    </Paper>
  );
};

export default Project;

const Paper = styled(CommonPaper)`
  padding: 1em;
  width: 323px
  height: 374px;

  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 3px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:hover {
    transform: translateY(-15px);
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 46px;
  align-items: center;
`;

const Title = styled.h5`
  font-size: 22px;
  color: ${({ theme }) => theme.color};
  margin: 2em 0px 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color};
  opacity: 0.7;
  margin: 0px 0px 15px;
`;

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
  margin: 50px 0px 10px;
`;
