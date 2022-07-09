const Works = () => {
  return (
    <div className="page-container works-container">
      <div className="project-card">
        <div className="project-card__feature-image-container">
          <h1>Project Image</h1>
        </div>
        <div className="project-card__project-info-container">
          <h1 className="project-card__project-title">Project Title</h1>
          <p className="project-card__project-description">
            Project description that is about 2 - 3 sentences. As an example
            I’ll be having 2 sentences for simplicity
          </p>
          <div className="project-card__tech-stack-container">
            <div className="project-card__tech-stack">
              <p>React JS</p>
            </div>
          </div>
          <div className="project-card__button-container">
            <button className="project-card__button">Code</button>
            <button className="project-card__button">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
