import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../src/navigation-bar.css";
import ThemeButton from "./theme-button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavigationBar = () => {


  return (
    <Navbar className="navigation-bar justify-content-between px-3">
      <Container>
        <Navbar.Brand href="/Stanco.github.io/Home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="/Stanco.github.io/Home">
              Home
            </Nav.Link>
            <NavDropdown className="nav-links" title="Projects">
              <Dropdown.Item onClick={() => console.log("Market App")}>Market App</Dropdown.Item>
              <Dropdown.Item onClick={() => console.log("RigAssembly")}>RigAssembly</Dropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-links" href="/Stanco.github.io/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <BsGithub className="me-4 icon-buttons" onClick={() =>(window.location.href = "http://www.github.com/Stanco27")}/>
      <BsLinkedin className="me-4 icon-buttons" onClick={() => window.location.href = "http://www.linkedin.com/in/stanco-diaz-b418a117b"}/>
      <ThemeButton />
    </Navbar>
  );
};

export default NavigationBar;
