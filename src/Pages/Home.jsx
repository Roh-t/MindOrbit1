import React from 'react';
import Header from '../Components/Header';
import BatchDetails from './BatchDetails';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden selection:bg-indigo-100">
      
      {/* Sidebar - Fixed Left with subtle right shadow */}
      <div className="hidden lg:block z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <Sidebar />
      </div>

      {/* Main Container - Scrollable Right */}
      <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden transition-all duration-300 scroll-smooth custom-scrollbar">
        
        {/* Sticky Top Bar (Optional: if you want the 'Back/XP' bar to stay while scrolling) */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md">
            <Header />
        </div>
        
        {/* Main Content with Entry Animation */}
        <main className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-[1400px] mx-auto">
            {/* Component content */}
            <BatchDetails />
          </div>
          
          {/* Subtle Footer or Help Widget */}
          <footer className="mt-20 pb-10 border-t border-gray-100 pt-8 flex justify-between items-center text-gray-400 text-xs">
            <p>© 2024 Physics Wallah. All rights reserved.</p>
            <div className="flex gap-4">
               <span className="hover:text-indigo-600 cursor-pointer transition-colors">Privacy Policy</span>
               <span className="hover:text-indigo-600 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </footer>
        </main>
      </div>

      {/* CSS for Interactive Look */}
      <style jsx global>{`
        /* Custom Slim Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }

        /* Entry Animation Utility */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;