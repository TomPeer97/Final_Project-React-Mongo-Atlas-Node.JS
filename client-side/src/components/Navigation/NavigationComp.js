import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tabs } from "../../helpers/tabs";
import LogoutBtn from "../logout/logout";
import "../../css/navbar.css";

//show visually the navbar
function NavigationBarComp({ user }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Home">
          <Image
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {user._id
              ? tabs
                  .filter((x) => x.displayForLoogedin)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}{" "}
                    </Nav.Link>
                  ))
              : tabs
                  .filter((x) => !x.hideForLoggedout)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}{" "}
                    </Nav.Link>
                  ))}
          </Nav>
          <span id="userNameNav">{user.name}</span>
          <span id="logoutBtnSpan">
            {" "}
            {user._id && <LogoutBtn id="logoutBtn"></LogoutBtn>}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarComp;
