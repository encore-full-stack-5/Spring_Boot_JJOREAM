import { useState } from "react";

// import { login, register } from "../api/auth";
const Wishlist = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
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

        <div className="main-right" style={{ fontWeight: "bold" }}>
          관심
          <hr
            style={{
              border: "0px",
              borderBottom: "4px solid black",
              borderColor: "black",
              opacity: 1,
              width: "97%",
              marginTop: "10px",
            }}
          />
          <div className="content-header">
            <div className="total-rows">전체 20</div>
            <ul className="wish-list">
              <li>
                <div className="wish-item">
                  <div className="wish-product">
                    <div className="product-box">임시</div>
                    <div className="product-detail">
                      <a>Nike</a>
                      <a>Nike Air Force 1 '07 LV8 Dusty Blue</a>
                      <p className="size">
                        <span>260</span>
                      </p>
                    </div>
                    <div className="wish-buy">
                      <div>
                        <a
                          disabled="disabled"
                          className="blind btn-division"
                        ></a>
                        <button className="btn-action">
                          <strong className="btn-title">구매</strong>
                          <div className="price">
                            <span className="amount">
                              <span className="num">-</span>
                              <span className="won"></span>
                            </span>
                            <span className="desc">즉시구매가</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
