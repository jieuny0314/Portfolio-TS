import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import { useRef } from "react";

const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  touch-action: pan-x pan-y;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function Main() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <MainContainer>
      <Header
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={aboutMeRef} className="aboutMe" />
      <AboutMe />
      <div ref={skillsRef} className="skills" />
      <Skills />
    </MainContainer>
  );
}

export default Main;
