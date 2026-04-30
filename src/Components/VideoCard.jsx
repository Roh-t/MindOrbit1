import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ title, date, time }) => (
  <div className="min-w-[200px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
    <div className="relative h-28 bg-purple-900 flex items-center justify-center">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
        <Play size={20} className="text-white fill-white ml-1" />
      </div>
      <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-0.5 rounded text-[10px] text-white">Starter Kit</div>
    </div>
    <div className="p-3">
       <div className="flex justify-between text-[10px] text-gray-400 font-medium mb-1">
          <span>{date}</span>
          <span>{time}</span>
       </div>
       <h4 className="text-xs font-bold text-gray-800">{title}</h4>
    </div>
  </div>
);

export default VideoCard;