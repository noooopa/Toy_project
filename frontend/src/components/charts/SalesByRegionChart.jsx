import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getSalesByRegion } from "../../service/api";

const SalesByRegionChart = () => {
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSalesByRegion();
                setCategories(res.map((row) => row.region));
                setValues(res.map((row) => row.total_sales));
            } catch (err) {
                console.error("권역별 매출 데이터 불러오기 실패:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartOptions = {
        chart: {
            type: "bar",
            background: "transparent",
            toolbar: { show: false },
        },
        theme: { mode: "dark" },
        plotOptions: {
            bar: { horizontal: false, columnWidth: "55%", borderRadius: 6 },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories,
            labels: { style: { colors: "#9CA3AF", fontSize: "12px" } },
        },
        yaxis: {
            labels: {
                style: { colors: "#9CA3AF" },
                formatter: (val) => val.toLocaleString(),
            },
        },
        grid: { borderColor: "#374151" },
        colors: ["#00c5dc"], // 시안 블루
        tooltip: {
            theme: "dark",
            y: { formatter: (val) => val.toLocaleString() },
        },
        legend: { labels: { colors: "#D1D5DB" } },
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#00c5dc] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-4 text-[#00c5dc]">권역별 매출</strong>
            <Chart
                options={chartOptions}
                series={[{ name: "매출", data: values }]}
                type="bar"
                height={300}
            />
        </div>
    );
};

export default SalesByRegionChart;
