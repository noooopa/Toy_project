import React from "react";
import { Bell } from "lucide-react"; // 알림 아이콘

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-3 bg-gray-800 shadow-md">
            {/* 왼쪽: 제목 */}
            <h1 className="text-xl font-bold text-white">📊 Dashboard</h1>

            {/* 오른쪽: 알림 + 프로필 */}
            <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-white">
                    <Bell size={20} />
                </button>
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    U
                </div>
            </div>
        </header>
    );
};

export default Header;
