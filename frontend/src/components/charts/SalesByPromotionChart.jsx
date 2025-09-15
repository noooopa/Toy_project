import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getSalesByPromotion } from "../../service/api";

const SalesByPromotionChart = () => {
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSalesByPromotion();
                setLabels(res.map((row) => row.promotion_name));
                setValues(res.map((row) => row.total_sales));
            } catch (err) {
                console.error("프로모션별 매출 데이터 불러오기 실패:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartOptions = {
        chart: { type: "donut", background: "transparent" },
        theme: { mode: "dark" },
        labels,
        legend: {
            position: "bottom",
            labels: { colors: "#D1D5DB" },
        },
        grid: { borderColor: "#374151" },
        tooltip: {
            theme: "dark",
            y: { formatter: (val) => val.toLocaleString() },
        },
        colors: ["#734CEA", "#34bfa3", "#f4516c", "#00c5dc", "#ffb822"],
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#734CEA] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-4 text-[#734CEA]">프로모션별 매출</strong>
            <Chart options={chartOptions} series={values} type="donut" height={300} />
        </div>
    );
};

export default SalesByPromotionChart;
