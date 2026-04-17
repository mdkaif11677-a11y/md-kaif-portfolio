import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech, Computer Engineering</h4>
                <h5>Marwadi University, Rajkot</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Completed undergraduate studies in computer engineering with a
              strong focus on data analysis, databases, and automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Data Engineering</h4>
                <h5>Certification</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Validated skills in data pipelines, ETL workflows, and cloud data
              services for scalable analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python</h4>
                <h5>Michigan Certification</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed advanced Python training focused on data cleaning,
              automation, and scripting for analytics workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
