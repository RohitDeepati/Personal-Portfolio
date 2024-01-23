import React from "react";

const Education = () => {
  return (
    <section className="py-5 px-4" id="education">
      <div className="container p-5">
        <h2 className="p-4">
          <span className="fa">03. </span> EDUCATION
          <span>
            <hr />
          </span>
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h6>2019-2022</h6>
                  <h3 className="card-title">
                    Bachelor's Degree in Engineering Technology
                  </h3>
                  <p className="card-text">
                    Godavari Institute of Engineering and Technology -
                    Rajahmundry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h6>2016-2019</h6>
                  <h3 className="card-title">Diploma in Engineering</h3>
                  <p className="card-text">
                    Col. D.S. Raju Polytechnic college - Poduru.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h6>2015-2016</h6>
                  <h3 className="card-title">
                    10<sup>th</sup>
                  </h3>
                  <p className="card-text">SOBHANA(E.M)SCHOOL - RAZOLE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
