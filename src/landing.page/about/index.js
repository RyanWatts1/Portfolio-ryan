import React from "react";
import styled from "styled-components";
import { SectionTitle, Section } from "../../app/components";
import Image from "./image";

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <Layout>
      <div style={{ width: "480px" }}>
        <Text>Hello! I'm Ryan, a web developer based in NC.</Text>
        <Text>
          I enjoy creating things that live on the web. I use patterns to
          deliver excellent UI. Programming is a passion for me and it all
          started with my first Hello World. Steve Jobs once said "Your work is
          going to fill a large part of your life, and the only way to be truly
          satisfied is to do what you believe is great work. And the only way to
          do great work is to love what you do. If you haven't found it yet,
          keep looking". My answer to that question is programming. Creating
          unique websites for the interent leaves me endlessly inspired. Each
          morning I wake up at 6:00AM to begin my coding journey.
        </Text>
        <Text>
          I have acquired project and time managment skills through working with
          clients to build their ideal website efficiently. I also sharpened my
          communication skill while working with team members and clients. As a
          salesman by day and a developer by night I learned optimal time
          management skills to reach my goals in both sales and web development
          projects.
          {/* I have acquired project and time managment skills through running my
          own business as the number one salesman at Paramount. I also sharpened
          my ability to communicate with team members and clients effectively by
          training new team members and building my own client base. As a
          salesman by day and a developer by night I learned optimal time
          management to reach my goals in both sales and web development
          projects. */}
        </Text>
        <Text>
          Here are a few technologies I've been working with recently:
        </Text>
        <UnorderedList>
          <ListItem>JavaScript (ES6+)</ListItem>
          <ListItem>React</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>HTML & (S)CSS</ListItem>
          <ListItem>Vue</ListItem>
          <ListItem>WordPress</ListItem>
        </UnorderedList>
      </div>
      <Image />
    </Layout>
  </Section>
);

export default About;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0px 0px 15px;
  color: ${(theme) => theme.color};
  opacity: 0.6;
`;

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.color};
  opacity: 0.6;

  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    line-height: 12px;
  }
`;
