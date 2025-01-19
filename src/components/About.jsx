import React from "react";
import avatar from "../assets/images/WhatsApp Image 2023-08-08 at 11.57.18.jpeg";

const About = () => {
  return (
    <section className="text-light py-5 px-4" id="about">
      <div className="container align-items-center justify-content-between py-5">
        <h2 className="pt-5">
          <span className="fa">01.</span> ABOUT ME
          <span>
            <hr />
          </span>
        </h2>

        <div className="container pt-2">
          <div className="row">
            <div className="col-md-6">
              <p className="lh-lg">
                Hello! My name is
                <span className="name"> Rohit Deepati </span>And I enjoy
                creating things that live on the internet . My interests are in
                Front End Engineering, and I love to create beautiful and
                performant products with delightful user experiences.
              </p>
              <p>Here are a few technologies I’ve Known:</p>

              <div className="row">
                <div className="col-6 ">
                  <ul className="list-unstyled">
                    <li className="p-1">
                      <span>▹</span>Go
                    </li>
                    <li className="p-1">
                      <span>▹</span>React.js
                    </li>
                    <li className="p-1">
                      <span>▹</span>Typescript
                    </li>

                    <li className="p-1">
                      <span>▹</span>HTML
                    </li>
                    <li className="p-1">
                      <span>▹</span>Bootstrap
                    </li>

                    <li className="p-1">
                      <span>▹</span>SQL
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="p-1">
                      <span>▹</span>Redux
                    </li>
                    <li className="p-1">
                      <span>▹</span>Javascript
                    </li>
                    <li className="p-1">
                      <span>▹</span>CSS
                    </li>
                    <li className="p-1">
                      <span>▹</span>Tailwind CSS
                    </li>
                    <li className="p-1">
                      <span>▹</span>Git
                    </li>
                  </ul>
                </div>
              </div>

              {/* For Large Screens */}
              <div className="col-md-6 d-none d-md-block">
                <p className="p-3 contact-me">
                  <a
                    className="text-decoration-none fs-4 btn btn-md button"
                    href="mailto:deepatirohit@gmail.com"
                    target="_blank"
                  >
                    Contact me
                  </a>
                </p>
              </div>

              {/* For Small and Medium Screens */}
              <div className="col-md-6 d-flex justify-content-center align-items-center d-md-none">
                <p className="p-3 contact-me text-center">
                  <a
                    className="text-decoration-none fs-4 btn btn-md button"
                    href="mailto:deepatirohit@gmail.com"
                    target="_blank"
                  >
                    Contact me
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img img-fluid mx-auto"
                src={avatar}
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
