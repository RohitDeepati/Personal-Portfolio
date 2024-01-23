import About from "./components/About";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      {/* <div class="container bg-light"></div> */}
      <Home />
      <About />
      <Projects />
      <Education />
      <ContactMe />
    </div>
  );
}

export default App;
