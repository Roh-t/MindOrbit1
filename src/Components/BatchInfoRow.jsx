import React from 'react';
import { Star } from 'lucide-react';

const BatchInfoRow = ({ label, value }) => (
  <div className="flex gap-4 py-3 items-start border-b border-dashed border-gray-100 last:border-0">
    <div className="mt-1 bg-yellow-100 p-1.5 rounded-full">
      <Star size={14} className="text-yellow-600 fill-yellow-600" />
    </div>
    <div>
      <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm text-gray-700 mt-0.5 font-medium leading-relaxed">{value}</p>
    </div>
  </div>
);

export default BatchInfoRow;