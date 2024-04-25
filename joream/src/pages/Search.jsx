import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Search = (props) => {
  const { showModal, setShowModal } = props;

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
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
              placeholder="검색"
              defaultValue={"hi"}
              onChange={(e) => setInputValue(e.target.value)}
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
    </>
  );
};

export default Search;
