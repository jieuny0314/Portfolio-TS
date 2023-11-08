import styled from "styled-components";
import { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
        <div ref={projectsRef} className="projects" />
        <Projects />
        <div ref={contactRef} className="contact" />
        <Contact />
      </motion.div>
    </MainContainer>
  );
}

export default Main;
