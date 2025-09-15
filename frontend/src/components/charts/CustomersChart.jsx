import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getCustomers } from "../../service/api";

const CustomersChart = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCustomers();
                if (res.length > 0) setCount(res[0].total_customers);
            } catch (err) {
                console.error("고객 수 데이터 불러오기 실패:", err);
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
        tooltip: { enabled: false },
        colors: ["#f4516c"],
        title: {
            text: count ? count.toLocaleString() : "0",
            style: { fontSize: "22px", color: "#f4516c" },
        },
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[140px]">
                <span className="animate-spin w-6 h-6 border-4 border-[#f4516c] border-t-transparent rounded-full"></span>
            </div>
        );
    }

    return (
        <div>
            <strong className="block mb-2 text-[#f4516c]">총 고객수</strong>
            <Chart
                options={chartOptions}
                series={[{ data: [count] }]}
                type="line"
                height={140}
            />
        </div>
    );
};

export default CustomersChart;
