import React, { useState } from 'react';

interface CreateAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateAgentModal({ isOpen, onClose }: CreateAgentModalProps) {
  const [permission, setPermission] = useState('company');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#141518] border border-[#2A2B30] rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl">
        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">连接 OpenClaw 员工</h2>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#7C3AED] text-white">
              实验室
            </span>
          </div>
          
          <p className="text-gray-400 text-[15px] mb-8 leading-relaxed max-w-2xl">
            为您的 OpenClaw 员工提供名称和描述。LLM 模型、性格和技能在您的 OpenClaw 实例上配置。
          </p>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-[15px] text-gray-300 mb-2">
                名称 <span className="text-gray-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="例如：我的 OpenClaw 机器人"
                className="w-full bg-[#1A1B20] border border-[#2A2B30] rounded-lg px-4 py-3.5 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[15px] text-gray-300 mb-2">
                角色
              </label>
              <input 
                type="text" 
                placeholder="例如：运行在我的 Mac 上的个人助手"
                className="w-full bg-[#1A1B20] border border-[#2A2B30] rounded-lg px-4 py-3.5 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[15px] text-gray-300 mb-3">
                权限设置
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option 1 */}
                <div 
                  onClick={() => setPermission('company')}
                  className={`cursor-pointer border rounded-lg p-5 transition-colors flex items-start gap-4 ${
                    permission === 'company' 
                      ? 'border-gray-300 bg-[#1A1B20]' 
                      : 'border-[#2A2B30] bg-[#1A1B20]/50 hover:border-[#3A3B40]'
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      permission === 'company' ? 'border-gray-300' : 'border-gray-600'
                    }`}>
                      {permission === 'company' && <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>}
                    </div>
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-white mb-1">全公司可见</div>
                    <div className="text-sm text-gray-500">所有人都可以使用此数字员工</div>
                  </div>
                </div>

                {/* Option 2 */}
                <div 
                  onClick={() => setPermission('private')}
                  className={`cursor-pointer border rounded-lg p-5 transition-colors flex items-start gap-4 ${
                    permission === 'private' 
                      ? 'border-gray-300 bg-[#1A1B20]' 
                      : 'border-[#2A2B30] bg-[#1A1B20]/50 hover:border-[#3A3B40]'
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      permission === 'private' ? 'border-gray-300' : 'border-gray-600'
                    }`}>
                      {permission === 'private' && <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>}
                    </div>
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-white mb-1">仅自己</div>
                    <div className="text-sm text-gray-500">仅创建者本人可使用</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-12">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 bg-transparent border border-[#2A2B30] text-gray-300 rounded-lg text-[15px] font-medium hover:bg-[#1A1B20] transition-colors"
            >
              取消
            </button>
            <button 
              onClick={onClose}
              className="px-6 py-2.5 bg-[#E2E8F0] text-black rounded-lg text-[15px] font-medium hover:bg-white transition-colors"
            >
              连接员工
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
