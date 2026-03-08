import { Card } from "react-bootstrap";
import "./project-cards.css";

const ProjectCards = ({ project }: any) => {
  
  const description = project.description || ""; 

  return (
    <Card className="project-card-custom border-0 shadow-lg">
      <div className="card-inner-wrapper">
        <Card.Img 
          variant="top" 
          src={project.image} 
          className="project-image-main" 
          alt={project.title || "Project"} 
        />
        
        <div className="card-content-overlay">
          <div className="overlay-text-container">
            <h4 className="project-title-text">{project.title || "Untitled"}</h4>
            <p className="project-desc-text">
              {description.length > 150 
                ? `${description.substring(0, 150)}...` 
                : description}
            </p>
            <button className="project-btn-outline">View Project</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCards;