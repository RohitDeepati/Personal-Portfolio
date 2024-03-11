import { Link } from "react-router-dom";
import { ProjectDetails } from "../utilities/ProjectDetails";
import {
  budgetIcon,
  foodIcon,
  hangmanIcon,
  moviehubIcon,
  shoppingzoneIcon,
  weatherIcon,
} from "../assets/Icons/SvgIcons";
import {
  foodzoneGitLink,
  foodzoneProjectLink,
  hangmanGitlink,
  hangmanProjectlink,
  homebudgetAppGitLink,
  homebudgetAppProjectLink,
  movieHubAppGitLink,
  movieHubAppProjectLink,
  shoppingzoneGitlink,
  weatherAppGitLink,
  weatherAppProjectLink,
} from "../assets/Links/ProjectLinks";
import {
  foodZoneAppDesc,
  hangmangameDesc,
  homebudgetAppDesc,
  moviehubDesc,
  weatherAppDesc,
} from "../utilities/ProjectsDesc";

export const ProjectsCard = () => {
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
              techUsed1="Typescript"
              techUsed2="React.js"
              techUsed3="CSS"
            />
            {/* shopping zone */}
            <ProjectDetails
              svgIcon={shoppingzoneIcon}
              githubLink={shoppingzoneGitlink}
              projectName="Shopping Zone"
              projectLink={homebudgetAppProjectLink}
              projectDescription={homebudgetAppDesc}
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
          </div>
        </div>
        <div className="container text-center">
          <Link
            to="/more-projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <p className="p-3 contact-me">
              <a
                className="text-decoration-none fs-4 btn btn-md btn button"
                // href="https://github.com/RohitDeepati?tab=repositories"
                target="_blank"
              >
                View More
              </a>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
