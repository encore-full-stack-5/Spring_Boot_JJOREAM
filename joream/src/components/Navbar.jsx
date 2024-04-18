import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

function ColorSchemesExample() {
  // 모달 보여짐 상태를 제어하는 state
  const [showModal, setShowModal] = useState(false);

  // 모달을 열고 닫는 함수
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  return (
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
            <Nav.Link href="/">로그인</Nav.Link>
            <Nav.Link href="#features">회원가입</Nav.Link>
            <Nav.Link href="#pricing">마이페이지</Nav.Link>
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
            KREAM
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
                e.preventDefault(); // 기본 동작 방지
                e.stopPropagation(); // 이벤트 버블링 중단
                handleShow(); // 모달 열기
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

      {/* 모달 컴포넌트 */}
      <Modal show={showModal} onHide={handleClose} fullscreen={true}>
        <Modal.Header
          closeButton
          style={{
            marginTop: "5px",
            height: "3%",
          }}
        ></Modal.Header>
        <Modal.Body>
          {/* 모달 내용 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "100%",
            }}
          >
            <input
              type="text"
              placeholder="ㅎㅇ"
              style={{
                fontSize: "1.5rem", // 글자 크기 조정
                border: "none", // 모든 테두리 제거
                borderBottom: "3px solid black", // 아래쪽 테두리만 추가
                padding: "10px", // 패딩으로 입력 창 내부 여백 조정
                outline: "none", // 선택 시 테두리 없앰
                width: "50%", // 입력 창 너비
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ColorSchemesExample;
