import projects from '../../data/projects';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const StudyCase = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const { projectTitle } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

    useEffect(() => {
      const foundProject= projects.find((project) => project.title === projectTitle);
      setCurrentProject(foundProject);
    }, [projectTitle])

  return (
    <div className={darkMode ? "card card-dark" : "card card-light"}>
      <h2>{currentProject && currentProject.title}</h2>
      <h3>{currentProject && currentProject.subtitle}</h3>
      <img
        className="project-img"
        src={currentProject && currentProject.img}
        alt={currentProject && currentProject.title}
      ></img>
      <p>{currentProject && currentProject.description}</p>
    </div>
  );
};

export default StudyCase;
