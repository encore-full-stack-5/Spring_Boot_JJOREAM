import React from "react";
import { useState } from "react";

const Point = ({ points }) => {
  const [currentPoints, setCurrentPoints] = useState(0);
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "calc(100%/3)",
  };

  const textStyle = {
    fontSize: "15px",
    margin: "20px",
    color: "grey",
  };

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
        <div className="main-right">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "30px",
            }}
          >
            포인트
          </div>

          <div style={containerStyle}>
            <div style={textStyle}>사용가능 포인트 : {currentPoints}</div>
          </div>

          <hr
            style={{
              border: "0px",
              borderBottom: "2px solid black",
              borderColor: "black",
              opacity: 0.5,
              width: "100%",
              marginTop: "20px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>상세 내용</div>
            <div>적립/사용</div>
          </div>
          <hr
            style={{
              border: "0px",
              borderBottom: "2px solid black",
              borderColor: "black",
              opacity: 0.1,
              width: "100%",
              marginTop: "20px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "grey",
              }}
            >
              적립 또는 사용한 내역이 없습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Point;
