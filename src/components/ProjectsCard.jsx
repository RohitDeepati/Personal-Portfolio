import { ProjectDetails } from "../utilities/ProjectDetails";
import {
  budgetIcon,
  calculatorIcon,
  expensetrackerIcon,
  foodIcon,
  hangmanIcon,
  moviehubIcon,
  shoppingzoneIcon,
  todoIcon,
  tttIcon,
  weatherIcon,
  whacIcon,
  ytIcone,
} from "../assets/Icons/SvgIcons";
import {
  calculatorAppGitLink,
  calculatorProjectLink,
  expensetrackerAppGitLink,
  expensetrackerAppProjectLink,
  foodzoneGitLink,
  foodzoneProjectLink,
  hangmanGitlink,
  hangmanProjectlink,
  homebudgetAppGitLink,
  homebudgetAppProjectLink,
  movieHubAppGitLink,
  movieHubAppProjectLink,
  shoppingzoneGitlink,
  shoppingzoneProjectLink,
  todoAppGitLink,
  todoProjectLink,
  tttAppGitLink,
  tttAppProjectLink,
  weatherAppGitLink,
  weatherAppProjectLink,
  whacamoleAppGitLink,
  whacamoleProjectLink,
  ytCloneGitlink,
  ytCloneProjectLink,
} from "../assets/Links/ProjectLinks";
import {
  calculatorAppDesc,
  expensetrackerAppDesc,
  foodZoneAppDesc,
  hangmangameDesc,
  homebudgetAppDesc,
  moviehubDesc,
  shoppingZoneAppDesc,
  tictactoeAppdesc,
  todolistAppDesc,
  weatherAppDesc,
  whacamoleAppDesc,
  ytCloneDesc,
} from "../utilities/ProjectsDesc";
import { useState } from "react";

export const ProjectsCard = () => {
  const [showMorePrjoects, setShowMoreProjects] = useState(false);

  const toggleProjects = () => {
    setShowMoreProjects(!showMorePrjoects);
  };
  return (
    <section className="py-5 px-4" id="projects">
      <div className="container p-0 p-lg-5">
        <h2 className="">
          <span className="fa">02. </span> Some Things I’ve Built
          <span>
            <hr />
          </span>
        </h2>
        <div className="container px-3">
          <div className="row text-start  p-2 justify-content-evenly">
            {/* home budget tracker */}
            <ProjectDetails
              svgIcon={budgetIcon}
              githubLink={homebudgetAppGitLink}
              projectName="Home Budget Tracker"
              projectLink={homebudgetAppProjectLink}
              projectDescription={homebudgetAppDesc}
              techUsed1="React.js"
              techUsed3="React-Router-Dom"
            />
            {/* foodzone app */}
            <ProjectDetails
              svgIcon={foodIcon}
              githubLink={foodzoneGitLink}
              projectName="Food Zone"
              projectLink={foodzoneProjectLink}
              projectDescription={foodZoneAppDesc}
              techUsed1="React.js"
              techUsed2="JavaScript"
              techUsed3="FireBase"
            />
            {/* hangman word game */}
            <ProjectDetails
              svgIcon={hangmanIcon}
              githubLink={hangmanGitlink}
              projectName="Hangman Word Game"
              projectLink={hangmanProjectlink}
              projectDescription={hangmangameDesc}
              techUsed1="React-Typescript"
              // techUsed2="React.js"
              techUsed3="TailwindCSS"
            />
            {/* shopping zone */}
            <ProjectDetails
              svgIcon={shoppingzoneIcon}
              githubLink={shoppingzoneGitlink}
              projectName="Shopping Zone"
              projectLink={shoppingzoneProjectLink}
              projectDescription={shoppingZoneAppDesc}
              techUsed1="React.js"
              techUsed2="React-Router-Dom"
              techUsed3="Tailwind"
            />
            {/* movie search */}
            <ProjectDetails
              svgIcon={moviehubIcon}
              githubLink={movieHubAppGitLink}
              projectName="Movie Hub"
              projectLink={movieHubAppProjectLink}
              projectDescription={moviehubDesc}
              techUsed1="React.js"
              techUsed2="Rapid-API"
              techUsed3="CSS"
            />

            {/* weather app */}
            <ProjectDetails
              svgIcon={weatherIcon}
              githubLink={weatherAppGitLink}
              projectName="Weather App"
              projectLink={weatherAppProjectLink}
              projectDescription={weatherAppDesc}
              techUsed1="React.js"
              techUsed2="JavaScript"
              techUsed3="RapidAPI"
            />
            {showMorePrjoects && (
              <>
                <ProjectDetails
                  svgIcon={ytIcone}
                  githubLink={ytCloneGitlink}
                  projectName="Youtube Homepage Clone"
                  projectLink={ytCloneProjectLink}
                  projectDescription={ytCloneDesc}
                  techUsed1="React-Typescript"
                  // techUsed2="Contex API"
                  techUsed3="Tailwind CSS"
                />
                <ProjectDetails
                  svgIcon={expensetrackerIcon}
                  githubLink={expensetrackerAppGitLink}
                  projectName="Expense Tracker"
                  projectLink={expensetrackerAppProjectLink}
                  projectDescription={expensetrackerAppDesc}
                  techUsed1="React.js"
                  techUsed2="JavaScript"
                  techUsed3="ContexAPI"
                />
                <ProjectDetails
                  svgIcon={whacIcon}
                  githubLink={whacamoleAppGitLink}
                  projectName="Whac-a-Mole"
                  projectLink={whacamoleProjectLink}
                  projectDescription={whacamoleAppDesc}
                  techUsed1="React.js"
                  techUsed2="JavaScript"
                  techUsed3="Firebase"
                />
                {/* tic-tac-toe app */}
                <ProjectDetails
                  svgIcon={tttIcon}
                  githubLink={tttAppGitLink}
                  projectName="Tic-Tac-Toe"
                  projectLink={tttAppProjectLink}
                  projectDescription={tictactoeAppdesc}
                  techUsed1="Resct.js"
                  techUsed2="JavaScript"
                  techUsed3="CSS"
                />
                {/* todolist app */}
                <ProjectDetails
                  svgIcon={todoIcon}
                  githubLink={todoAppGitLink}
                  projectName="TodoList App"
                  projectLink={todoProjectLink}
                  projectDescription={todolistAppDesc}
                  techUsed1="JavaScript"
                  techUsed2="HTML"
                  techUsed3="CSS"
                />
                {/* calculator */}
                <ProjectDetails
                  svgIcon={calculatorIcon}
                  githubLink={calculatorAppGitLink}
                  projectName="Calculator"
                  projectLink={calculatorProjectLink}
                  projectDescription={calculatorAppDesc}
                  techUsed1="JavaScript"
                  techUsed2="HTML"
                  techUsed3="CSS"
                />
              </>
            )}
          </div>
        </div>
        <div className="container text-center">
          <p className="p-3 contact-me">
            <button
              className="text-decoration-none fs-4 btn btn-md btn button"
              onClick={toggleProjects}
            >
              {showMorePrjoects ? "View Less" : "View More"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
