import { Card, Col, Row } from "react-bootstrap";
import "../Normal/normal-page.css";
import ProjectCards from "./project-cards";
import projects from "../Normal/project-data.json";
import profileImg from "../assets/profileImg.jpg";
import img1 from "../assets/Market.jpg";
import img2 from "../assets/PC.webp";

const NormalPage = () => {
  return (
    <div className="px-4 pt-4 normal-container">
      <Row>
        <Col xs={12} md={8} className="box1">
          <Card className="sections">
            <Card.Title className="py-3 sections-text">About</Card.Title>
            <p className="pb-3 card-text">
              I'm Stanco and I'm in my final year at Arizon State University
              (ASU). As a software engineer, I'm dedicated to enhancing my
              resume with projects.
            </p>
            <p className="pb-4 card-text">
              When I'm not coding, you will probably find me gaming or shooting
              some hoops on the basketball court. I'm eager to transition into
              the professional tech world and make a significant impact.
            </p>
          </Card>
        </Col>
        <Col className="box2" xs={12} md={4}>
          {/* Add image of myself here */}
          <img className="profile-img" src={profileImg} />
        </Col>
        <Col xs={12} className="box3">
          <Card className="sections">
            <Card.Title className="py-3 sections-text">Projects</Card.Title>
            <Row>
              {projects.map((project, index) => (
                <Col xs={12} md={6} lg={3} key={index}>
                  <ProjectCards
                    key={index}
                    project={project}
                    image={index === 0 ? img1 : index === 1 ? img2 : ""}
                  />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NormalPage;
