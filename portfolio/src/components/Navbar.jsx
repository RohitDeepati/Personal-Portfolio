import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    // Close the mobile menu programmatically
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    // Toggle the mobile menu state
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md  navbar-dark fixed-top py-3">
        <div className="container">
          <a href="#home" className="text-decoration-none">
            <h1 className="navbar-brand fs-2">
              <FontAwesomeIcon icon={faCode} className="fa fn-icon" />
              ROHIT<span className="fa"> DEEPATI</span>
            </h1>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon text-white bg-dark"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navmenu"
          >
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link text-white"
                  onClick={closeMobileMenu}
                >
                  <span className="fa">01.</span> About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-link text-white"
                  onClick={closeMobileMenu}
                >
                  <span className="fa">02.</span> Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#education"
                  className="nav-link text-white"
                  onClick={closeMobileMenu}
                >
                  <span className="fa">03.</span> Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact "
                  className="nav-link text-white"
                  onClick={closeMobileMenu}
                >
                  <span className="fa">04.</span> Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1P8Be0zvPgqFeZMNMiCbjHWQz0D8wZqd3/view"
                  target="_blank"
                  className="nav-link btn"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
