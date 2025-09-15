import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getNetGains } from "../../service/api";

const NetGainsChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getNetGains();
                setData(res.map((row) => row.net_gain));
            } catch (err) {
                console.error("순이익 데이터 불러오기 실패:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartOptions = {
        chart: {
            type: "line",
            height: 140,
            sparkline: { enabled: true },
            background: "transparent",
        },
        theme: { mode: "dark" },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        tooltip: { x: { show: false } },
        colors: ["#34bfa3"],
        title: {
            text:
                data.length > 0
                    ? data.reduce((a, b) => a + b, 0).toLocaleString()
                    : "0",
            style: { fontSize: "22px", color: "#34bfa3" },
        },
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[140px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#34bfa3] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-2 text-[#34bfa3]">순이익</strong>
            <Chart
                options={chartOptions}
                series={[{ data }]}
                type="line"
                height={140}
            />
        </div>
    );
};

export default NetGainsChart;
