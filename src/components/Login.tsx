import React from 'react';
import { Globe, Bot, Brain, Landmark, ArrowRight } from 'lucide-react';
import { QinHanLogo } from './QinHanLogo';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#0B0C10] text-white font-sans overflow-hidden relative">
      {/* Top right language selector */}
      <div className="absolute top-6 right-6 z-10">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1A1B20] border border-[#2A2B30] rounded-full text-sm text-gray-300 hover:text-white transition-colors">
          <Globe size={14} /> 中文
        </button>
      </div>

      {/* Left Pane */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12 relative hidden md:flex">
        <div className="max-w-md w-full">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">尚书台</h1>
          <h2 className="text-3xl text-gray-300 mb-6 tracking-tight">多智能体协作信息平台</h2>
          
          <div className="text-gray-500 text-sm leading-relaxed mb-12">
            <p>基于 OpenClaw 赋能</p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1A1B20] flex items-center justify-center text-blue-400">
                <Bot size={20} />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-200">多智能体团队</div>
                <div className="text-xs text-gray-500 mt-0.5">智能体自主协作</div>
              </div>
            </div>

            <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1A1B20] flex items-center justify-center text-pink-400">
                <Brain size={20} />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-200">持久化记忆</div>
                <div className="text-xs text-gray-500 mt-0.5">灵魂、记忆与自我进化</div>
              </div>
            </div>

            <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1A1B20] flex items-center justify-center text-gray-300">
                <Landmark size={20} />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-200">24 小时看门狗</div>
                <div className="text-xs text-gray-500 mt-0.5">全天候待命干活</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane */}
      <div className="w-full lg:w-[480px] lg:border-l border-[#2A2B30] bg-[#0B0C10] flex flex-col justify-center px-8 lg:px-16 relative h-full">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <QinHanLogo className="w-8 h-8 text-lg" />
            <span className="font-semibold text-xl tracking-tight">尚书台</span>
          </div>

          <h2 className="text-2xl font-bold mb-2">登录</h2>
          <p className="text-sm text-gray-500 mb-8">欢迎回来，请登录继续。</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div>
              <label className="block text-sm text-gray-400 mb-2">用户名</label>
              <input 
                type="text" 
                placeholder="请输入用户名" 
                className="w-full bg-transparent border border-[#2A2B30] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">密码</label>
              <input 
                type="password" 
                placeholder="请输入密码" 
                className="w-full bg-transparent border border-[#2A2B30] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black rounded-lg py-3 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-2"
            >
              登录 <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            还没有账号？ <a href="#" className="text-gray-300 hover:text-white transition-colors">去注册</a>
          </div>
        </div>
      </div>
    </div>
  );
}
