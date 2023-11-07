import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import { RefObject } from "react";

interface MainProps {
  aboutMeRef: RefObject<HTMLDivElement>;
}
function Main({ aboutMeRef }: MainProps) {
  return (
    <div>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Main;
