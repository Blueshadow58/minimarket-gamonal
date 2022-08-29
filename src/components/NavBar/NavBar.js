import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueIds = [];

    getItems()
      .then((data) => {
        setCategories(
          data.filter((element) => {
            const isDuplicate = uniqueIds.includes(element.category);
            if (!isDuplicate) {
              uniqueIds.push(element.category);
              return true;
            }
            return false;
          })
        );
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-center" as={Link} to="/">
          GM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Catalogo">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.category}
                  as={Link}
                  to={`/category/${category.category}`}
                  className="text-capitalize"
                >
                  {category.category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center">
            <CartWidget />
            <Nav.Link href="/">Iniciar Sesion</Nav.Link>
            <Nav.Link href="/">Registrarme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
