import projects from '../../data/projects';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StudyCase = () => {

  const { projectTitle } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

    useEffect(() => {
      const foundProject= projects.find((project) => project.title === projectTitle);
      setCurrentProject(foundProject);
    }, [projectTitle])

  return (
    <div className="card">
      <h2>{currentProject && currentProject.title}</h2>
      <h3>{currentProject && currentProject.subtitle}</h3>
      {/* <img
        className="project-img"
        src={currentProject && currentProject.img}
        alt={currentProject && currentProject.title}
      ></img> */}
      <p>{currentProject && currentProject.description}</p>
    </div>
  );
};

export default StudyCase;
