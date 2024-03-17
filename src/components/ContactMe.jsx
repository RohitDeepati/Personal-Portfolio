import React from "react";

const ContactMe = () => {
  return (
    <div>
      <section className="text-light pt-5 px-4 mt-5" id="contact">
        <div className="container p-0 p-lg-5">
          <h2>
            <span className="fa">04. </span> CONTACT
            <span>
              <hr />
            </span>
          </h2>
          <div className="container text-center pt-5">
            <h3 className="p-4 fs-1 fw-bold">Get In Touch</h3>
            <p className="fs-4">
              I'm always interested in hearing about new opportunities.
            </p>
            <p className="p-3 contact-me">
              <a
                className="text-decoration-none fs-4 btn btn-md button"
                href="mailto:deepatirohit@gmail.com"
                target="_blank"
              >
                Email me
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <footer className="text-light">
          <div className="container text-center">
            <h2>Rohit Deepati &middot; Frontend Developer</h2>

            <div className="d-flex justify-content-center">
             
              <a
                href="https://github.com/RohitDeepati?tab=repositories"
                className="socialContainer containerTwo"
                target="_blank"
              >
                <svg
                  className="socialSvg githubSvg"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  //   class="bi bi-github"
                  //   viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-deepati-81b64822a/"
                className="socialContainer containerThree"
                target="_blank"
              >
                <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </div>

            <p>
              <small>© 2024 Rohit Deepati. All rights reserved.</small>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ContactMe;
