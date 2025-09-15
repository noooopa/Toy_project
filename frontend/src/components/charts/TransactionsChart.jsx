// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getTransactions } from "../../service/api"; // 📌 새로운 API 필요
//
// const TransactionsChart = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await getTransactions();
//                 // API 응답 예시: [{ transactions: 123 }, { transactions: 456 }]
//                 setData(res.map((row) => row.transactions));
//             } catch (err) {
//                 console.error("거래건수 데이터 불러오기 실패:", err);
//                 setData([100, 120, 90, 150]); // 샘플 데이터
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);
//
//     const chartOptions = {
//         chart: { type: "line", height: 140, sparkline: { enabled: true }, background: "transparent" },
//         theme: { mode: "dark" },
//         stroke: { curve: "smooth", width: 2 },
//         markers: { size: 0 },
//         tooltip: { x: { show: false } },
//         colors: ["#ef4444"], // 빨강
//         title: {
//             text: data.length > 0 ? data.reduce((a, b) => a + b, 0).toLocaleString() : "0",
//             style: { fontSize: "22px", color: "#ef4444" },
//         },
//     };
//
//     if (loading) {
//         return <div className="flex items-center justify-center h-[140px]">
//             <span className="animate-spin w-6 h-6 border-4 border-[#ef4444] border-t-transparent rounded-full"></span>
//         </div>;
//     }
//
//     return (
//         <div>
//             <strong className="block mb-2 text-[#ef4444]">거래건수</strong>
//             <Chart options={chartOptions} series={[{ data }]} type="line" height={140} />
//         </div>
//     );
// };
//
// export default TransactionsChart;


// TransactionsChart.jsx (더미 데이터 버전)
import React, { useState } from "react";
import Chart from "react-apexcharts";

const TransactionsChart = () => {
    const [data] = useState([100, 120, 90, 150]);

    const chartOptions = {
        chart: { type: "line", height: 140, sparkline: { enabled: true }, background: "transparent" },
        theme: { mode: "dark" },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        tooltip: { x: { show: false } },
        colors: ["#ef4444"],
        title: {
            text: data.reduce((a, b) => a + b, 0).toLocaleString(),
            style: { fontSize: "22px", color: "#ef4444" },
        },
    };

    return (
        <div>
            <strong className="block mb-2 text-[#ef4444]">거래건수</strong>
            <Chart options={chartOptions} series={[{ data }]} type="line" height={140} />
        </div>
    );
};

export default TransactionsChart;
