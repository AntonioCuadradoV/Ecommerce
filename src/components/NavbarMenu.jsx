import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import "../CSS/StyleNavbar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar expand="lg" className="fondo">
      <Container>
        <Navbar.Brand as={NavLink} to='/' className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/desayunos'>Desayunos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/menu'>Menu</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/cafe'>Cafes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
