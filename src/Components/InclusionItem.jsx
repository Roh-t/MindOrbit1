import React from 'react';

const InclusionItem = ({ title, iconBg = "bg-red-500" }) => (
  <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-sm transition-all min-w-[100px]">
    <div className={`w-8 h-8 rounded-full mb-2 ${iconBg} flex items-center justify-center text-white text-[10px]`}>
       {/* Placeholder for icons */}
       <div className="w-4 h-4 border-2 border-white rounded-sm" />
    </div>
    <span className="text-[10px] font-bold text-gray-700 text-center uppercase leading-tight">{title}</span>
  </div>
);

export default InclusionItem;