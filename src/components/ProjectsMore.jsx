import {
  ShoppingzoneIcon,
  budgetIcon,
  calculatorIcon,
  clockIcon,
  drumkitIcon,
  expensetrackerIcon,
  foodIcon,
  hangmanIcon,
  linkedinIcon,
  memorygameIcon,
  moviehubIcon,
  todoIcon,
  tttIcon,
  weatherIcon,
  whacIcon,
  ytIcone,
} from "../assets/Icons/SvgIcons";
import {
  calculatorAppGitLink,
  calculatorProjectLink,
  clockAppGitLink,
  clockAppProjectLink,
  drumkitAppGitLink,
  drumkitAppProjectLink,
  expensetrackerAppGitLink,
  expensetrackerAppProjectLink,
  foodzoneGitLink,
  foodzoneProjectLink,
  hangmanGitlink,
  hangmanProjectlink,
  homebudgetAppGitLink,
  homebudgetAppProjectLink,
  linkdncloneAppGitLink,
  linkdncloneAppProjectLink,
  memoryGameAppGitLink,
  memoryGameProjectLink,
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
// import { projects } from "./ProjectsAPI/Projects-data";
import HeaderBar from "./utilities/HeaderBar";
import { ProjectDetails } from "./utilities/ProjectDetails";
import {
  calculatorAppDesc,
  clockAppDesc,
  drumkitAppDesc,
  expensetrackerAppDesc,
  foodZoneAppDesc,
  hangmangameDesc,
  homebudgetAppDesc,
  linkedinCloneAppDesc,
  memoryGameDesc,
  moviehubDesc,
  shoppingZoneAppDesc,
  tictactoeAppdesc,
  todolistAppDesc,
  weatherAppDesc,
  whacamoleAppDesc,
  ytCloneDesc,
} from "./utilities/ProjectsDesc";

export const ProjectsMore = () => {
  return (
    <div>
      <HeaderBar />

      <section className="py-5 px-4 " id="projects">
        <div className="container p-5">
          <div className="container px-3">
            <h2 className="py-4 mt-2 text-center">
              More Things I’ve Built
              <span>
                <hr />
              </span>
            </h2>
            <div className="container px-3">
              <div className="row text-start  p-2 justify-content-evenly">
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
                {/* foodzone app */}
                <ProjectDetails
                  svgIcon={foodIcon}
                  githubLink={foodzoneGitLink}
                  projectName="Food Zone"
                  projectLink={foodzoneProjectLink}
                  projectDescription={foodZoneAppDesc}
                  techUsed1="Resct.js"
                  techUsed2="JavaScript"
                  techUsed3="Firebase"
                />
                {/* home budget app */}
                <ProjectDetails
                  svgIcon={budgetIcon}
                  githubLink={homebudgetAppGitLink}
                  projectName="Home Budget"
                  projectLink={homebudgetAppProjectLink}
                  projectDescription={homebudgetAppDesc}
                  techUsed1="React.JS"
                  techUsed2="React-Router"
                  techUsed3="JavaScript"
                />
                {/* movie hub app */}
                <ProjectDetails
                  svgIcon={moviehubIcon}
                  githubLink={movieHubAppGitLink}
                  projectName="MovieHub"
                  projectLink={movieHubAppProjectLink}
                  projectDescription={moviehubDesc}
                  techUsed1="Resct.js"
                  techUsed2="JavaScript"
                  techUsed3="RapidAPI"
                />
                {/* clock app */}
                <ProjectDetails
                  svgIcon={clockIcon}
                  githubLink={clockAppGitLink}
                  projectName="Clock"
                  projectLink={clockAppProjectLink}
                  projectDescription={clockAppDesc}
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
                {/* drumkit app */}
                <ProjectDetails
                  svgIcon={drumkitIcon}
                  githubLink={drumkitAppGitLink}
                  projectName="Drum kit"
                  projectLink={drumkitAppProjectLink}
                  projectDescription={drumkitAppDesc}
                  techUsed1="JavaScript"
                  techUsed2="HTML"
                  techUsed3="CSS"
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
                {/* memorygame app */}
                <ProjectDetails
                  svgIcon={memorygameIcon}
                  githubLink={memoryGameAppGitLink}
                  projectName="Memory Game"
                  projectLink={memoryGameProjectLink}
                  projectDescription={memoryGameDesc}
                  techUsed1="HTML"
                  techUsed2="JavaScript"
                  techUsed3="CSS"
                />
                {/* whac-a-mole app */}
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
                {/* expensetracker app */}
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
                {/* linkedin clone */}
                <ProjectDetails
                  svgIcon={linkedinIcon}
                  githubLink={linkdncloneAppGitLink}
                  projectName="Linkedin-Homepage-Clone"
                  projectLink={linkdncloneAppProjectLink}
                  projectDescription={linkedinCloneAppDesc}
                  techUsed1="React.js"
                  techUsed2="JavaScript"
                  techUsed3="Redux"
                />
                {/* shopping zone */}
                <ProjectDetails
                  svgIcon={ShoppingzoneIcon}
                  githubLink={shoppingzoneGitlink}
                  projectName="Shopping Zone"
                  projectLink={shoppingzoneProjectLink}
                  projectDescription={shoppingZoneAppDesc}
                  techUsed1="React.js"
                  techUsed2="Contex API"
                  techUsed3="Tailwind CSS"
                />
                {/* hangman */}
                <ProjectDetails
                  svgIcon={hangmanIcon}
                  githubLink={hangmanGitlink}
                  projectName="Hangman Word Game"
                  projectLink={hangmanProjectlink}
                  projectDescription={hangmangameDesc}
                  techUsed1="React-Typescript"
                  techUsed2="Contex API"
                  techUsed3="Tailwind CSS"
                />
                {/* yt-homepage-clone */}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
