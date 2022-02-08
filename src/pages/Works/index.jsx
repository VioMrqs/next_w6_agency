import { Link, Outlet } from "react-router-dom";
import projects from "../../data/projects";

const Works = () => {
  return (
    <div>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <div className="navbar">
        {projects.map((project) => (
          <ul key={project.title}>
            <Link to={`/works/${project.title}-study-case`}>
              {project.title}
            </Link>
          </ul>
        ))}
      </div>
      <div className="project-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Works;
