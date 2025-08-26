import { Card, Col, Row } from "react-bootstrap";
import "../Normal/normal-page.css";
import ProjectCards from "./project-cards";
import projects from "../Normal/project-data.json";
import profileImg from "../assets/profileImg.jpg";
import img1 from "../assets/Notetaker.png";
import img2 from "../assets/Market.jpg";
import img3 from "../assets/PC.webp";

const NormalPage = () => {
  return (
    <div className="px-4 pt-4 normal-container">
      <Row>
        <Col xs={12} sm={6} md={7} lg={9} className="box1">
          <Card className="sections">
            <Card.Title className="py-3 sections-text">About</Card.Title>
            <p className="pb-3 card-text">
              I'm Stanco, a software engineering student at Arizona State
              University (ASU) with a passion for building innovative solutions.
              <br />
              <br />
              I’m always curious about how things work and love exploring new
              areas in technology, whether it’s learning a new programming
              language or experimenting with the latest tools.
              <br />
              <br />
              When I'm not coding, you will probably find me gaming or shooting
              some hoops on the basketball court. I'm eager to transition into
              the professional tech world and make a significant impact.
            </p>
          </Card>
        </Col>
        <Col className="box2" xs={12} sm={6} md={5} lg={3}>
          {/* Add image of myself here */}
          <img className="profile-img" src={profileImg} />
        </Col>
        <Col className="box3" xs={12}>
          <Card className="sections mb-3">
            <Card.Title className="py-3 project-info-title">
              Projects Info
            </Card.Title>
            <h4 className="card-subtitles">My Meeting Notetaker</h4>
            <p className="pb-4 card-text">
              · Developed robust backend functionality using{" "}
              <strong>AssemblyAI</strong> and <strong>Groq API</strong> to
              handle and process AI-driven requests.
              <br />
              <br />
              · Worked on this project utilizing <strong>React</strong>, <strong>Typescript</strong>, <strong>Express.js</strong>, <strong>Multer</strong>, <strong>Axios</strong> to create a seamless user experience, and <strong>React Bootsrap</strong>.
              <br />
              <br />· Engineered a seamless user experience with modern{" "}
              <strong>styling decisions</strong>, including{" "}
              <strong>animations</strong>, to create a dynamic and engaging
              interface.
              <br />
              <br />· Implemented comprehensive <strong>
                error handling
              </strong>{" "}
              on the backend to ensure the system's reliability and resilience
              when interacting with third-party APIs.
              <br />
              <br />· Proactively consulted API documentation to{" "}
              <strong>optimize</strong> API integration and enhance project
              performance.
            </p>

            <h4 className="card-subtitles">Quantum Halo</h4>
            <p className="pb-3 card-text">
              · Directed the development of a full-stack e-commerce platform
              using <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>PostgreSQL</strong>.
              <br />
              <br />
              · Led 20+ meetings in Spanish, demonstrating strong bilingual
              communication skills and ensuring seamless collaboration.
              <br />
              <br />
              · Fostered strong collaboration and led over 20 project meetings in Spanish, demonstrating <strong>bilingual communication skills</strong> and ensuring seamless teamwork.
              <br />
              <br />
              · Engineered the complete integration of the <strong>frontend</strong>, <strong>backend</strong>, and <strong>database</strong> to create a smooth, intuitive user experience.
              <br />
              <br />
              · Developed comprehensive admin tools for efficient <strong>product and user management</strong>, streamlining site operations.
              <br />
              <br />· Designed and implemented core pages, including the product, home, contact, and about pages, ensuring a cohesive and professional user interface.
              <br />
              <br />· Effectively <strong>managed project timelines</strong> while balancing academic commitments, consistently meeting deadlines and ensuring successful project delivery.
            </p>
            <h4 className="card-subtitles">RigAssembly</h4>
            <p className="pb-4 card-text">
              · Developed a multi-page e-commerce platform with <strong>React</strong> and <strong>TypeScript</strong>, leveraging libraries like <strong>React Bootstrap</strong> to design and implement core pages including Home, Product, About, and Contact.
              <br />
              <br />
              · Engineered a dynamic <strong>compatibility checker</strong> to enable users to verify product part compatibility, significantly enhancing usability.
              <br />
              <br />
              · Authored and deployed a comprehensive <strong>guide page</strong> to assist users with the compatibility tool, improving overall user satisfaction and experience.
              <br />
              <br />· Managed project timelines effectively, consistently delivering a high-quality product while balancing work and academic responsibilities.
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
                    image={
                      index === 0
                        ? img1
                        : index === 1
                        ? img2
                        : index === 2
                        ? img3
                        : ""
                    }
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
