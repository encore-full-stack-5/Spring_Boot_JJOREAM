import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Search from "../pages/Search";

function ColorSchemesExample() {
  const [showModal, setShowModal] = useState(false);
  // input 태그의 값(value)을 관리하는 state
  const [inputValue, setInputValue] = useState("");

  // 모달을 열고 닫는 함수

  const onClickModal = () => {
    setShowModal(!showModal);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(async () => {
    // 로컬 스토리지에서 토큰을 확인하고, 토큰이 있으면 setIsLoggedIn(true) 호출
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
              <Nav.Link href="/mypage">마이페이지</Nav.Link>
              <Nav.Link href="/buylist">구매내역</Nav.Link>
              <Nav.Link href="/selllist">판매내역</Nav.Link>
              <Nav.Link href="/point">포인트</Nav.Link>
              {isLoggedIn ? (
                <Nav>
                  {/* 로그아웃 항목 */}
                  <Nav.Link href="/logout">로그아웃</Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  {/* 로그인과 회원가입 항목 */}
                  <Nav.Link href="/Login">로그인</Nav.Link>
                  <Nav.Link href="/Signin">회원가입</Nav.Link>
                </Nav>
              )}
            </Nav>
          </Container>
        </Navbar>

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
                fontStyle: "italic",
              }}
            >
              JOREAM
            </Navbar.Brand>
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
