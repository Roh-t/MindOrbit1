import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import BatchDetails from './BatchDetails';



const Home = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar - Fixed Left */}
      <Sidebar />

      {/* Main Container - Scrollable Right */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        
        <main className="p-6">
          {/* This is where your previous BatchDetails (Grid with Course Card) goes */}
          <BatchDetails />
        </main>
      </div>
    </div>
  );
};

export default Home;