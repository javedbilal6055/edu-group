import React, { useContext, useEffect, useState } from "react";
import "./navBar.scss";
import { Nav, Navbar, Container, Modal } from "react-bootstrap";
import CustomButton from "../Button/CustomButton";
import { Link } from "react-router-dom";
import JsonForm from "../json-schema-form/JsonForm";
import { FormContext } from "../../allContext/context";
function CustomeNavBar() {
  const [navLinks, setNavLinks] = useState(require("./navbar.content.json"));
  const { userDetails, saveUserDetails, isModalOpen, setModalOpen } =
    useContext(FormContext);
  useEffect(() => {
    /* To add collapsed class on load for hamburger button */
    let hamburgerButton = document.querySelector(".navbar-toggler");
    hamburgerButton.classList.add("collapsed");

    hamburgerButton.addEventListener("click", handleHamburgerButtonClick);
  }, []);

  /*To prevent page from scrolling when hamburger menu is open*/
  const handleHamburgerButtonClick = (e) => {
    let htmlTag = document.querySelector("html");
    if (e.target.closest(".navbar-toggler").classList.contains("collapsed")) {
      htmlTag.classList.add("stop-scroll");
    } else {
      htmlTag.classList.remove("stop-scroll");
    }
  };

  const openModal = (e) => {
    console.log("event", e, "...userinfo..", userDetails);
    e.preventDefault();
    // code need to be update as per context api rather than redux
    if (!userDetails) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [loginText, setLoginText] = useState("Log In");
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((item, index) => (
              <Nav.Link as={Link} to={item.url} key={index}>
                {item.text}
              </Nav.Link>
            ))}
            <CustomButton
              buttonText={loginText}
              styleName={"login"}
              clickEvent={(e) => openModal(e)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Bootstrap modal  */}

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JsonForm
            buttonText="Login"
            buttonStyleName="login"
            formType="login"
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={this.closeModal}>
          Close
        </Button> */}
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default CustomeNavBar;
