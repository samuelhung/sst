import React from 'react';
import { Check } from 'lucide-react';

export function CreateAgent() {
  const steps = [
    { id: 1, label: '基本信息', active: true, completed: true },
    { id: 2, label: '人格设定', active: true, completed: false },
    { id: 3, label: '技能配置', active: false, completed: false },
    { id: 4, label: '权限设置', active: false, completed: false },
    { id: 5, label: '通道绑定', active: false, completed: false },
  ];

  return (
    <div className="flex-1 bg-[#0B0C10] text-white p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl font-bold mb-6 md:mb-8">新建数字员工</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between relative overflow-x-auto pb-2 md:pb-0">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#2A2B30] -z-10 min-w-[400px]"></div>
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-[#0B0C10] px-2 sm:px-4 min-w-[80px]">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
                  step.completed ? 'bg-green-500 text-black' : 
                  step.active ? 'bg-white text-black' : 'bg-[#2A2B30] text-gray-500'
                }`}>
                  {step.completed ? <Check size={14} /> : step.id}
                </div>
                <span className={`text-xs sm:text-sm text-center ${step.active ? 'text-white' : 'text-gray-500'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-4 sm:p-8">
            <h2 className="text-lg font-medium mb-6">人格与边界</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">人格设定</label>
                <textarea 
                  className="w-full h-32 bg-[#1A1B20] border border-[#2A2B30] rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 resize-none"
                  placeholder="认真负责、数据驱动、主动汇报..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">行为边界</label>
                <textarea 
                  className="w-full h-32 bg-[#1A1B20] border border-[#2A2B30] rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 resize-none"
                  placeholder="不可修改财务数据、对外沟通需经审批..."
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button className="px-4 py-2 bg-transparent border border-[#2A2B30] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#1A1B20] transition-colors">
                上一步
              </button>
              <button className="px-4 py-2 bg-[#E2E8F0] text-black rounded-lg text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
                下一步 <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </div>

          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-4 flex items-center text-sm text-gray-500">
            小 G · 模型: MiniMax-M2.5-highspeed
          </div>
        </div>
      </div>
    </div>
  );
}
