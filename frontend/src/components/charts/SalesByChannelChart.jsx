import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getSalesByChannel } from "../../service/api";

const SalesByChannelChart = () => {
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSalesByChannel();
                setLabels(res.map((row) => row.channel));
                setValues(res.map((row) => row.total_sales));
            } catch (err) {
                console.error("채널별 매출 데이터 불러오기 실패:", err);
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
        colors: ["#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"], // 보라, 초록, 노랑, 빨강, 파랑
        grid: { borderColor: "#374151" },
        tooltip: {
            theme: "dark",
            y: { formatter: (val) => val.toLocaleString() },
        },
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#8B5CF6] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-4 text-[#8B5CF6]">채널별 매출</strong>
            <Chart options={chartOptions} series={values} type="donut" height={300} />
        </div>
    );
};

export default SalesByChannelChart;
