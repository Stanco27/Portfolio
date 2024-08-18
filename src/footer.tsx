import { Col, Row } from 'react-bootstrap';
import '../src/footer.css';

const Footer = () => {
  return (
    <Row className='footer g-0'>
        <Col className='footer-sections'>
        <h3>Projects</h3>
        <h6 onClick={() => console.log()}>Market App</h6>
        <h6 onClick={() => console.log()}>RigAssembly</h6>
        </Col>
        <Col className='footer-sections'>
        <h3>Contact</h3>
        <h6>stancodiaz@gmail.com</h6>
        </Col>
    </Row>
  )
}

export default Footer;