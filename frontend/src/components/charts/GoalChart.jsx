// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getGoalStatus } from "../../service/api"; // 📌 새로운 API 필요
//
// const GoalChart = () => {
//     const [series, setSeries] = useState([
//         { name: "목표 매출", data: [30, 40, 35, 50, 49, 60, 70] },
//         { name: "실제 매출", data: [20, 30, 25, 40, 39, 50, 60] },
//     ]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await getGoalStatus();
//                 // API 응답 예시: { target: [...], actual: [...] }
//                 setSeries([
//                     { name: "목표 매출", data: res.target },
//                     { name: "실제 매출", data: res.actual },
//                 ]);
//             } catch (err) {
//                 console.error("목표매출 달성현황 데이터 불러오기 실패:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);
//
//     const chartOptions = {
//         chart: { type: "area", background: "transparent", toolbar: { show: false } },
//         theme: { mode: "dark" },
//         dataLabels: { enabled: false },
//         stroke: { curve: "smooth", width: 2 },
//         xaxis: { categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"], labels: { style: { colors: "#9CA3AF" } } },
//         yaxis: { labels: { style: { colors: "#9CA3AF" } } },
//         grid: { borderColor: "#374151" },
//         tooltip: { theme: "dark" },
//         colors: ["#3B82F6", "#60A5FA"], // 블루 계열
//         legend: { labels: { colors: "#D1D5DB" } },
//     };
//
//     if (loading) {
//         return <div className="flex items-center justify-center h-[300px]">
//             <span className="animate-spin w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"></span>
//         </div>;
//     }
//
//     return <Chart options={chartOptions} series={series} type="area" height={300} />;
// };
//
// export default GoalChart;

// GoalChart.jsx (더미 데이터 버전)
import React, { useState } from "react";
import Chart from "react-apexcharts";

const GoalChart = () => {
    const [series] = useState([
        { name: "목표 매출", data: [30, 40, 35, 50, 49, 60, 70] },
        { name: "실제 매출", data: [20, 30, 25, 40, 39, 50, 60] },
    ]);

    const chartOptions = {
        chart: { type: "area", background: "transparent", toolbar: { show: false } },
        theme: { mode: "dark" },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2 },
        xaxis: {
            categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
            labels: { style: { colors: "#9CA3AF" } },
        },
        yaxis: { labels: { style: { colors: "#9CA3AF" } } },
        grid: { borderColor: "#374151" },
        tooltip: { theme: "dark" },
        colors: ["#3B82F6", "#60A5FA"], // 블루 계열
        legend: { labels: { colors: "#D1D5DB" } },
    };

    return <Chart options={chartOptions} series={series} type="area" height={300} />;
};

export default GoalChart;

