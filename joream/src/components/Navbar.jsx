import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

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
          <Nav className="top-navbar">
            <Nav.Link href="#home">로그인</Nav.Link>
            <Nav.Link href="#features">회원가입</Nav.Link>
            <Nav.Link href="#pricing">마이페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <nav className="head-navbar" bg="white" data-bs-theme="white" expand="lg">
        <div
          className="flex"
          style={{
            margin: "0 50px",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              color: "black",
              fontStyle: "italic",
            }}
          >
            KREAM
          </Link>
          <ul
            style={{
              display: "flex",
              alignItems: "flex-end",
              listStyle: "none",
              color: "black",
            }}
          >
            <Link to="/Shop">
              <li style={{ marginRight: "40px", color: "black" }}>HOME</li>
            </Link>
            <Link to="/Shop">
              <li style={{ marginRight: "40px", color: "black" }}>STYLE</li>
            </Link>
            <Link to="/Shop">
              <li style={{ marginRight: "40px", color: "black" }}>SHOP</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
