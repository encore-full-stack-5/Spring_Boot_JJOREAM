import Nav from "react-bootstrap/Nav";
import { useState } from "react";

const SellList = () => {
  const [status, setStatus] = useState("bidding");
  return (
    <>
      <div className="main">
        <div className="main-left">
          <a className="title">마이페이지</a>
          <div className="shopping-info">
            <a style={{ fontWeight: "bold" }}>쇼핑 정보</a>
            <li className="shopping-list">
              <a>구매 내역</a>
            </li>
            <li className="shopping-list">
              <a>판매 내역</a>
            </li>
            <li className="shopping-list">
              <a>관심</a>
            </li>
          </div>
          <div className="shopping-info">
            <a style={{ fontWeight: "bold" }}>내 정보</a>
            <li className="shopping-list">
              <a>회원 정보</a>
            </li>
            <li className="shopping-list">
              <a>포인트</a>
            </li>
          </div>
        </div>
        {/* ============================================================================== */}
        <div className="main-right">
          <div className="list-title">판매내역</div>
          <Nav
            className="list-nav"
            variant="underline"
            defaultActiveKey="/home"
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <Nav.Item>
              <Nav.Link
                style={{ color: "black", fontWeight: "bold" }}
                onClick={() => setStatus("bidding")}
              >
                판매 입찰
              </Nav.Link>
              {/* href="/Shop" */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "black", fontWeight: "bold" }}
                onClick={() => setStatus("pending")}
              >
                진행 중
              </Nav.Link>
              {/* eventKey="link-1" */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "black", fontWeight: "bold" }}
                onClick={() => setStatus("finished")}
              >
                {/* eventKey="disabled" disabled */}
                종료
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div
            style={{
              marginTop: "150px",
              width: "100%",
              height: "80px",
              display: "flex",
              flexDirection: "row",
              border: "2px solid black",
            }}
          >
            <div style={{ display: "flex", width: "40%" }}>
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                이미지
              </div>
              <div
                style={{
                  alignSelf: "center",
                  marginLeft: "16px",
                  width: "65%",
                  height: "80px",
                }}
              >
                <div>나이키 에어포스</div>
              </div>
            </div>
            <div
              style={{
                textAlign: "end",
                width: "40%",
              }}
            >
              구매가격
            </div>
            <div
              style={{
                textAlign: "end",
                width: "20%",
              }}
            >
              구매일
            </div>
          </div>
          <div
            style={{
              marginTop: "10px",
              width: "100%",
              height: "80px",
              display: "flex",
              flexDirection: "row",
              border: "2px solid black",
            }}
          >
            <div style={{ display: "flex", width: "40%" }}>
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                이미지
              </div>
              <div
                style={{
                  alignSelf: "center",
                  marginLeft: "16px",
                  width: "65%",
                  height: "80px",
                }}
              >
                <div>나이키 에어포스</div>
              </div>
            </div>
            <div
              style={{
                textAlign: "end",
                width: "40%",
              }}
            >
              구매가격
            </div>
            <div
              style={{
                textAlign: "end",
                width: "20%",
              }}
            >
              구매일
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellList;
