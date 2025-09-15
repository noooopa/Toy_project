// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getYearlyDistribution } from "../../service/api"; // 📌 새로운 API 필요
//
// const YearlyDistributionChart = () => {
//     const [series, setSeries] = useState([
//         {
//             name: "매출 분포",
//             data: [
//                 [1, 30, 40],
//                 [2, 20, 50],
//                 [3, 35, 60],
//                 [4, 40, 70],
//                 [5, 50, 90],
//             ],
//         },
//     ]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await getYearlyDistribution();
//                 // API 응답 예시: [{ x: 1, y: 30, z: 40 }]
//                 setSeries([
//                     {
//                         name: "매출 분포",
//                         data: res.map((row) => [row.x, row.y, row.z]),
//                     },
//                 ]);
//             } catch (err) {
//                 console.error("연도별 매출 분류 데이터 불러오기 실패:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);
//
//     const chartOptions = {
//         chart: { type: "bubble", background: "transparent", toolbar: { show: false } },
//         theme: { mode: "dark" },
//         xaxis: { tickAmount: 12, labels: { style: { colors: "#9CA3AF" } } },
//         yaxis: { labels: { style: { colors: "#9CA3AF" } } },
//         grid: { borderColor: "#374151" },
//         tooltip: { theme: "dark" },
//         colors: ["#EC4899", "#10B981", "#3B82F6"], // 핑크, 초록, 파랑
//         legend: { labels: { colors: "#D1D5DB" } },
//     };
//
//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-[300px]">
//                 <span className="animate-spin w-6 h-6 border-4 border-pink-500 border-t-transparent rounded-full"></span>
//             </div>
//         );
//     }
//
//     return <Chart options={chartOptions} series={series} type="bubble" height={300} />;
// };
//
// export default YearlyDistributionChart;

// YearlyDistributionChart.jsx (더미 데이터 버전)
import React, { useState } from "react";
import Chart from "react-apexcharts";

const YearlyDistributionChart = () => {
    const [series] = useState([
        {
            name: "매출 분포",
            data: [
                [1, 30, 40],
                [2, 20, 50],
                [3, 35, 60],
                [4, 40, 70],
                [5, 50, 90],
            ],
        },
    ]);

    const chartOptions = {
        chart: { type: "bubble", background: "transparent", toolbar: { show: false } },
        theme: { mode: "dark" },
        xaxis: { tickAmount: 12, labels: { style: { colors: "#9CA3AF" } } },
        yaxis: { labels: { style: { colors: "#9CA3AF" } } },
        grid: { borderColor: "#374151" },
        tooltip: { theme: "dark" },
        colors: ["#EC4899", "#10B981", "#3B82F6"], // 핑크, 초록, 파랑
        legend: { labels: { colors: "#D1D5DB" } },
    };

    return <Chart options={chartOptions} series={series} type="bubble" height={300} />;
};

export default YearlyDistributionChart;

