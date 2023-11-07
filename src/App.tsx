import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header aboutMeRef={aboutMeRef} />
      <Main aboutMeRef={aboutMeRef} />
    </div>
  );
}

export default App;
