import { useState } from "react";
export default function Technologies() {
  const technologies = [
    "React.js",
    "Typescript",
    "Bootstrap",
    "jQuery",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Redis",
    "Git",
    "Docker",
    "Kubernetes",
    "CircleCI",
    "Jenkins",
    "AWS & Azure",
    "Google Cloud",
    "GraphQL",
  ];
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {technologies
            .slice(0, showMore ? technologies.length : 12)
            .map((tech, index) => (
              <div key={index} className="col-4  col-md-3 mb-2">
                <div className="glassmorphism">
                  <h2 key={index}>{tech}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
      {technologies.length > 12 && (
        <div className="text-center mt-3">
          <button className="btn btn-style-2" onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
            <i className={showMore ? "bi bi-caret-up-fill ps-2" : "bi bi-caret-down-fill ps-2"}></i>
            
          </button>
        </div>
      )}
    </>
  );
}
