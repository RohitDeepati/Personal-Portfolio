import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { projects } from "./ProjectsAPI/Projects-data";

export const ProjectsCard = () => {
  return (
    <section className="py-5 px-4" id="projects">
      <div className="container p-5">
        <h2 className="">
          <span className="fa">02. </span> Some Things I’ve Built
          <span>
            <hr />
          </span>
        </h2>
        <div className="container px-3">
          <ul className="row text-start  p-2 justify-content-evenly">
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-xs-8 col-sm-6  col-md-8 col-lg-3 m-2 p-2 custom-tablet-col"
              >
                <div className="">
                  <div className="card box text-light ">
                    <div className="card-body">
                      <div className="h1 mb-3">
                        <div className="d-flex justify-content-between">
                          {project.icon}
                          <a
                            className="icon"
                            target="_blank"
                            href={project.gitlink}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-github"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <a
                        className="text-decoration-none"
                        href={project.projectlink}
                        target="_blank"
                      >
                        <h3 className="card-title mb-3" title="External Link">
                          {project.title}
                        </h3>
                      </a>
                      <p className="card-text">{project.description}</p>
                      <div className="d-flex justify-content-around d-grid gap-3">
                        <p>{project.skill1}</p>
                        <p>{project.skill2}</p>
                        <p>{project.skill3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
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
