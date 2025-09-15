import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";

// 상단 3개
import SalesByYearChart from "../components/charts/SalesByYearChart";
import SalesByPromotionChart from "../components/charts/SalesByPromotionChart";
import SalesByChannelChart from "../components/charts/SalesByChannelChart";

// 중단 작은 카드 4개
import TotalGainsChart from "../components/charts/TotalGainsChart";
import NetGainsChart from "../components/charts/NetGainsChart";
import TransactionsChart from "../components/charts/TransactionsChart";
import CustomersChart from "../components/charts/CustomersChart";

// 중단 큰 차트
import GoalChart from "../components/charts/GoalChart";

// 하단 2개
import SalesByRegionChart from "../components/charts/SalesByRegionChart";
import YearlyDistributionChart from "../components/charts/YearlyDistributionChart";

function Dashboard() {
    const [currentTab, setCurrentTab] = useState("전체 현황");

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            {/* 네비게이션 바 */}
            <div className="bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-6">
                    <Navbar onTabChange={setCurrentTab} />
                </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {currentTab === "전체 현황" && (
                    <div className="space-y-8">
                        {/* 상단 3개 */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    연도별 매출금액 및 이익률
                                </h2>
                                <SalesByYearChart />
                            </div>
                            <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    프로모션 별 매출
                                </h2>
                                <SalesByPromotionChart />
                            </div>
                            <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    채널 별 매출
                                </h2>
                                <SalesByChannelChart />
                            </div>
                        </div>

                        {/* 중단 */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* 카드 4개 */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                    <TotalGainsChart />
                                </div>
                                <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                    <NetGainsChart />
                                </div>
                                <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                    <TransactionsChart />
                                </div>
                                <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                    <CustomersChart />
                                </div>
                            </div>
                            {/* 목표매출 달성현황 */}
                            <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    목표매출 달성현황
                                </h2>
                                <GoalChart />
                            </div>
                        </div>

                        {/* 하단 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    권역별 매출
                                </h2>
                                <SalesByRegionChart />
                            </div>
                            <div className="bg-gray-800 rounded-xl shadow-md p-4">
                                <h2 className="text-sm font-semibold text-gray-300 mb-2">
                                    연도별 매출 분류
                                </h2>
                                <YearlyDistributionChart />
                            </div>
                        </div>
                    </div>
                )}

                {/* 다른 탭 자리 */}
                {currentTab === "연도별 현황" && (
                    <div className="text-center text-gray-400 py-20">
                        📊 연도별 현황 페이지 (구현 예정)
                    </div>
                )}
                {currentTab === "분류별 현황" && (
                    <div className="text-center text-gray-400 py-20">
                        📊 분류별 현황 페이지 (구현 예정)
                    </div>
                )}
                {currentTab === "지역별 현황" && (
                    <div className="text-center text-gray-400 py-20">
                        📊 지역별 현황 페이지 (구현 예정)
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
