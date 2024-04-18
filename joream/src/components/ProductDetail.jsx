import "./ProductDetail.css";

const ProductDetail = () => {
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
  } = {
    currentPrice: "252000원",
    productNameEn: "Nike SB Dunk Low Pro Chicago",
    productNameKr: "나이키 SB 덩크 로우 프로 시카고",
    size: 230,
    recentDeal: "301,000원",
    releasePrice: "$190 (약 263,100원)",
    modelCode: "BQ6817-600",
    releaseDate: "22/02/06",
    color: "Varsity Red/White-Varsity Red-Black",
  };
  return (
    <div className="detail">
      <div className="current-price-title">즉시 구매가</div>
      <div className="current-price">{currentPrice}</div>
      <div className="product-name-en">{productNameEn}</div>
      <div className="product-name-kr">{productNameKr}</div>
      <button className="size-button" type="button">
        모든 사이즈
      </button>
      <div className="info-container">
        <div className="info">
          <div>최근 거래가</div>
          <div>{recentDeal}</div>
        </div>
        <div className="info">
          <div>발매가</div>
          <div>{releasePrice}</div>
        </div>
        <div className="info">
          <div>모델 번호</div>
          <div>{modelCode}</div>
        </div>
        <div className="info">
          <div>출시일</div>
          <div>{releaseDate}</div>
        </div>
        <div className="info">
          <div>대표 색상</div>
          <div>{color}</div>
        </div>
      </div>
      <div className="transaction-button">
        <button className="purchase-button" type="button">
          <span>구매</span>
          <pre>252,000원 즉시 구매가</pre>
        </button>
        <button className="sale-button" type="button">
          <span>판매</span>
          <pre>356,000원 즉시 판매가</pre>
        </button>
      </div>
      <button className="wish-button" type="button">
        관심상품 1.4만
      </button>
    </div>
  );
};

export default ProductDetail;
