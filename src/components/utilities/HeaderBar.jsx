import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div>
      <header className="navbar navbar-expand-md  navbar-dark fixed-top py-3">
        <div className="container d-flex">
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              {/* <a className="text-decoration-none"> */}

              <h1 className="navbar-brand fs-2">
                <FontAwesomeIcon icon={faCode} className="fa fn-icon" />
                ROHIT<span className="fa"> DEEPATI</span>
              </h1>

              {/* </a> */}
            </Link>
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/1P8Be0zvPgqFeZMNMiCbjHWQz0D8wZqd3/view"
              target="_blank"
              className="nav-link btn"
            >
              Resume
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderBar;
