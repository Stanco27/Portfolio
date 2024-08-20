import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Normal/normal-page.css'

interface Projects {
  name: string;
  link: string;
}

interface ProjectProps {
  image: string;
  project: Projects;
}

const ProjectCards: React.FC<ProjectProps> = ({ project, image }) => {
  return (
    <Link to={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
      <Card className="project-card">
        <Card.Title className="py-2 project-title">{project.name}</Card.Title>
        <Card.Img className="project-img" src={image} />
      </Card>
    </Link>
  );
};

export default ProjectCards;
