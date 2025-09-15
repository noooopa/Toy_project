import React, { useState } from "react";

const tabs = ["전체 현황", "연도별 현황", "분류별 현황", "지역별 현황"];

function Navbar({ onTabChange }) {
    const [activeTab, setActiveTab] = useState("전체 현황");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <nav className="bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-14">
                {/* 왼쪽: 프로젝트 제목 */}
                <h1 className="text-lg font-bold text-white">Toy Project</h1>

                {/* 오른쪽: 탭 메뉴 */}
                <div className="flex space-x-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`text-sm font-medium transition-colors ${
                                activeTab === tab
                                    ? "text-blue-400 border-b-2 border-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
