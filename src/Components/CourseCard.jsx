import React from 'react';
import { Info, Percent, GraduationCap } from 'lucide-react';

const CourseCard = ({ 
  title = "NIRMAAN 2029",
  subtitle = "COMPUTER SCIENCE & IT",
  description = "Targeted Batch for GATE Aspirants",
  language = "Hinglish",
  price = "32000",
  originalPrice = "65247",
  discount = "50.96% OFF",
  imageUrl = "https://placehold.co/400x400/png" // Replace with actual image URL
}) => {
  return (
    <div className="max-w-[400px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 font-sans">
      
      {/* Top Section - Banner */}
      <div className="relative bg-[#D1FAE5] p-6 flex justify-between items-center h-48 overflow-hidden">
        <div className="z-10">
          <h2 className="text-3xl font-black text-[#064E3B] leading-tight tracking-tight">
            {title.split(' ')[0]} <br /> {title.split(' ')[1]}
          </h2>
          <div className="mt-4 bg-[#10B981] text-white text-[10px] md:text-xs font-bold px-3 py-2 rounded-lg uppercase tracking-wider">
            {subtitle}
          </div>
        </div>
        
        {/* Person Image */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-end">
           <img 
            src={imageUrl} 
            alt="Instructor" 
            className="h-[95%] object-contain"
           />
        </div>
      </div>

      {/* Middle Section - Info */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
          <GraduationCap size={20} className="text-gray-500" />
          <span>{description}</span>
        </div>
        <div className="bg-gray-50 text-[#6366F1] px-3 py-1 rounded-md text-sm font-semibold border border-gray-100">
          {language}
        </div>
      </div>

      {/* Bottom Section - Pricing & CTA */}
      <div className="bg-[#F9FAFB] p-4 flex items-center justify-between border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#4F46E5]">₹{price}</span>
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
            <Info size={16} className="text-gray-400 cursor-pointer" />
          </div>
          
          <div className="mt-2 inline-flex items-center gap-1 bg-[#E1F3EB] text-[#065F46] px-2 py-1 rounded-md text-[11px] font-bold">
            <div className="bg-white rounded-full p-0.5 border border-[#065F46]">
                <Percent size={8} />
            </div>
            {discount}
          </div>
        </div>

        <button className="bg-[#5046E5] hover:bg-[#4338CA] text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-100 uppercase text-sm tracking-wide">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;