import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Main aboutMeRef={aboutMeRef} />
    </div>
  );
}

export default App;
