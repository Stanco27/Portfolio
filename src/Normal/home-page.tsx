import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import projects from "./project-data.json";
import profileImg from "../assets/profileImg.jpg";
import "./home-page.css";

const Home: React.FC = () => {

  return (
    <div className="content-area">
      <Container className="py-5">
        <Row className="g-4">
          {/* About Section Tile */}
          <Col lg={8}>
            <Card className="bento-card hero-tile h-100 p-4">
              <Card.Body>
                <h1 className="display-5 fw-bold gradient-text">Stanco Diaz</h1>
                <div className="bio-text mt-3">
                  <p
                    className="lead fw-semibold"
                    style={{ color: "var(--accent-purple)" }}
                  >
                    Full-Stack Software Engineer & Student at ASU
                  </p>
                  <p className="text-main">
                    I specialize in architecting scalable web solutions and
                    AI-integrated applications. By bridging the gap between
                    robust backend systems and intuitive frontend experiences, I
                    transform complex requirements into high-performance digital
                    products.
                  </p>
                  <p className="text-muted">
                    Driven by a curiosity for emerging technologies, I spend my
                    time engineering automated web scrapers, custom AI API
                    integrations, and dynamic e-commerce engines. When I’m not
                    optimizing code, I’m applying that same competitive drive on
                    the basketball court.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Profile Image Tile */}
          <Col lg={4}>
            <Card className="bento-card profile-tile h-100 overflow-hidden border-0">
              <img src={profileImg} alt="Stanco" className="bento-img" />
            </Card>
          </Col>

          {/* Project Grid Section */}
          <Col xs={12}>
            <h2 className="section-title mb-4 mt-5">Featured Work</h2>
            <Row className="g-4">
              {projects.map((project: any, index: number) => (
                <Col md={6} lg={4} key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <Card className="bento-card project-tile h-100">
                      <div className="project-img-container">
                        <Card.Img
                          variant="top"
                          src={project.image}
                          className="project-img rounded-top-4"
                        />
                      </div>
                      <Card.Body className="p-3">
                        <Card.Title className="text-white fs-5">
                          {project.name}
                        </Card.Title>
                        <span className="text-purple small fw-bold">
                          View Project →
                        </span>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
