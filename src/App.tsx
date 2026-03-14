import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { AgentProfile } from './components/AgentProfile';
import { AgentPlaza } from './components/AgentPlaza';
import { CreateAgent } from './components/CreateAgent';
import { Login } from './components/Login';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    if (currentView === 'dashboard') return <Dashboard />;
    if (currentView === 'plaza') return <AgentPlaza />;
    if (currentView === 'create') return <CreateAgent />;
    if (currentView.startsWith('agent-')) {
      const agentName = currentView.replace('agent-', '');
      return <AgentProfile agentName={agentName} />;
    }
    return <Dashboard />;
  };

  return (
    <div className="flex h-screen w-full bg-[#0B0C10] overflow-hidden font-sans relative">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          currentView={currentView} 
          setCurrentView={handleViewChange} 
          onLogout={() => setIsAuthenticated(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[#2A2B30] bg-[#141518]">
          <span className="font-semibold text-white">尚书台</span>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
