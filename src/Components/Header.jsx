import React from 'react';
import { ArrowLeft, Share2, Megaphone } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      {/* Top Utility Bar */}
      <div className="flex justify-between items-center px-6 py-2 border-b border-gray-100">
        <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2 border border-blue-100">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">XP</div>
          <span className="text-sm font-bold text-blue-700">0</span>
        </div>
      </div>

      {/* Purple Course Banner */}
      <div className="mx-6 mt-6 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] p-8">
        <h1 className="text-white text-3xl font-bold tracking-tight">
          NIRMAAN GATE 2029 - Computer Science & IT
        </h1>
      </div>

      {/* Tabs and Actions */}
      <div className="mx-6 mt-4 flex flex-wrap items-center justify-between border-b border-gray-200">
        <div className="flex gap-8">
  {['Description', 'All Classes', 'Offerings', 'Tests'].map((tab) => (
    <div 
      key={tab}
      onClick={() => {
        if (tab === "All Classes") {
          navigate("/all-classes"); // 👈 your route
        }
      }}
      className="pb-3 text-sm font-bold cursor-pointer text-gray-500 hover:text-gray-800"
    >
      {tab === 'Offerings' && <span className="mr-1 text-yellow-500">⭐</span>}
      {tab}
    </div>
  ))}
</div>

        <div className="flex gap-3 pb-2">
          <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50">
            <Share2 size={14} /> Share Batch
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50">
            <Megaphone size={14} /> Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;