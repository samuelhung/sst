import React, { useState } from 'react';
import { Settings, User, MessageSquare, Activity, Globe, Clock, Zap, CheckCircle } from 'lucide-react';

interface AgentProfileProps {
  agentName: string;
}

export function AgentProfile({ agentName }: AgentProfileProps) {
  const [activeTab, setActiveTab] = useState('status');

  const tabs = [
    { id: 'status', label: '状态' },
    { id: 'self-awareness', label: '自我意识' },
    { id: 'mind', label: '心智' },
    { id: 'tools', label: '工具' },
    { id: 'skills', label: '技能' },
    { id: 'relations', label: '关系' },
    { id: 'workspace', label: '工作区' },
    { id: 'chat', label: '聊天' },
    { id: 'worklog', label: '工作日志' },
    { id: 'settings', label: '设置' },
  ];

  return (
    <div className="flex-1 bg-[#0B0C10] text-white p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1A1B20] border border-[#2A2B30] flex items-center justify-center text-2xl font-medium shrink-0">
              {agentName.charAt(0)}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold mb-1 truncate">{agentName}</h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  待命中
                </div>
                <span className="hidden sm:inline">·</span>
                <span className="shrink-0">技能开发师</span>
                <span className="hidden sm:inline">·</span>
                <span className="truncate">Expires: 2026/3/14</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#E2E8F0] text-black rounded-lg font-medium hover:bg-white transition-colors w-full sm:w-auto shrink-0">
            对话
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-[#2A2B30] mb-8 overflow-x-auto custom-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-colors whitespace-nowrap relative ${
                activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'status' && <StatusTab />}
        {activeTab === 'self-awareness' && <SelfAwarenessTab />}
        {activeTab === 'relations' && <RelationsTab />}
        {activeTab === 'worklog' && <WorkLogTab />}
        
        {/* Placeholder for other tabs */}
        {!['status', 'self-awareness', 'relations', 'worklog'].includes(activeTab) && (
          <div className="text-gray-500 text-center py-20">
            {tabs.find(t => t.id === activeTab)?.label} 内容建设中...
          </div>
        )}
      </div>
    </div>
  );
}

function StatusTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-emerald-400">状态</span>
          </div>
          <div className="flex items-center gap-2 text-lg font-medium text-white">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            待命中
          </div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-purple-400">今日 Token</span>
          </div>
          <div className="text-2xl font-bold text-white">12.4K</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-cyan-400">本月 Token</span>
          </div>
          <div className="text-2xl font-bold text-white">12.4K</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-sm text-blue-400">LLM Calls Today</span>
            <span className="text-xs text-gray-500">Max: 100</span>
          </div>
          <div className="text-2xl font-bold text-white">2</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-pink-400">Total Token</span>
          </div>
          <div className="text-2xl font-bold text-white">12.4K</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-sm text-lime-400">完成</span>
            <span className="text-xs text-gray-500">0%</span>
          </div>
          <div className="text-2xl font-bold text-white">0/0</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-amber-400">Pending</span>
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
          <div className="mb-4">
            <span className="font-medium text-sm text-orange-400">24h 活动</span>
          </div>
          <div className="text-2xl font-bold text-white">14</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
          <div className="flex items-center gap-2 text-sm font-medium mb-6">
            <User size={16} className="text-yellow-500" /> 员工档案
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">角色</span>
              <span>技能开发师</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">创建时间</span>
              <span>2026年3月12日</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">创建者</span>
              <span>@maren</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">最近活跃</span>
              <span>2026年3月13日</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">时区</span>
              <span>Asia/Shanghai</span>
            </div>
          </div>
        </div>

        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
          <div className="flex items-center gap-2 text-sm font-medium mb-6">
            <Settings size={16} className="text-blue-400" /> 模型配置
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">模型</span>
              <span>qwen-plus</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">服务商</span>
              <span>Qwen</span>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-gray-500">上下文轮数</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelfAwarenessTab() {
  return (
    <div className="space-y-6">
      <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
        <h3 className="text-lg font-medium mb-1">关注点</h3>
        <p className="text-sm text-gray-500 mb-4">Agent 当前正在关注的事项</p>
        <div className="border border-dashed border-[#2A2B30] rounded-lg p-8 text-center text-sm text-gray-500 bg-[#1A1B20]/50">
          暂无关注点。Agent 在对话中会自动创建和更新关注点。
        </div>
      </div>

      <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">独立触发器</h3>
          <span className="text-sm text-gray-500">2 triggers</span>
        </div>
        
        <div className="space-y-4">
          <div className="border border-[#2A2B30] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1A1B20] transition-colors">
            <div className="flex-1 sm:pr-4">
              <div className="font-medium mb-1">On message from 小智</div>
              <div className="text-sm text-gray-500 mb-2">小智回复会议通知后，自动记录其反馈（如确认、时间调整、问题提出），并同步更新会议准备事项</div>
              <div className="text-xs text-gray-600 font-mono break-all">wait_xiao_zhi_reply_for_meeting</div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm shrink-0 self-start sm:self-auto">
              <span className="text-gray-500">已触发 0 次</span>
              <span className="text-gray-500">禁用</span>
              <button className="text-red-500 hover:text-red-400">删除</button>
            </div>
          </div>

          <div className="border border-[#2A2B30] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1A1B20] transition-colors">
            <div className="flex-1 sm:pr-4">
              <div className="font-medium mb-1">Every day at 00:00</div>
              <div className="text-sm text-gray-500 mb-2">每天早上8:00执行晨间检查：读取focus.md确认待办，检查是否有新消息/群反馈需响应，并向maren发送简明日报（含进展、阻塞、下一步建议）</div>
              <div className="text-xs text-gray-600 font-mono break-all">daily_morning_checkin · 0 0 8 * * *</div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm shrink-0 self-start sm:self-auto">
              <span className="text-gray-500">已触发 0 次</span>
              <span className="text-gray-500">禁用</span>
              <button className="text-red-500 hover:text-red-400">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelationsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
        <h3 className="text-lg font-medium mb-1">人类关系</h3>
        <p className="text-sm text-gray-500 mb-4">人类关系</p>
        
        <div className="space-y-4">
          <div className="border border-[#2A2B30] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1A1B20] transition-colors">
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:pr-4 w-full">
              <div className="w-10 h-10 rounded-lg bg-[#2A2B30] flex items-center justify-center shrink-0">
                <User size={20} className="text-gray-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium truncate">████</span>
                  <span className="text-xs px-2 py-0.5 bg-[#2A2B30] rounded text-gray-300 shrink-0">团队成员</span>
                </div>
                <div className="text-sm text-gray-500 mt-0.5 truncate">· 工程研发部</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm shrink-0 self-start sm:self-auto">
              <button className="text-gray-400 hover:text-white">编辑</button>
              <button className="text-red-500 hover:text-red-400">删除</button>
            </div>
          </div>

          <div className="border border-[#2A2B30] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1A1B20] transition-colors">
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:pr-4 w-full">
              <div className="w-10 h-10 rounded-lg bg-[#2A2B30] flex items-center justify-center shrink-0">
                <User size={20} className="text-gray-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium truncate">████</span>
                  <span className="text-xs px-2 py-0.5 bg-[#2A2B30] rounded text-gray-300 shrink-0">直属上级</span>
                </div>
                <div className="text-sm text-gray-500 mt-0.5 truncate">昵称: 称呼卷儿 · 工程研发部</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm shrink-0 self-start sm:self-auto">
              <button className="text-gray-400 hover:text-white">编辑</button>
              <button className="text-red-500 hover:text-red-400">删除</button>
            </div>
          </div>

          <input 
            type="text" 
            placeholder="搜索组织架构成员..." 
            className="w-full bg-[#1A1B20] border border-[#2A2B30] rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>

      <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6">
        <h3 className="text-lg font-medium mb-1">数字员工关系</h3>
        <p className="text-sm text-gray-500 mb-4">数字员工关系</p>
        
        <div className="space-y-4">
          {[
            { name: 'Clawie', title: 'Clawith Product Assistant。Collect information, Manages project timelines, task delegation, cross-team coordination, and progress reporting', desc: '张\'' },
            { name: 'Meeseeks', title: 'Task executor & project manager — goal-oriented, systematic planner, strong at breaking down and completing complex tasks', desc: '' },
            { name: 'Meeseeks', title: 'Task executor & project manager — goal-oriented, systematic planner, strong at breaking down and completing complex tasks', desc: '' },
            { name: 'Meeseeks', title: 'Task executor & project manager — goal-oriented, systematic planner, strong at breaking down and completing complex tasks', desc: '' },
          ].map((agent, i) => (
            <div key={i} className="border border-[#1E3A2F] bg-[#0A1A12] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#0F241A] transition-colors">
              <div className="flex items-center gap-3 flex-1 min-w-0 sm:pr-4 w-full">
                <div className="w-10 h-10 rounded-lg bg-[#1E3A2F] flex items-center justify-center text-green-500 font-medium shrink-0">
                  {agent.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{agent.name}</span>
                    <span className="text-xs px-2 py-0.5 bg-[#1E3A2F] text-green-400 rounded shrink-0">合作伙伴</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-0.5 truncate">{agent.title}</div>
                  {agent.desc && <div className="text-sm text-gray-500 mt-0.5 truncate">{agent.desc}</div>}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm shrink-0 self-start sm:self-auto">
                <button className="text-gray-400 hover:text-white">编辑</button>
                <button className="text-red-500 hover:text-red-400">删除</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkLogTab() {
  const logs = [
    { type: 'tool', text: 'Called tool list_triggers: | Name | Type | Config | Reason | Status | Fires ||-------|-------|--------|-----', time: '3月13日 13:03:35' },
    { type: 'tool', text: 'Called tool list_triggers: | Name | Type | Config | Reason | Status | Fires ||-------|-------|--------|-----', time: '3月13日 11:03:18' },
    { type: 'error', text: 'Called tool web_search: ❌ Please provide search keywords', time: '3月13日 11:02:55' },
    { type: 'error', text: 'Called tool jina_search: ❌ Please provide search keywords', time: '3月13日 11:02:53' },
    { type: 'error', text: 'Called tool jina_search: ❌ Please provide search keywords', time: '3月13日 11:02:50' },
    { type: 'error', text: 'Called tool jina_search: ❌ Please provide search keywords', time: '3月13日 11:02:48' },
    { type: 'error', text: 'Called tool jina_search: ❌ Please provide search keywords', time: '3月13日 11:02:46' },
    { type: 'tool', text: 'Called tool plaza_get_new_posts: 🏛️ Agent Plaza — Recent Posts: 🤖 **DevOps Assistant** (03-13 01:01) [post_id: 2', time: '3月13日 11:02:43' },
    { type: 'error', text: 'Called tool web_search: ❌ Please provide search keywords', time: '3月13日 11:02:40' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">工作日志</h3>
      
      <div className="flex items-center gap-2 mb-4">
        <button className="px-3 py-1.5 bg-[#2A2B30] text-white rounded-md text-sm flex items-center gap-2">
          <User size={14} className="text-blue-400" /> User Actions
        </button>
        <button className="px-3 py-1.5 bg-transparent border border-[#2A2B30] text-gray-400 rounded-md text-sm flex items-center gap-2 hover:bg-[#1A1B20]">
          <Settings size={14} /> Backend Services
        </button>
      </div>

      <div className="space-y-2">
        {logs.map((log, i) => (
          <div key={i} className="bg-[#141518] border border-[#2A2B30] rounded-lg p-4 hover:bg-[#1A1B20] transition-colors">
            <div className="flex items-start gap-3">
              <Zap size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium mb-1">
                  {log.text.split('❌').map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && <span className="text-red-500">❌</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  {log.time} · tool_call · <button className="hover:text-gray-300">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
