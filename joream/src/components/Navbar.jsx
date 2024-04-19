import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import Search from "../pages/Search";

function ColorSchemesExample() {
  const [showModal, setShowModal] = useState(false);
  // input 태그의 값(value)을 관리하는 state
  const [inputValue, setInputValue] = useState("");

  // 모달을 열고 닫는 함수

  const onClickModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid darkgray",
          margin: "0 auto",
        }}
      >
        <Navbar
          className="head-navbar"
          bg="white"
          data-bs-theme="white"
          expand="lg"
          style={{
            marginRight: "20px",
          }}
        >
          <Container>
            <Nav className="top-navbar">
              <Nav.Link href="/Login">로그인</Nav.Link>
              <Nav.Link href="/Signin">회원가입</Nav.Link>
              <Nav.Link href="/mypage">마이페이지</Nav.Link>
              <Nav.Link href="/buylist">구매내역</Nav.Link>
              <Nav.Link href="/selllist">판매내역</Nav.Link>
              <Nav.Link href="/point">포인트</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Navbar>
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              fontStyle: "italic",
            }}
          >
            JOREAM
          </Navbar.Brand>
          <Container>
            <Nav>
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="#features">STYLE</Nav.Link>
              <Nav.Link href="/Shop">SHOP</Nav.Link>
              <Nav.Link
                href="/Shop"
                style={{
                  alignSelf: "center",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // onClickModal();
                  setShowModal(true);
                }}
              >
                <img
                  src="../../public/magnifying.png"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  alt="Search"
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      {showModal && (
        <Search showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default ColorSchemesExample;
