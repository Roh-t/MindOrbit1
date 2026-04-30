import React from 'react';
import { BookOpen, History, MessageSquare, Bookmark, Heart } from 'lucide-react';

const LearningCard = ({ title, description, icon: Icon, bgColor, iconBg }) => (
  <div className={`p-6 rounded-xl ${bgColor} flex flex-col gap-4 cursor-pointer hover:opacity-90 transition-opacity`}>
    <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center shadow-sm`}>
      <Icon size={20} className="text-gray-700" />
    </div>
    <div>
      <h3 className="font-bold text-gray-800 text-base mb-1">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const DashboardSections = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 md:p-8 flex flex-col gap-6 font-sans">
      
      {/* My Learning Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-6xl w-full mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">My Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LearningCard 
            title="My Batches"
            description="View list of the batches in which you are enrolled"
            icon={BookOpen}
            bgColor="bg-[#eff2ff]" // Light Blue/Purple
            iconBg="bg-white"
          />
          <LearningCard 
            title="Recent Learning"
            description="View your past learning history"
            icon={History}
            bgColor="bg-[#fff1e2]" // Light Orange
            iconBg="bg-white"
          />
          <LearningCard 
            title="My Doubts"
            description="View the list of your asked doubts in the lectures"
            icon={MessageSquare}
            bgColor="bg-[#e9f7f2]" // Light Green
            iconBg="bg-white"
          />
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-6xl w-full mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* White Bordered Card */}
          <div className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-[#eef2ff] rounded-full flex items-center justify-center">
               <Bookmark size={22} className="text-blue-600 fill-blue-100" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-base mb-1">Bookmarks</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                View the list of your saved questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="max-w-6xl w-full mx-auto mt-4 px-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 mb-2">
          Padhlo chahe kahi se Manzil milegi yahi se!
        </h2>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Heart size={14} className="text-rose-500 fill-rose-500" />
          <span>From PhysicsWallah</span>
        </div>
      </div>

    </div>
  );
};

export default DashboardSections;