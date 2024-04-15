import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        className="head-navbar"
        bg="white"
        data-bs-theme="white"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
            }}
          >
            KREAM
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STYLE</Nav.Link>
            <Nav.Link href="#pricing">SHOP</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
