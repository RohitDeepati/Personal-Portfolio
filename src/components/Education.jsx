import React from "react";
import { EducationDetails } from "../utilities/EducationDetails";

const Education = () => {
  return (
    <section className="py-5 px-4" id="education">
      <div className="container p-0 p-lg-5">
        <h2 className="p-4">
          <span className="fa">03. </span> EDUCATION
          <span>
            <hr />
          </span>
        </h2>

        <div className="container">
          <div className="row">
            <EducationDetails
              year="2019-2022"
              collegeDegree="Bachelor's Degree in Engineering Technology."
              collegeTitle="Godavari Institute of Engineering and Technology - Rajahmundry."
            />
            <EducationDetails
              year="2016-2019"
              collegeDegree="Diploma in Engineering."
              collegeTitle="Col. D.S. Raju Polytechnic college - Poduru."
            />
            <EducationDetails
              year="2015-2016"
              collegeDegree="10th"
              collegeTitle="SOBHANA(E.M)SCHOOL - RAZOLE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
