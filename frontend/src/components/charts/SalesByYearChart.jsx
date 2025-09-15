import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getSalesByYear } from "../../service/api";

const SalesByYearChart = () => {
    const [years, setYears] = useState([]);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSalesByYear();
                setYears(res.map((row) => row.year));
                setValues(res.map((row) => row.total_sales));
            } catch (err) {
                console.error("연도별 매출 데이터 불러오기 실패:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartOptions = {
        chart: {
            type: "line",
            background: "transparent",
            toolbar: { show: false },
        },
        theme: { mode: "dark" },
        stroke: { curve: "smooth", width: 3 },
        dataLabels: { enabled: false },
        xaxis: {
            categories: years,
            labels: { style: { colors: "#9CA3AF" } },
            title: { text: "연도", style: { color: "#9CA3AF" } },
        },
        yaxis: {
            labels: {
                style: { colors: "#9CA3AF" },
                formatter: (val) => val.toLocaleString(),
            },
            title: { text: "매출액", style: { color: "#9CA3AF" } },
        },
        grid: { borderColor: "#374151" },
        colors: ["#ffb822"],
        tooltip: {
            theme: "dark",
            y: { formatter: (val) => val.toLocaleString() },
        },
        legend: { labels: { colors: "#D1D5DB" } },
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#ffb822] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-4 text-[#ffb822]">연도별 매출</strong>
            <Chart
                options={chartOptions}
                series={[{ name: "매출", data: values }]}
                type="line"
                height={300}
            />
        </div>
    );
};

export default SalesByYearChart;
