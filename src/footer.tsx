import { Col, Row } from 'react-bootstrap';
import '../src/footer.css';

const Footer = () => {
  return (
    <>
    <Row className='footer g-0'>
        <Col className='footer-sections'>
        <h3>Projects</h3>
        <h6 className="footer-text" onClick={() => window.open("https://my-meeting-notetaker.vercel.app")}>My Meeting Notaker</h6>
        <h6 className="footer-text" onClick={() => window.open("https://github.com/TomasHerreraS/market-app")}>Market App</h6>
        <h6 className="footer-text" onClick={() => window.open("https://stanco27.github.io/RigAssembly/")}>RigAssembly</h6>
        </Col>
        <Col className='footer-sections'>
        <h3>Contact</h3>
        <h6 className='footer-text'>stancodiaz@gmail.com</h6>
        <h6 className='footer-text' onClick={() => window.open("https://github.com/Stanco27")}>Github</h6>
        <h6 className='footer-text' onClick={() => window.open("https://www.linkedin.com/in/stanco-diaz-b418a117b/")}>LinkedIn</h6>
        </Col>
    </Row>
    <p className='copyright'>&copy; 2024 Stanco Diaz. All Rights Reserved.</p>
    </>
    
  )
}

export default Footer;