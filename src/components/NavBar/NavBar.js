import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          GM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            {/* <Nav.Link href="#Contacto">Contacto</Nav.Link> */}
            <NavDropdown title="Catalogo">
              <NavDropdown.Item as={Link} to="/category/cafe">
                Café
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/conserva">
                Conservas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/mermelada">
                Mermelada
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          <Nav>
            <CartWidget />
            <Nav.Link href="#deets">Iniciar Sesion</Nav.Link>
            <Nav.Link href="#deets">Registrarme</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
