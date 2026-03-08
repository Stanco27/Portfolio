import { Col, Row } from 'react-bootstrap';
import '../src/footer.css';
import projects from "./Normal/project-data.json";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Row className='footer g-0'>
        <Col className='footer-sections' xs={12} md={6}>
          <h3>Projects</h3>
          {projects.map((project: any, index: number) => (
            <h6 
              key={index} 
              className="footer-text" 
              onClick={() => window.open(project.link)}
            >
              {project.name}
            </h6>
          ))}
        </Col>

        <Col className='footer-sections' xs={12} md={6}>
          <h3>Contact</h3>
          <h6 
            className='footer-text' 
            onClick={() => window.open("mailto:stancodiaz@gmail.com?subject=Inquiry from your portfolio&body=Hello, I am contacting you regarding your portfolio.")}
          >
            stancodiaz@gmail.com
          </h6>
          <h6 className='footer-text' onClick={() => window.open("https://github.com/Stanco27")}>
            Github
          </h6>
          <h6 className='footer-text' onClick={() => window.open("https://www.linkedin.com/in/stanco-diaz-b418a117b/")}>
            LinkedIn
          </h6>
        </Col>
      </Row>
      <p className='copyright'>&copy; {new Date().getFullYear()} Stanco Diaz. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;