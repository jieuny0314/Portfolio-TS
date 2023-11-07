import AboutMe from "../Components/AboutMe";
import { RefObject } from "react";

interface MainProps {
  aboutMeRef: RefObject<HTMLDivElement>;
}
function Main({ aboutMeRef }: MainProps) {
  return (
    <div>
      <AboutMe />
    </div>
  );
}

export default Main;
