import { TOTAL_SCREENS } from "../../utilis/common";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/logo.png";
import "./navBar.css";

export default function NavBar() {
  const getNavOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className="nav-option"
        onClick={() => switchScreen(i, Screen)}
      >
        <h4 className="nav-option-seperator">{Screen.screen_name}</h4>
      </div>
    ));
  };

  const switchScreen = (_index, screen) => {
    const screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container className="d-flex flex-row">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand>
            <img
              src={Logo}
              alt="Logo"
              width="20%"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {getNavOptions()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
