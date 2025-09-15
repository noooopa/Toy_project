import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000", // FastAPI 서버 URL
    headers: {
        "Content-Type": "application/json",
    },
});

// ======================
// Sales 관련 API 함수
// ======================

// 총 이익
export const getTotalGains = async () => {
    const res = await api.get("/sales/total_gains/");
    return res.data;
};

// 순이익
export const getNetGains = async () => {
    const res = await api.get("/sales/net_gains/");
    return res.data;
};

// 총 고객수
export const getCustomers = async () => {
    const res = await api.get("/sales/customers/");
    return res.data;
};

// 권역별 매출
export const getSalesByRegion = async () => {
    const res = await api.get("/sales/region/");
    return res.data;
};

// 프로모션별 매출
export const getSalesByPromotion = async () => {
    const res = await api.get("/sales/promotion/");
    return res.data;
};

// 연도별 매출
export const getSalesByYear = async () => {
    const res = await api.get("/sales/year/");
    return res.data;
};

// 상품별 매출
export const getSalesByProduct = async () => {
    const res = await api.get("/sales/product/");
    return res.data;
};

// 채널별 매출
export const getSalesByChannel = async () => {
    const res = await api.get("/sales/channel/");
    return res.data;
};

export default api;
