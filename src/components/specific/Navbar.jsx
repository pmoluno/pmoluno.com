import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

const Navigation = () => {
  const logoStyle ={
    color: '#f47e05',
    textTransform: 'lowercase',
  }
  return (
    <Navbar expand="lg" fixed="top" className="">
      <Container>
        <Navbar.Brand style={{fontWeight: '700'}}>
          Pmoluno<span style={logoStyle}>.com</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <span
            className="menu"
            onClick={(e) => e.currentTarget.classList.toggle('opened')}
            aria-label="Main Menu"
          >
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Container fluid className="d-lg-flex mt-3 mt-md-0">
            <Nav className="ms-auto">
            <Nav.Link href="/" className="pe-md-3">
                Home
              </Nav.Link>
            <Nav.Link href="#about" className="pe-md-3">
                About
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/services/page/a8018832a49bb09328/" className="pe-md-3">
                Services
              </Nav.Link>
              <Nav.Link href="#portfolio" className="pe-md-3">
                Works
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/services/page/a8018832a49bb09328/" className="pe-md-3">
                Reviews
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;