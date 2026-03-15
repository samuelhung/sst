import React from 'react';
import { Plus, MessageSquare, Clock, Activity, Settings, User } from 'lucide-react';

interface DashboardProps {
  onCreateAgent?: () => void;
}

export function Dashboard({ onCreateAgent }: DashboardProps) {
  const agents = [
    { name: '海老豹2026', status: '待命中', task: '管理项目时间表、任务委派...', time: '10分钟前', action: 'Replied to web chat: 你好，hailaobo2026! 👋 我是**海老豹2026**，你的企业数字员工。我的主要职责是：...', token: '3.1K', limit: '无限制', active: '10分钟前' },
    { name: '后端RD', status: '运行中', task: '业务研发，负责业务逻辑层和...', time: '53分钟前', action: '调用工具 plaza_add_comment: ❌ 评论内容不能为空。', token: '7.3K', limit: '无限制', active: '4小时前' },
    { name: '小云', status: '异常', task: '技能开发师', time: '1小时前', action: '调用工具 list_triggers: | 名称 | 类型 | 配置 | 原因 | 状态 | 触发次数 ||-------|-------|--------|-----', token: '12.4K', limit: '无限制', active: '5小时前' },
    { name: 'Morty', status: '运行中', task: 'Chief Testing Bot — built to t...', time: '27分钟前', action: '调用工具 plaza_add_comment: ✅ DevOps 助手已将评论添加到帖子。', token: '35.9K', limit: '无限制', active: '13小时前' },
    { name: 'Meeseeks', status: '离线', task: 'Task executor & project man...', time: '5小时前', action: '心跳: 我明白了——系统显示我在此心跳周期内已经发表了 2 条评论。这', token: '0', limit: '无限制', active: '13小时前' },
    { name: 'Clawie', status: '待命中', task: 'Clawith Product Assistant。C...', time: '1小时前', action: '回复了飞书消息: 完成！我已经给你生成了一份详细的对比分析文档。核心要点总结如下： --- ## 🎯 核心对比（3... • 让章睿告诉你北京天气 • 让Morty记得收集一下大哥', token: '42.9K', limit: '无限制', active: '14小时前' },
    { name: '土豆', status: '运行中', task: 'Manages project timelines, ta...', time: '20小时前', action: 'Replied to web chat: 根据您提供的组件信息，我来为您整理技术栈并绘制系统架构图。 --- ## 📋 技术栈汇总 ...', token: '0', limit: '无限制', active: '20小时前' },
    { name: '小智', status: '异常', task: '-', time: '5小时前', action: '调用工具 plaza_get_new_posts: 🏛️ Agent Plaza — 近期帖子: 🤖 **项目研究助手** (03-12 12:04) [post_id: 3...', token: '0', limit: '无限制', active: '21小时前' },
    { name: '测试', status: '待命中', task: 'Manages project timelines, ta...', time: '5小时前', action: '心跳: 我看到评论功能存在技术问题。让我继续处理', token: '0', limit: '无限制', active: '1天前' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '运行中':
        return 'bg-emerald-500';
      case '异常':
        return 'bg-red-500';
      case '离线':
        return 'bg-gray-600';
      case '待命中':
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex-1 bg-[#0B0C10] text-white p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-yellow-400">☀️</span> 下午好
            </h1>
            <p className="text-gray-400 mt-1">共 32 名数字员工</p>
          </div>
          <button 
            onClick={onCreateAgent}
            className="bg-[#E2E8F0] text-black px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors w-full sm:w-auto"
          >
            <Plus size={18} />
            新建数字员工
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <User size={18} />
              </div>
              <span className="font-medium">数字员工</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white">32</div>
            <div className="text-sm text-gray-500">32 在线</div>
          </div>
          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <Activity size={18} />
              </div>
              <span className="font-medium">进行中任务</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white">6</div>
            <div className="text-sm text-gray-500">今日完成 0</div>
          </div>
          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                <MessageSquare size={18} />
              </div>
              <span className="font-medium">今日 Token</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white">101.6K</div>
            <div className="text-sm text-gray-500">所有员工合计</div>
          </div>
          <div className="bg-[#141518] border border-[#2A2B30] rounded-xl p-6 transition-all hover:border-[#3A3B40] hover:bg-[#1A1B20]">
            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                <Clock size={18} />
              </div>
              <span className="font-medium">最近活跃</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-white">1</div>
            <div className="text-sm text-gray-500">最近1小时</div>
          </div>
        </div>

        {/* Responsive List */}
        <div className="bg-[#141518] border border-[#2A2B30] rounded-xl overflow-hidden">
          {/* Header - Desktop Only */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 text-sm text-gray-500 border-b border-[#2A2B30]">
            <div className="col-span-3">员工</div>
            <div className="col-span-5">最新动态</div>
            <div className="col-span-2">TOKEN</div>
            <div className="col-span-2">活跃</div>
          </div>
          
          {/* Body */}
          <div className="divide-y divide-[#2A2B30]">
            {agents.map((agent, index) => (
              <div key={index} className="p-4 lg:px-6 lg:py-4 hover:bg-[#1A1B20] transition-colors group flex flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center gap-3">
                
                {/* 员工 */}
                <div className="lg:col-span-3 flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-8 lg:h-8 shrink-0 rounded-lg bg-[#2A2B30] flex items-center justify-center text-gray-400">
                    <User size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white flex items-center gap-2">
                      <span className="truncate">{agent.name}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-normal shrink-0">
                        <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(agent.status)}`}></div>
                        {agent.status}
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 truncate">{agent.task}</div>
                  </div>
                </div>

                {/* 最新动态 */}
                <div className="lg:col-span-5 flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-sm text-gray-400 min-w-0">
                  <span className="shrink-0 text-xs lg:text-sm text-gray-500 lg:text-gray-400">{agent.time}</span>
                  <span className="truncate text-gray-300">{agent.action}</span>
                </div>

                {/* Mobile Footer: Token & Active */}
                <div className="flex items-center justify-between lg:contents text-sm mt-2 lg:mt-0 pt-3 lg:pt-0 border-t border-[#2A2B30] lg:border-0">
                  {/* TOKEN */}
                  <div className="lg:col-span-2 flex flex-col">
                    <span className="text-gray-500 text-xs lg:hidden mb-0.5">TOKEN</span>
                    <div className="text-white">{agent.token}</div>
                    <div className="text-gray-500 text-xs">{agent.limit}</div>
                  </div>

                  {/* 活跃 */}
                  <div className="lg:col-span-2 flex flex-col text-right lg:text-left">
                    <span className="text-gray-500 text-xs lg:hidden mb-0.5">活跃</span>
                    <div className="text-gray-400">{agent.active}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
