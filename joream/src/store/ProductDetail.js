import { atom } from "recoil";

export const productInfoState = atom({
  key: "productInfo",
  default: {
    currentPrice: "252,000원",
    productNameEn: "Nike SB Dunk Low Pro Chicago",
    productNameKr: "나이키 SB 덩크 로우 프로 시카고",
    size: 230,
    recentDeal: "301,000원",
    releasePrice: "$190 (약 263,100원)",
    modelCode: "BQ6817-600",
    releaseDate: "22/02/06",
    color: "Varsity Red/White-Varsity Red-Black",
  },
});

export const transactionHistoryState = atom({
  key: "transaction",
  default: [
    { option: 265, price: "304,000원", date: "24/04/19" },
    { option: 265, price: "304,000원", date: "24/04/19" },
    { option: 265, price: "304,000원", date: "24/04/19" },
    { option: 265, price: "304,000원", date: "24/04/19" },
    { option: 265, price: "304,000원", date: "24/04/19" },
  ],
});

export const saleHistoryState = atom({
  key: "sale",
  default: [
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
  ],
});

export const purchaseHistoryState = atom({
  key: "purchase",
  default: [
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
    { option: 265, price: "304,000원", amount: 1 },
  ],
});

export const isTransactionState = atom({
  key: "isTransaction",
  default: true,
});

export const isSaleState = atom({
  key: "isSale",
  default: false,
});

export const isPurchaseState = atom({
  key: "isPurchase",
  default: false,
});
