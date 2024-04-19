import Nav from "react-bootstrap/Nav";
import { useState } from "react";

const BuyList = () => {
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
          <div className="list-title">구매내역</div>
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
                구매 입찰
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
        </div>
      </div>
    </>
  );
};

export default BuyList;
