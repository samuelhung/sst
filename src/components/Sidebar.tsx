import React from 'react';
import { LayoutGrid, Home, Plus, ChevronLeft, Sun, Globe, LogOut, User } from 'lucide-react';
import { QinHanLogo } from './QinHanLogo';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onLogout: () => void;
}

export function Sidebar({ currentView, setCurrentView, onLogout }: SidebarProps) {
  const navItems = [
    { id: 'plaza', icon: <LayoutGrid size={18} />, label: '广场' },
    { id: 'dashboard', icon: <Home size={18} />, label: '仪表盘' },
  ];

  const companyAgents = [
    '海老豹2026', '后端RD', '小云', '小智', '测试', '土豆', '蹦蹦', '小风', '市场分析专家', 'joyes', '123', '产品经理B'
  ];

  return (
    <div className="w-64 bg-[#141518] border-r border-[#2A2B30] flex flex-col h-full text-gray-300">
      {/* Header */}
      <div className="p-4 flex items-center gap-2 border-b border-[#2A2B30]">
        <QinHanLogo className="w-6 h-6 text-xs" />
        <span className="font-semibold text-white">尚书台</span>
      </div>

      <div className="p-4 text-xs text-gray-500 font-medium">
        我的公司
      </div>

      {/* Main Nav */}
      <div className="px-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              currentView === item.id ? 'bg-[#2A2B30] text-white' : 'hover:bg-[#1A1B20]'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div className="px-4 pt-6 pb-2 text-xs text-gray-500 font-medium">
        公司共用
      </div>

      {/* Agents List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-1">
        {companyAgents.map((agent, index) => (
          <button
            key={index}
            onClick={() => setCurrentView(`agent-${agent}`)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              currentView === `agent-${agent}` ? 'bg-[#2A2B30] text-white' : 'hover:bg-[#1A1B20]'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${currentView === `agent-${agent}` ? 'bg-white' : 'bg-gray-500'}`}></div>
            <span className="truncate">{agent}</span>
          </button>
        ))}
      </div>

      {/* Create Button */}
      <div className="p-2 border-t border-[#2A2B30]">
        <button 
          onClick={() => setCurrentView('create')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-[#1A1B20] transition-colors"
        >
          <Plus size={18} />
          新建数字员工
        </button>
      </div>

      {/* Footer Settings */}
      <div className="p-4 border-t border-[#2A2B30] flex flex-col gap-4">
        <div className="flex items-center justify-between text-gray-400">
          <button className="hover:text-white"><ChevronLeft size={18} /></button>
          <div className="flex items-center gap-3">
            <button className="hover:text-white"><Sun size={18} /></button>
            <button className="hover:text-white flex items-center gap-1 text-xs font-medium">
              <Globe size={16} /> EN
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2A2B30] flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white font-medium leading-tight">GitHubDaily</span>
              <span className="text-xs text-gray-500">成员</span>
            </div>
          </div>
          <button onClick={onLogout} className="text-gray-400 hover:text-white">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
