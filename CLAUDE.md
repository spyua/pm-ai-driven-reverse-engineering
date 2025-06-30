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

### 教學章節 (`docs/chapters/`)
- 整合後的完整教學內容，每章包含：
  - 學習目標與課前準備
  - 詳細的步驟說明與實作指導
  - 實作練習與檢核點
  - 疑難排解與常見問題
- 已完成章節：第1章 - 安裝與設定
- 其他章節：基於原始規劃指南持續開發中

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

## 🧠 Serena Memory 管理規範

> **重要**: 以下是我必須嚴格遵循的memory管理規則，避免創建重複和碎片化的記錄

### ⚡ 核心原則：FIRST CHECK, THEN ACT

#### 🔍 任務開始前的強制檢查流程
```
1. mcp__serena__list_memories (必須執行)
2. 分析現有memory分類和內容
3. 確定是更新現有記錄還是創建新記錄
4. 只有確認沒有相關記錄時才創建新memory
```

#### 📋 標準化Memory分類體系

**專案核心 (Project Core)**
- `project_purpose` - 專案目的和學習目標
- `project_structure` - 架構組織和檔案結構  
- `project_tech_stack` - 技術棧和開發工具
- `project_code_style` - 程式碼風格和開發標準

**開發進度 (Development Progress)**
- `progress_chapters` - 章節開發進度和完成狀態
- `project_fixes_2025` - 所有修正和改進記錄

**會話記錄 (Session Records)**
- `session_[主題]_[狀態]` - 特定會話的重要記錄
- 範例：`session_build_error_fix_success`

**指南文檔 (Operation Guides)**  
- `guide_commands` - 常用指令和操作指南
- `guide_task_completion` - 任務完成標準和檢查清單
- `testing_checklist` - 測試驗證標準

**策略方針 (Management Strategies)**
- `strategy_[領域]` - 特定領域的管理策略
- `memory_management_rules` - 這份記憶管理規範

### ✅ 操作決策樹

#### 何時更新現有Memory？
- ✅ 修正bug或改進現有功能
- ✅ 添加新的章節進度
- ✅ 更新專案狀態或配置
- ✅ 記錄解決方案的後續發展

#### 何時創建新Memory？
- ✅ 全新的專案領域或功能
- ✅ 獨立的會話記錄（重大事件）
- ✅ 新的管理策略或指南
- ✅ 確認現有分類無法容納的內容

#### 絕對禁止的行為
- ❌ 未檢查現有memory就創建新記錄
- ❌ 為相同主題創建多個memory
- ❌ 使用臨時性或模糊的命名
- ❌ 在session結束時忘記整理memory

### 🔄 標準操作工作流

#### 任務開始時
```bash
1. mcp__serena__list_memories
2. 識別相關的現有memory
3. 如有相關記錄，優先考慮更新
4. 確認新增記錄的必要性和分類
```

#### 記錄信息時
```bash
1. 優先使用 mcp__serena__read_memory 讀取現有內容
2. 在現有基礎上進行更新和追加
3. 保持記錄的連續性和完整性
4. 更新時間戳和狀態標記
```

#### 任務完成時  
```bash
1. 檢查是否有遺漏的記錄更新
2. 確認memory內容的準確性
3. 考慮是否需要整合相關記錄
4. 維護memory的整潔性
```

### 📝 命名規範標準

#### 分類前綴規則
- `project_` - 專案核心信息
- `progress_` - 開發進度追蹤
- `session_` - 會話特定記錄  
- `guide_` - 操作指南文檔
- `strategy_` - 管理策略方針

#### 命名最佳實踐
- 使用英文小寫和下底線
- 避免過長的名稱（建議3-4個單詞）
- 包含時間概念時使用年份（如2025）
- 確保名稱的描述性和唯一性

### ⚠️ 違規警告機制

#### 創建Memory前的自我檢查
- [ ] 我已經執行了 `list_memories` 嗎？
- [ ] 現有memory中真的沒有相關內容嗎？
- [ ] 這個內容應該更新現有記錄而不是新增嗎？
- [ ] 我的命名符合標準化分類嗎？

#### 違規後果和修正
- **發現重複創建** → 立即刪除新記錄，更新正確memory
- **命名不規範** → 重新命名或整合到正確分類
- **內容碎片化** → 整合相關信息到主要memory
- **忘記更新** → 及時補充現有記錄

### 🎯 品質維護標準

#### 週期性檢查（每個重大任務後）
1. 檢查是否有重複或過時的memory
2. 整合相似主題的記錄
3. 更新過時的信息和狀態
4. 確保分類和命名的一致性

#### 內容品質標準
- 信息準確且最新
- 結構清晰，易於閱讀
- 包含必要的時間戳和狀態
- 避免技術術語過於複雜

**記住：Memory是專案知識管理的核心，必須像管理代碼一樣嚴謹地管理記憶！**