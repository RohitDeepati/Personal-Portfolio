import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ProjectsCard } from "./components/ProjectsCard";
import { ProjectsMore } from "./components/ProjectsMore";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <ProjectsCard />
              <Education />
              <ContactMe />
            </>
          }
        />
        <Route path="/more-projects" element={<ProjectsMore />} />
      </Routes>
    </Router>
  );
}

export default App;
