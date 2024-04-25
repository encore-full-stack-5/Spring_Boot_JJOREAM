import { useRecoilState } from "recoil";
import "./ProductSelect.css";
import {
  isPurchaseState,
  isSaleState,
  isTransactionState,
  productInfoState,
  purchaseHistoryState,
  saleHistoryState,
  transactionHistoryState,
} from "../store/ProductDetail";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const ProductSelect = () => {
  const [productInfo, setProductInfo] = useRecoilState(productInfoState);
  const [transactionHistory, setTransactionHistory] = useRecoilState(
    transactionHistoryState
  );
  const [saleHistory, setSaleHistory] = useRecoilState(saleHistoryState);
  const [purchaseHistory, setPurchaseHistory] =
    useRecoilState(purchaseHistoryState);
  const [isTransaction, setIsTransaction] = useRecoilState(isTransactionState);
  const [isSale, setIsSale] = useRecoilState(isSaleState);
  const [isPurchase, setIsPurchase] = useRecoilState(isPurchaseState);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showWishModal, setShowWishModal] = useState(false);

  const [selectedSize, setSelectedSize] = useState("모든 사이즈");
  const { productSize, productPrice } = {
    productSize: [
      "모든 사이즈",
      225,
      230,
      235,
      235,
      240,
      240,
      245,
      250,
      255,
      260,
      265,
      270,
      275,
      280,
      285,
      290,
      295,
      300,
    ],
    productPrice: [
      "구매입찰",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
      "320,000",
    ],
  };

  const {
    currentPrice,
    productNameEn,
    productNameKr,
    size,
    recentDeal,
    releasePrice,
    modelCode,
    releaseDate,
    color,
  } = productInfo;

  const getTransactionHistory = (e) => {
    e.preventDefault();
    setIsTransaction(true);
    setIsSale(false);
    setIsPurchase(false);
  };

  const getSaleHistory = (e) => {
    e.preventDefault();
    setIsTransaction(false);
    setIsSale(true);
    setIsPurchase(false);
  };

  const getPurchaseHistory = (e) => {
    e.preventDefault();
    setIsTransaction(false);
    setIsSale(false);
    setIsPurchase(true);
  };

  const openSizeModal = () => {
    setShowSizeModal(true);
  };

  const closeSizeModal = () => {
    setShowSizeModal(false);
  };

  const openPurchaseModal = () => {
    setShowPurchaseModal(true);
  };

  const closePurchaseModal = () => {
    setShowPurchaseModal(false);
  };

  const openSaleModal = () => {
    setShowSaleModal(true);
  };

  const closeSaleModal = () => {
    setShowSaleModal(false);
  };

  const openWishModal = () => {
    setShowWishModal(true);
  };

  const closeWishModal = () => {
    setShowWishModal(false);
  };

  return (
    <div className="detail">
      <div className="current-price-title">즉시 구매가</div>
      <div className="current-price">{currentPrice}</div>
      <div className="product-name-en">{productNameEn}</div>
      <div className="product-name-kr">{productNameKr}</div>
      <button className="size-button" type="button" onClick={openSizeModal}>
        {selectedSize}
      </button>
      <div className="info-container">
        <div className="info">
          <div style={{ color: "grey" }}>최근 거래가</div>
          <div>{recentDeal}</div>
        </div>
        <div className="info">
          <div style={{ color: "grey" }}>발매가</div>
          <div>{releasePrice}</div>
        </div>
        <div className="info">
          <div style={{ color: "grey" }}>모델 번호</div>
          <div>{modelCode}</div>
        </div>
        <div className="info">
          <div style={{ color: "grey" }}>출시일</div>
          <div>{releaseDate}</div>
        </div>
        <div className="info">
          <div style={{ color: "grey" }}> 대표 색상</div>
          <div>{color}</div>
        </div>
      </div>
      <div className="transaction-button">
        <button
          className="purchase-button"
          type="button"
          onClick={openPurchaseModal}
        >
          <div className="purchase-container">
            <div className="purchase-button-left">구매</div>
            <div className="purchase-button-right">
              <div>252,000원 </div>
              <div className="button-kr">즉시 구매가</div>
            </div>
          </div>
        </button>
        <button className="sale-button" type="button" onClick={openSaleModal}>
          <div className="sale-container">
            <div className="sale-button-left">판매</div>
            <div className="sale-button-right">
              <div>356,000원</div>
              <div className="button-kr">즉시 판매가</div>
            </div>
          </div>
        </button>
      </div>
      <button className="wish-button" type="button" onClick={openWishModal}>
        관심상품 1.4만
      </button>
      <div className="benefit">
        <div>
          <div className="benefit-title">추가 혜택</div>
        </div>
        <div>
          포인트<span className="point">계좌 간편결제 시 1% 적립</span>
        </div>
        <div>
          결제
          <span className="deal">
            계좌간편결제 최대 5만 포인트 적립 & 수수료 할인
          </span>
        </div>
      </div>
      <div className="shipping">
        <div className="shipping-title">배송 정보</div>
        <div className="shipping-container">
          <img
            className="shipping-img"
            src="../../public/lightning.jpg"
            alt="lightning"
            width="50"
            height="50"
          />
          <div className="shipping-info">
            <div>빠른배송 5,000원</div>
            <div>지금 결제시 내일 4/19(금) 도착 예정</div>
          </div>
        </div>
        <div className="shipping-container">
          <img
            className="shipping-img"
            src="../../public/box.jpg"
            alt="box"
            width="50"
            height="50"
          />
          <div className="shipping-info">
            <div>일반배송 3,000원</div>
            <div>검수 후 배송 ・ 5-7일 내 도착 예정</div>
          </div>
        </div>
        <div className="shipping-container">
          <img
            className="shipping-img"
            src="../../public/warehouse.jpg"
            alt="warehouse"
            width="50"
            height="50"
          />
          <div>
            <div>창고보관 첫 30일 무료</div>
            <div>지금 결제시 내일 4/19(금) 도착 예정</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={getTransactionHistory}
        style={{
          display: "inline-block",
          width: "calc(100%/3)",
          backgroundColor: "rgb(246, 246, 246)",
          border: "1px solid rgb(229, 228, 228)",
          height: "30px",
          verticalAlign: "center",
          lineHeight: "1",
          fontSize: "0.9rem",
        }}
      >
        체결 거래
      </button>
      <button
        type="button"
        onClick={getSaleHistory}
        style={{
          display: "inline-block",
          width: "calc(100%/3)",
          backgroundColor: "rgb(246, 246, 246)",
          border: "1px solid rgb(229, 228, 228)",
          height: "30px",
          verticalAlign: "center",
          lineHeight: "1",
          fontSize: "0.9rem",
        }}
      >
        판매 입찰
      </button>
      <button
        type="button"
        onClick={getPurchaseHistory}
        style={{
          display: "inline-block",
          width: "calc(100%/3)",
          backgroundColor: "rgb(246, 246, 246)",
          border: "1px solid rgb(229, 228, 228)",
          height: "30px",
          verticalAlign: "center",
          lineHeight: "1",
          fontSize: "0.9rem",
        }}
      >
        구매 입찰
      </button>
      <table style={{ width: "100%", marginTop: "30px", fontSize: "0.9rem" }}>
        {isTransaction ? (
          <>
            <thead
              style={{
                height: "30px",
                borderBottom: "1px solid rgb(199, 197, 197)",
              }}
            >
              <th style={{ width: "70%" }}>옵션</th>
              <th style={{ width: "15%", textAlign: "right" }}>거래가</th>
              <th style={{ width: "15%", textAlign: "right" }}>거래일</th>
            </thead>
            <tbody>
              {transactionHistory.map((el, i) => (
                <tr key={i} style={{ height: "30px" }}>
                  <td>{el.option}</td>
                  <td style={{ textAlign: "right" }}>{el.price}</td>
                  <td style={{ textAlign: "right" }}>{el.date}</td>
                </tr>
              ))}
            </tbody>
          </>
        ) : isSale ? (
          <>
            <thead
              style={{
                height: "30px",
                borderBottom: "1px solid rgb(199, 197, 197)",
              }}
            >
              <th style={{ width: "70%" }}>옵션</th>
              <th style={{ width: "15%", textAlign: "right" }}>판매 희망가</th>
              <th style={{ width: "15%", textAlign: "right" }}>수량</th>
            </thead>
            <tbody>
              {saleHistory.map((el, i) => (
                <tr key={i} style={{ height: "30px" }}>
                  <td>{el.option}</td>
                  <td style={{ textAlign: "right" }}>{el.price}</td>
                  <td style={{ textAlign: "right" }}>{el.amount}</td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <>
            <thead
              style={{
                height: "30px",
                borderBottom: "1px solid rgb(199, 197, 197)",
              }}
            >
              <th style={{ width: "70%" }}>옵션</th>
              <th style={{ width: "15%", textAlign: "right" }}>구매 희망가</th>
              <th style={{ width: "15%", textAlign: "right" }}>수량</th>
            </thead>
            <tbody>
              {purchaseHistory.map((el, i) => (
                <tr key={i} style={{ height: "30px" }}>
                  <td>{el.option}</td>
                  <td style={{ textAlign: "right" }}>{el.price}</td>
                  <td style={{ textAlign: "right" }}>{el.amount}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
      <Modal
        show={showSizeModal}
        onHide={closeSizeModal}
        scrollable
        style={{
          width: "480px",
          height: "580px",
          top: "20%",
          left: "35%",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              textAlign: "right",
            }}
          >
            사이즈
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productSize.map((el, i) => (
            <button
              key={i}
              style={{
                width: "130px",
                marginRight: "7px",
                marginBottom: "10px",
                height: "60px",
              }}
            >
              <div>{el}</div>
              <div style={{ fontSize: "0.8rem", color: "rgb(218, 83, 71)" }}>
                {productPrice[i]}
              </div>
            </button>
          ))}
        </Modal.Body>
      </Modal>

      <Modal
        show={showPurchaseModal}
        onHide={closePurchaseModal}
        scrollable
        style={{
          width: "480px",
          height: "580px",
          top: "20%",
          left: "35%",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              textAlign: "right",
            }}
          >
            구매하기
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <img
                src="../../public/shoes.jpg"
                alt="shoes"
                width="60"
                height="60"
                style={{ display: "block" }}
              />
              <div style={{ fontSize: "0.8rem", textAlign: "left" }}>
                <div>{modelCode}</div>
                <div>{productNameEn}</div>
                <div>{productNameKr}</div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productSize.map((el, i) => (
            <button
              key={i}
              style={{
                width: "130px",
                marginRight: "7px",
                marginBottom: "10px",
                height: "60px",
              }}
            >
              <div>{el}</div>
              <div style={{ fontSize: "0.8rem", color: "rgb(218, 83, 71)" }}>
                {productPrice[i]}
              </div>
            </button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal
        show={showSaleModal}
        onHide={closeSaleModal}
        scrollable
        style={{
          width: "480px",
          height: "580px",
          top: "20%",
          left: "35%",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              textAlign: "right",
            }}
          >
            판매하기
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <img
                src="../../public/shoes.jpg"
                alt="shoes"
                width="60"
                height="60"
                style={{ display: "block" }}
              />
              <div style={{ fontSize: "0.8rem", textAlign: "left" }}>
                <div>{modelCode}</div>
                <div>{productNameEn}</div>
                <div>{productNameKr}</div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productSize.map((el, i) => (
            <button
              key={i}
              style={{
                width: "130px",
                marginRight: "7px",
                marginBottom: "10px",
                height: "60px",
              }}
            >
              <div>{el}</div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgb(77, 214, 118)",
                }}
              >
                {productPrice[i]}
              </div>
            </button>
          ))}
        </Modal.Body>
      </Modal>
      <Modal
        show={showWishModal}
        onHide={closeWishModal}
        scrollable
        style={{
          width: "480px",
          height: "580px",
          top: "20%",
          left: "35%",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "800", textAlign: "center" }}>
            관심 상품
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productSize.map((el, i) => (
            <button
              key={i}
              style={{
                width: "130px",
                marginRight: "7px",
                marginBottom: "10px",
                height: "60px",
              }}
            >
              <div>{el}</div>
            </button>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductSelect;
