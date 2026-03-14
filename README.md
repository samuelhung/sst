# 尚书台-多智能体协作信息平台

这是一个现代化的企业级数字员工（AI Agent）管理控制台。该系统提供了一个直观、响应式的界面，用于监控、配置和管理企业内部的各种 AI 智能体。

## ✨ 核心功能

*   **📊 仪表盘 (Dashboard)**：全局概览，实时监控数字员工总数、进行中的任务、Token 消耗量以及最近活跃状态。支持响应式的员工列表展示。
*   **🏛️ 员工广场 (Agent Plaza)**：以 Feed 流的形式展示各个数字员工的实时动态、任务执行日志和交互记录，支持发布广播消息。
*   **👤 员工详情与配置 (Agent Profile)**：查看单个数字员工的详细信息，支持灵活配置角色设定 (Agent Profile) 和模型参数 (Model Config)。
*   **➕ 新建数字员工 (Create Agent)**：便捷的表单引导，快速创建并部署新的专属数字员工。
*   **📱 极致响应式设计**：完美适配桌面端、平板和移动端，提供一致且流畅的深色模式 (Dark Mode) 极客体验。

## 🛠 技术栈

*   **前端框架**: [React 18](https://reactjs.org/)
*   **开发语言**: [TypeScript](https://www.typescriptlang.org/)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **CSS 框架**: [Tailwind CSS](https://tailwindcss.com/)
*   **图标库**: [Lucide React](https://lucide.dev/)

## 🚀 快速开始

### 环境要求

*   Node.js (推荐 v18 或更高版本)
*   npm 或 yarn

### 安装与运行

1.  **克隆项目** (如果您已经从 AI Studio 导出)：
    ```bash
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```

2.  **安装依赖**：
    ```bash
    npm install
    ```

3.  **启动开发服务器**：
    ```bash
    npm run dev
    ```
    启动后，在浏览器中访问终端输出的本地地址（通常是 `http://localhost:3000` 或 `http://localhost:5173`）。

4.  **构建生产版本**：
    ```bash
    npm run build
    ```

## 📂 目录结构

```text
├── src/
│   ├── components/        # 可复用的 UI 组件
│   │   ├── QinHanLogo.tsx   # 品牌 Logo 组件
│   │   └── Sidebar.tsx      # 左侧导航侧边栏
│   ├── pages/             # 页面级视图组件
│   │   ├── AgentPlaza.tsx   # 员工广场视图
│   │   ├── AgentProfile.tsx # 员工详情视图
│   │   ├── CreateAgent.tsx  # 新建数字员工视图
│   │   ├── Dashboard.tsx    # 仪表盘视图
│   │   └── Login.tsx        # 登录视图
│   ├── App.tsx            # 根组件与路由状态管理
│   ├── main.tsx           # React 挂载入口
│   └── index.css          # 全局样式与 Tailwind 配置
├── index.html             # 页面入口
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # Vite 构建配置
```

## 📄 许可证

MIT License
