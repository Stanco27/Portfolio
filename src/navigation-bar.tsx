import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../src/navigation-bar.css";
import ThemeButton from "./theme-button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavigationBar = () => {

  const handleClick = (choice: string) => {
    window.history.replaceState({}, '', '/Portfolio/');
    
    if(choice === "Contact") {
      window.location.href = "#/Contact";
    } else {
      window.location.href = "#/Home";
    }
  }



  return (
    <Navbar className="navigation-bar justify-content-between px-3">
      <Container>
        <Navbar.Brand href="/Portfolio/#/Home" className="nav-brand">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" onClick={() => handleClick("Home")}>
              Home
            </Nav.Link>
            <NavDropdown className="nav-links" title="Projects">
              <Dropdown.Item onClick={() => window.location.href = "https://github.com/TomasHerreraS/market-app"}>Market App</Dropdown.Item>
              <Dropdown.Item onClick={() => window.location.href = "https://stanco27.github.io/RigAssembly/"}>RigAssembly</Dropdown.Item>
              <Dropdown.Item onClick={() => window.location.href = "https://my-meeting-notetaker.vercel.app/"}>Meeting Notetaker</Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <BsGithub className="me-3 icon-buttons" onClick={() =>(window.location.href = "http://www.github.com/Stanco27")}/>
      <BsLinkedin className="me-3 icon-buttons" onClick={() => window.location.href = "http://www.linkedin.com/in/stanco-diaz-b418a117b"}/>
      <ThemeButton />
    </Navbar>
  );
};

export default NavigationBar;
