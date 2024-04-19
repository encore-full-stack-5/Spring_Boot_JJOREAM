import "./ProductSelect.css";

const ProductSelect = () => {
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
    currentPrice: "252,000원",
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
          <div className="purchase-container">
            <div className="purchase-button-left">구매</div>
            <div className="purchase-button-right">
              <div>252,000원 </div>
              <div className="button-kr">즉시 구매가</div>
            </div>
          </div>
        </button>
        <button className="sale-button" type="button">
          <div className="sale-container">
            <div className="sale-button-left">판매</div>
            <div className="sale-button-right">
              <div>356,000원</div>
              <div className="button-kr">즉시 판매가</div>
            </div>
          </div>
        </button>
      </div>
      <button className="wish-button" type="button">
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
          <div class="shipping-info" className="shipping-info">
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
    </div>
  );
};

export default ProductSelect;
