import React, { useState } from 'react';
import { ChevronDown, PlayCircle, Star, ArrowRight } from 'lucide-react';
import BatchInfoRow from '../Components/BatchInfoRow';
import VideoCard from '../Components/VideoCard';
import CourseCard from '../Components/CourseCard';
import InclusionItem from '../Components/InclusionItem';


const BatchDetails = () => {
  // State for collapsible sections
  const [isPlanOpen, setIsPlanOpen] = useState(true);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 px-4 md:px-8 selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Batch Information */}
        <div className="lg:col-span-8 space-y-8 animate-in fade-in duration-700">
          
          {/* Section 1: Regular Plan (Interactive Accordion) */}
          <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
            <div 
              onClick={() => setIsPlanOpen(!isPlanOpen)}
              className="p-5 bg-white flex justify-between items-center cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                <h2 className="text-xl font-extrabold text-gray-800 group-hover:text-indigo-600 transition-colors">Regular</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest">
                  Plan Details
                </span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${isPlanOpen ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isPlanOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 border-t border-gray-50">
                {/* Wrapped in a div for hover lift */}
                {['Live Lectures', 'Test Series', 'Khazana', 'Engineer\'s Kit', 'Practice Sheets', 'Regular Test', 'Doubt Solving'].map((item, index) => (
                  <div key={index} className="transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105">
                    <InclusionItem title={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: This Batch Includes (Hover Rows) */}
          <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-6">
               <Star className="text-yellow-400 fill-yellow-400" size={20} />
               <h2 className="text-xl font-extrabold text-gray-800">This Batch Includes:</h2>
            </div>
            <div className="space-y-2">
              {/* Note: I'm assuming BatchInfoRow handles its own hover, but we group them here */}
              <div className="group transition-all">
                <BatchInfoRow label="Course Duration" value="1 June 2026 - 31 December 2028" />
              </div>
              <BatchInfoRow label="Validity" value="31 March 2030" />
              <BatchInfoRow label="Subjects" value="C - Programming, Engineering Mathematics, DBMS, Data Structure, TOC, COA..." />
              <BatchInfoRow label="Mentorship" value="One-to-one emotional well-being support by PW Prerna counselors" />
            </div>
          </div>

          {/* Section 3: Demo Videos (Scroll Hint) */}
          <div className="space-y-4">
            <div className="flex justify-between items-end px-2">
              <div>
                <h2 className="text-xl font-extrabold text-gray-800">Demo Videos</h2>
                <p className="text-xs text-gray-400 mt-1">Get a glimpse of our teaching style</p>
              </div>
              <button className="group flex items-center gap-2 text-sm font-bold text-indigo-600 bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100 hover:bg-indigo-600 hover:text-white transition-all duration-300 active:scale-95">
                View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex gap-5 overflow-x-auto pb-6 pt-2 no-scrollbar px-2 mask-gradient">
              <div className="min-w-[280px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <VideoCard title="Mitra Music" date="23 Feb, 2026" time="01:11 PM" />
              </div>
              <div className="min-w-[280px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <VideoCard title="Doubt Resolution" date="23 Feb, 2026" time="01:10 PM" />
              </div>
              <div className="min-w-[280px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <VideoCard title="App Navigation" date="23 Feb, 2026" time="01:09 PM" />
              </div>
            </div>
          </div>

          {/* Section 4: Other Details (Modern Clean Look) */}
          <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
            
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PlayCircle size={24} className="text-indigo-300" />
              Other Important Details
            </h2>
            
            <div className="space-y-6 relative z-10">
              <p className="text-indigo-100 leading-relaxed text-sm">
                01. This course is meticulously designed for candidates preparing for the <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">GATE 2029</span> examination alongside their college semesters.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-indigo-300 mb-2 text-sm uppercase tracking-wider">Fundamental-Features</h4>
                  <ul className="space-y-2 text-xs text-indigo-100">
                    <li className="flex items-center gap-2">• 1st Year Semester Wise Classes</li>
                    <li className="flex items-center gap-2">• GATE Classes & Khazana</li>
                    <li className="flex items-center gap-2">• Engineer's Kit (Drafter, Calculator)</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-indigo-300 mb-2 text-sm uppercase tracking-wider">Batch Add-ons</h4>
                  <ul className="space-y-2 text-xs text-indigo-100">
                    <li className="flex items-center gap-2">• Practice Sheets/DPPs</li>
                    <li className="flex items-center gap-2">• Personalized Mentorship</li>
                    <li className="flex items-center gap-2">• Recorded Semester Lectures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Course Card */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-24 transform transition-all duration-500 hover:rotate-1">
            <div className="relative group">
              {/* Subtle Glow behind the card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <CourseCard 
                   title="NIRMAAN 2029"
                   subtitle="COMPUTER SCIENCE & IT"
                   price="32000"
                   originalPrice="65247"
                   discount="50.96% OFF"
                />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-3">
               <div className="p-2 bg-yellow-400 rounded-full text-white">
                 <Star size={16} fill="white" />
               </div>
               <p className="text-[11px] text-yellow-800 font-medium leading-relaxed">
                 Limited Time Offer: Get extra <span className="font-bold">1000 PW Coins</span> on successful enrollment today!
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BatchDetails;