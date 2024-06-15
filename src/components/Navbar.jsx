import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/NavPok.css";

const NavbarPok = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar className="bg-body-dark custom-bg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo Pokemon"
            src="/src/img/logo2.png"
            width="30"
            height="30"
            className="d-inline-block align-middle"
          />{" "}
        </Navbar.Brand>
        <Nav className="ms-auto d-flex gap-3 text-select">
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/pokesearch" className={setActiveClass}>
            Pokemones
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarPok;
