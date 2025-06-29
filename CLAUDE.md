# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

這是一個AI驅動逆向工程教學專案，提供完整的教學系統幫助產品經理和開發者掌握使用Cursor編輯器進行程式碼分析的技能。專案包含9個循序漸進的章節，建立從基礎設定到進階技巧的完整學習路徑。

## 專案架構

```
pm-ai-driven-reverse-engineering/
├── docs/                       # VitePress 文檔網站（主要教學內容）
│   ├── chapters/               # 教學章節（整合後的完整內容）
│   ├── guide/                  # 指南文檔
│   ├── checkpoints/            # 學習檢查點
│   ├── resources/              # 資源文件
│   └── package.json            # VitePress 相關依賴
├── tutorial-sample-project/    # 範例專案（Cloudy微服務）
├── reverse-system-prompt/      # AI系統提示模板
└── .content-source/            # 內容來源（開發用，不對外）
    ├── outlines/               # 原始章節規劃
    └── references/             # 參考資料
```

## 常用開發指令

### VitePress 文檔開發
```bash
# 進入文檔目錄
cd docs

# 安裝依賴
npm install

# 本地開發伺服器
npm run docs:dev

# 構建文檔
npm run docs:build

# 預覽構建結果
npm run docs:preview
```

### 範例專案操作
```bash
# 進入範例專案
cd tutorial-sample-project

# Maven 多模組構建
mvn clean compile
mvn clean package
mvn clean install

# 執行特定模組
cd cloudy-account
mvn spring-boot:run

# 執行測試
mvn test
```

## 核心元件

### 文檔系統 (`docs/`)
- 使用 VitePress 構建的教學網站
- 支援 Markdown 格式的章節內容
- 包含互動式學習檢查點和資源連結

### 教學素材 (`tutorial-material/`)
- Cursor編輯器安裝與設定指南
- CursorAI Agent功能詳解
- 上下文理解與活用指南
- CursorAsk模式深度解析

### 系統提示模板 (`reverse-system-prompt/`)
預建的AI提示模板用於不同的逆向工程任務：
- `analyzer-system.prompt.md` - 程式碼分析
- `documenter-system.prompt.md` - 文件生成
- `planner-system.prompt.md` - 專案規劃
- `refactorer-system.prompt.md` - 程式碼重構
- `security_auth.prompt.md` - 安全認證分析
- `performance_watch.prompt.md` - 效能監控
- 以及其他專用提示模板

### 範例專案 (`tutorial-sample-project/`)
基於Spring Boot的Cloudy微服務架構，包含：
- `cloudy-account` - 帳戶服務（port 8080）
- `cloudy-security` - 安全服務（核心模組）
- `cloudy-files` - 檔案服務（port 8081）
- `cloudy-event` - 事件服務（Google Cloud Functions）

## 技術棧

### 文檔系統
- **框架**: VitePress 1.0.0
- **前端**: Vue 3.3.0
- **部署**: GitHub Pages via GitHub Actions

### 範例專案
- **框架**: Spring Boot 3.1.0
- **語言**: Java 17
- **雲平台**: Google Cloud Platform
- **資料庫**: PostgreSQL (Google Cloud SQL)
- **安全**: Spring Security + JWT
- **加密**: Google Cloud KMS
- **存儲**: Google Cloud Storage

## 教學流程

1. **安裝與設定** - 建立完整開發環境
2. **理解上下文** - 掌握Cursor的上下文機制
3. **三大核心模式** - 分析、文件、重構建議模式
4. **AI模型選擇** - 不同任務的模型選擇策略
5. **產品偵探思維** - 系統性程式碼分析思維
6. **專案準備** - 標準化專案分析流程
7. **黃金分析流程** - 高效程式碼分析標準流程
8. **進階效率技巧** - 提升分析效率的進階技巧
9. **挑戰與展望** - 實際挑戰應對與未來發展

## AI分析工作流程

使用 `reverse-system-prompt/` 中的提示模板進行系統性程式碼分析：

1. 使用 `planner-system.prompt.md` 制定分析計劃
2. 應用 `analyzer-system.prompt.md` 進行程式碼分析
3. 運用 `documenter-system.prompt.md` 生成文檔
4. 需要時使用專用提示（安全、效能、資料流等）
5. 最後使用 `refactorer-system.prompt.md` 提供改進建議