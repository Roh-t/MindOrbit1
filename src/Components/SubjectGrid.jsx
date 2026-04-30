import React from 'react';
import { 
  Megaphone, Package, Layout, Cpu, 
  Wrench, Settings, Zap, FlaskConical,
  Monitor, Calculator, Database, Binary,
  Code, Network, Terminal, Share2,
  Table, BookOpen, Layers, Braces
} from 'lucide-react';

const SubjectCard = ({ title, subtitle, icon: Icon, iconColor }) => {
  return (
    <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className={`p-3 rounded-lg mr-4 ${iconColor || 'bg-blue-50 text-blue-500'}`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="overflow-hidden">
        <h3 className="font-semibold text-gray-800 text-sm truncate group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5 font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const SubjectGrid = () => {
  const subjects = [
    { title: 'Notices', subtitle: '3 Chapters', icon: Megaphone, color: 'bg-blue-50 text-blue-500' },
    { title: 'Starter Kit', subtitle: '4 Chapters', icon: Package, color: 'bg-pink-50 text-pink-500' },
    { title: 'Introduction To...', icon: Layout, color: 'bg-gray-50 text-gray-500' },
    { title: 'Prompt Engineer...', icon: Cpu, color: 'bg-orange-50 text-orange-500' },
    { title: 'AI Tools', icon: Settings, color: 'bg-indigo-50 text-indigo-500' },
    { title: 'Microsoft Copil...', icon: Share2, color: 'bg-blue-100 text-blue-600' },
    { title: 'Engineering Phy...', icon: Zap, color: 'bg-amber-50 text-amber-500' },
    { title: 'Engineering Che...', icon: FlaskConical, color: 'bg-emerald-50 text-emerald-500' },
    { title: 'Basics Of Compu...', icon: Monitor, color: 'bg-violet-50 text-violet-500' },
    { title: 'Engineering Mat...', icon: Calculator, color: 'bg-rose-50 text-rose-500' },
    { title: 'Basic Electrica...', icon: Zap, color: 'bg-yellow-50 text-yellow-600' },
    { title: 'Basic Electroni...', icon: Cpu, color: 'bg-cyan-50 text-cyan-600' },
    { title: 'Basic Civil Eng...', icon: Wrench, color: 'bg-stone-50 text-stone-500' },
    { title: 'Basic Mechanica...', icon: Settings, color: 'bg-gray-100 text-gray-700' },
    { title: 'Database Manage...', icon: Database, color: 'bg-blue-50 text-blue-600' },
    { title: 'Digital Logic', icon: Binary, color: 'bg-purple-50 text-purple-500' },
    { title: 'Discrete Mathem...', icon: Table, color: 'bg-indigo-50 text-indigo-600' },
    { title: 'Calculus And Op...', icon: Layers, color: 'bg-gray-50 text-gray-400' },
    { title: 'Linear Algebra', icon: Layers, color: 'bg-gray-50 text-gray-400' },
    { title: 'Probability And...', icon: FlaskConical, color: 'bg-fuchsia-50 text-fuchsia-500' },
    { title: 'Algorithms', icon: Code, color: 'bg-blue-50 text-blue-500' },
    { title: 'Computer Networ...', icon: Network, color: 'bg-sky-50 text-sky-500' },
    { title: 'C Programming', icon: Terminal, color: 'bg-slate-50 text-slate-600' },
    { title: 'Theory Of Compu...', icon: Braces, color: 'bg-indigo-50 text-indigo-400' },
    { title: 'Computer Organi...', icon: Monitor, color: 'bg-blue-50 text-blue-500' },
    { title: 'Compiler Design', icon: BookOpen, color: 'bg-pink-50 text-pink-400' },
    { title: 'Operating Syste...', icon: Settings, color: 'bg-cyan-50 text-cyan-500' },
    { title: 'Data Structure ...', icon: Layers, color: 'bg-purple-50 text-purple-400' },
    { title: 'General Aptitud...', icon: Zap, color: 'bg-rose-50 text-rose-400' },
    { title: 'Verbal Aptitude', icon: BookOpen, color: 'bg-pink-50 text-pink-400' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10 flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Subjects</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">
            Select your subjects & start learning
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <SubjectCard 
              key={index}
              title={subject.title}
              subtitle={subject.subtitle}
              icon={subject.icon}
              iconColor={subject.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectGrid;