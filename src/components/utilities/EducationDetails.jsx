export const EducationDetails = ({ year, collegeDegree, collegeTitle }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card box h-100">
        <div className="card-body">
          <h6>{year}</h6>
          <h3 className="card-title">{collegeDegree}</h3>
          <p className="card-text">{collegeTitle}</p>
        </div>
      </div>
    </div>
  );
};
