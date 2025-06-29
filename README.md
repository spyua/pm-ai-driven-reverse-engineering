# AI驅動逆向工程教學專案

> 🤖 使用AI工具進行程式碼逆向工程的完整教學系統

## 專案概述

本專案提供一套完整的AI驅動逆向工程教學系統，幫助產品經理和開發者掌握使用Cursor編輯器進行程式碼分析的技能。透過9個循序漸進的章節，建立從基礎設定到進階技巧的完整學習路徑。

## 🎯 學習目標

- 建立AI驅動的程式碼分析思維
- 掌握Cursor編輯器的進階功能  
- 學會系統性分析既有程式碼
- 培養產品偵探的洞察能力
- 建立高效的專案逆向工程流程

## 📚 教學章節

1. **安裝與設定** - 建立完整開發環境
2. **理解上下文** - 掌握Cursor的上下文機制
3. **三大核心模式** - 分析、文件、重構建議模式
4. **AI模型選擇** - 不同任務的模型選擇策略
5. **產品偵探思維** - 系統性程式碼分析思維
6. **專案準備** - 標準化專案分析流程
7. **黃金分析流程** - 高效程式碼分析標準流程
8. **進階效率技巧** - 提升分析效率的進階技巧
9. **挑戰與展望** - 實際挑戰應對與未來發展

## 🚀 開始學習

### 線上閱讀（推薦）
📖 [線上教學網站](https://your-username.github.io/pm-ai-driven-reverse-engineering)

### 本地運行
```bash
# 複製專案
git clone https://github.com/your-username/pm-ai-driven-reverse-engineering.git
cd pm-ai-driven-reverse-engineering

# 啟動教學網站
cd docs && npm install && npm run docs:dev
```

### 前置需求
- Cursor 編輯器（主要學習工具）
- Node.js 18+（運行教學網站）
- Git（複製專案）

## 📁 專案結構

```
pm-ai-driven-reverse-engineering/
├── docs/                       # 教學網站（主要學習內容）
│   └── chapters/               # 9個完整教學章節
├── tutorial-sample-project/    # 實作範例專案（Cloudy微服務）
├── reverse-system-prompt/      # AI分析提示模板
└── .content-source/            # 開發素材（維護者使用）
```

## 🛠️ 開發資源

### 範例專案
基於 **Cloudy 微服務架構**，包含：
- `cloudy-account` - 帳戶服務
- `cloudy-security` - 安全服務  
- `cloudy-files` - 檔案服務
- `cloudy-event` - 事件服務

### 系統提示模板
預建的AI提示模板，用於：
- 程式碼分析 (`analyzer-system.prompt.md`)
- 文件生成 (`documenter-system.prompt.md`)
- 專案規劃 (`planner-system.prompt.md`)
- 以及更多...

## 📋 開發狀態

- [x] 專案架構設計
- [x] VitePress 環境設置
- [x] GitHub Actions 配置
- [ ] 第01章：安裝與設定
- [ ] 第02章：理解上下文
- [ ] 第03章：三大核心模式
- [ ] 其他章節開發中...

## 🤝 貢獻指南

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權條款。

## 🙋‍♂️ 支援與協助

- 🐛 [問題回報](https://github.com/your-username/pm-ai-driven-reverse-engineering/issues)
- 💬 [討論區](https://github.com/your-username/pm-ai-driven-reverse-engineering/discussions)
- 📖 [維護者指南](CLAUDE.md)（供 AI 開發助手使用）

---

⭐ 如果這個專案對您有幫助，請給我們一個星星！
