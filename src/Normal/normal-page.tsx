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
        <Col xs={12} md={7} className="box1">
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
        <Col className="box2" xs={12} md={5}>
          {/* Add image of myself here */}
          <img className="profile-img" src={profileImg} />
        </Col>
        <Col className="box3" xs={12}>
          <Card className="sections mb-3">
            <Card.Title className="py-3 project-info-title">
              Projects Info
            </Card.Title>
            <h4 className="card-subtitles">Market App</h4>
            <p className="pb-3 card-text">
              I collaborated with a friend to create a full-stack ecommerce
              website, encompassing the backend, database, and frontend. Through
              this project, I gained valuable insights into how databases
              function, how the backend interacts with the database using
              queries, and how the backend communicates with the frontend when
              requests are made. The website also includes an admin side with
              security measures in place to prevent unauthorized users from
              accessing it.
            </p>
            <h4 className="card-subtitles">RigAssembly</h4>
            <p className="pb-4 card-text">
              This is an ecommerce website that I developed entirely on my own.
              While it only includes the front end, it functions like any
              standard ecommerce site. It features a product page that showcases
              the items, a compatibility check for selected products, and sleek,
              modern designs.
            </p>
          </Card>
        </Col>
        <Col xs={12} className="box3">
          <Card className="sections">
            <Card.Title className="py-3 sections-text">
              Access Projects
            </Card.Title>
            <Row>
              {projects.map((project, index) => (
                <Col xs={12} md={6} lg={4} key={index}>
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
