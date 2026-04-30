import React from 'react';
import { 
  BookOpen, Target, Layout, ClipboardList, 
  MapPin, ShoppingBag, Users, GraduationCap, Sparkles 
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false, isNew = false }) => (
  <div className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all border-r-4 ${
    active ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'text-gray-500 border-transparent hover:bg-gray-50'
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={18} strokeWidth={active ? 2.5 : 2} />
      <span className={`text-[13px] ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </div>
    {isNew && (
      <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded italic">NEW</span>
    )}
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-[240px] h-screen bg-white border-r border-gray-200 sticky top-0 overflow-y-auto no-scrollbar hidden lg:block">
      <div className="py-4">
        <div className="px-4 mb-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Learn Online</p>
        </div>
        <SidebarItem icon={BookOpen} label="Study" />
        <SidebarItem icon={Target} label="PI" isNew={true} />

        <div className="px-4 mt-6 mb-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Study Packs</p>
        </div>
        <SidebarItem icon={Layout} label="Batches" active={true} />
        <SidebarItem icon={ClipboardList} label="Test Series" />

        <div className="px-4 mt-6 mb-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Offline</p>
        </div>
        <SidebarItem icon={MapPin} label="PW Centres" />

        <div className="px-4 mt-6 mb-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore PW</p>
        </div>
        <SidebarItem icon={ShoppingBag} label="PW Store" />
        <SidebarItem icon={Users} label="VP RP" />
        <SidebarItem icon={Users} label="Become Our Partner" />
        <SidebarItem icon={GraduationCap} label="Online Degree" isNew={true} />
        <SidebarItem icon={Sparkles} label="Upskilling" />
      </div>
    </aside>
  );
};

export default Sidebar;