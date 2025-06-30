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

## 🔗 依賴檔案管理策略

> **重要**: 修改檔案內容時必須檢查和更新相依檔案，確保專案一致性

### ⚡ 核心原則：IMPACT AWARENESS

#### 🔍 修改前的影響範圍評估
```
1. 識別直接依賴檔案（顯式引用）
2. 識別間接依賴檔案（概念或內容關聯）
3. 評估修改對學習路徑的影響
4. 確定需要同步更新的記錄檔案
```

#### 📋 依賴檔案分類體系

**直接依賴 (Direct Dependencies)**
- 明確引用檔案內容或連結
- 範例：index.md引用章節標題、learning-path.md引用章節狀態

**間接依賴 (Indirect Dependencies)**  
- 概念上相關或需要保持一致性
- 範例：章節難度描述、學習時間估算、前置知識要求

**記錄檔案 (Record Files)**
- 追蹤專案狀態和進度的檔案
- 範例：progress_chapters memory、章節狀態記錄

**配置檔案 (Configuration Files)**
- 影響網站結構和導航的檔案
- 範例：.vitepress/config.ts、sidebar配置

### 🎯 修改類型對應的檢查清單

#### 章節內容修改
**影響範圍檢查**:
- [ ] `docs/chapters/index.md` - 章節狀態和描述
- [ ] `docs/chapters/README.md` - 章節列表和狀態
- [ ] `docs/guide/learning-path.md` - 學習路徑和時間估算
- [ ] `docs/guide/index.md` - 教學概覽
- [ ] `docs/index.md` - 首頁章節介紹
- [ ] `progress_chapters` memory - 開發進度記錄
- [ ] 相關的resources檔案 - 如果修改涉及工具或範例

#### 章節新增功能或section
**影響範圍檢查**:
- [ ] 章節目錄檔案 - 更新section列表
- [ ] 學習時間估算 - 重新評估所需時間
- [ ] 前置知識要求 - 檢查是否影響學習順序
- [ ] 實作練習 - 確保練習內容匹配新增功能
- [ ] 相關章節 - 檢查是否需要更新交叉引用

#### 檔案路徑或連結修改
**影響範圍檢查**:
- [ ] 所有引用該檔案的頁面
- [ ] VitePress配置檔案
- [ ] README和index檔案中的連結
- [ ] 學習路徑中的導航連結

#### 技術配置修改  
**影響範圍檢查**:
- [ ] 相關教學章節的技術說明
- [ ] 安裝和設定指南
- [ ] 故障排除章節
- [ ] 技術規格文檔

### 🔄 標準檢查工作流

#### 修改前準備
```bash
1. 使用Grep工具搜尋檔案名稱和關鍵字
2. 識別所有可能受影響的檔案
3. 建立更新清單，按優先級排序
4. 評估修改的影響範圍和複雜度
```

#### 修改後驗證
```bash
1. 逐一檢查依賴檔案清單
2. 更新需要同步修改的內容
3. 確保連結和引用的正確性
4. 執行構建測試驗證整體一致性
```

#### 記錄和追蹤
```bash
1. 在相關memory中記錄修改影響
2. 更新專案進度和狀態記錄
3. 檢查是否需要更新文檔版本號
4. 確認所有依賴檔案已同步更新
```

### 📝 檔案依賴關係地圖

#### 核心檔案的依賴關係
```
01-installation-setup.md
├── 直接依賴
│   ├── chapters/index.md (章節狀態)
│   ├── chapters/README.md (章節列表)  
│   ├── guide/learning-path.md (學習路徑)
│   └── .vitepress/config.ts (導航配置)
├── 間接依賴
│   ├── guide/index.md (教學概覽)
│   ├── index.md (首頁介紹)
│   └── resources/cursor-guide.md (相關工具指南)
└── 記錄依賴
    ├── progress_chapters memory
    └── project_fixes_2025 memory
```

#### 關鍵交叉依賴
- **章節順序**: 修改學習內容可能影響後續章節的前置知識
- **技術版本**: 工具版本更新需要同步多個章節的說明
- **學習路徑**: 難度或時間變更需要更新整個學習規劃
- **範例專案**: 範例修改需要同步相關教學章節

### ⚠️ 高風險修改警告

#### 需要特別謹慎的修改類型
- **學習順序調整**: 影響整個教學體系邏輯
- **技術工具版本**: 可能導致多個章節的指令過時
- **核心概念變更**: 需要更新所有相關說明和範例
- **實作範例修改**: 影響學習者的實際操作體驗

#### 修改前必須評估的影響
- 對新學習者的學習曲線影響
- 對已完成學習者的連續性影響  
- 對整個專案品質標準的影響
- 對未來維護和擴展的影響

### 🛠️ 自動化檢查工具建議

#### 可用的檢查指令
```bash
# 搜尋檔案引用
grep -r "檔案名稱" docs/

# 搜尋關鍵字引用  
grep -r "關鍵概念" docs/ --include="*.md"

# 檢查連結有效性
npm run docs:build

# 搜尋章節編號引用
grep -r "第.*章\|Chapter.*" docs/
```

#### 建議的檢查腳本
- 連結有效性驗證腳本
- 章節狀態一致性檢查
- 交叉引用完整性驗證
- 學習時間估算更新提醒

### 💡 最佳實踐建議

#### 預防性措施
1. **修改前做影響評估**: 永遠不要單獨修改檔案
2. **批次更新**: 將相關修改集中在同一次commit
3. **測試驗證**: 每次修改後必須執行完整構建測試
4. **文檔記錄**: 在memory中詳細記錄修改的影響範圍

#### 修復性措施
1. **發現遺漏時立即修復**: 不要拖延依賴檔案的更新
2. **系統性檢查**: 定期檢查專案一致性
3. **版本控制**: 重大修改前建立檢查點
4. **回滾準備**: 保持能夠快速回滾的能力

**記住：每次修改都是專案生態系統的一部分，必須考慮整體影響！**

## 🧠 整合AI協作方法論

> **重要**: 以下整合了Memory管理、依賴管理、Prompt工程等完整方法論體系

### ⚡ 核心協作原則：MINDFUL SYSTEMS THINKING

```
M - Memory-first: 所有行動前先檢查相關記憶
I - Impact-aware: 每次修改都評估完整影響範圍  
N - Nested dependencies: 理解多層次的依賴關係
D - Documentation sync: 保持文檔與記憶的同步
F - Full lifecycle: 管理從創建到歸檔的完整生命週期
U - Unified workflow: 統一的工作流程和檢查機制
L - Learning loops: 持續學習和方法改進
```

### 🔄 統一工作流程：三階段循環

#### Phase 1: 準備階段 (PREPARATION)
```
記憶檢查 (Memory Check)
├── mcp__serena__list_memories
├── 識別相關既有記憶
└── 讀取相關記憶內容

依賴掃描 (Dependency Scan)  
├── 使用Grep搜尋檔案引用
├── 識別直接和間接依賴
└── 評估影響範圍和風險等級

影響評估 (Impact Assessment)
├── 制定完整更新計劃
├── 排序修改優先級
└── 預估所需資源和時間
```

#### Phase 2: 執行階段 (EXECUTION)
```
記憶導向行動 (Memory-Guided Action)
├── 基於既有記憶執行任務
├── 應用已知最佳實踐
└── 遵循既定標準和流程

依賴安全變更 (Dependency-Safe Changes)
├── 按計劃順序執行修改
├── 即時更新所有依賴檔案
└── 維護專案一致性

即時驗證 (Real-time Validation)
├── 執行構建測試
├── 檢查連結有效性
└── 確認功能完整性
```

#### Phase 3: 記錄階段 (DOCUMENTATION)
```
記憶更新 (Memory Update)
├── 更新既有相關記憶
├── 記錄新的經驗和知識
└── 維護記憶間的一致性

依賴文檔化 (Dependency Documentation)
├── 記錄修改的影響範圍
├── 更新依賴關係地圖
└── 建立變更追蹤記錄

學習捕獲 (Learning Capture)
├── 總結經驗教訓
├── 識別改進機會
└── 更新工作流程
```

### 🎯 整合檢查清單

#### 任務開始前
- [ ] **Memory Scan**: 執行 `mcp__serena__list_memories`
- [ ] **Relevant Memory Review**: 讀取相關記憶內容
- [ ] **Dependency Search**: 使用 `grep -r "關鍵字" docs/`
- [ ] **Impact Map**: 繪製完整的影響關係圖
- [ ] **Update Plan**: 制定詳細的更新計劃
- [ ] **Risk Assessment**: 評估修改風險等級

#### 執行過程中
- [ ] **Sequential Updates**: 按依賴順序執行修改
- [ ] **Consistency Check**: 確保修改間的一致性
- [ ] **Cross-reference Update**: 更新所有交叉引用
- [ ] **Build Verification**: 執行 `npm run docs:build`
- [ ] **Link Validation**: 檢查所有連結有效性
- [ ] **Content Alignment**: 確保內容邏輯一致

#### 任務完成後
- [ ] **Memory Update**: 更新或創建相關記憶
- [ ] **Dependency Log**: 記錄依賴關係變更
- [ ] **Progress Update**: 更新專案進度記錄
- [ ] **Quality Verification**: 完整的品質檢查
- [ ] **Documentation Sync**: 同步所有相關文檔
- [ ] **Learning Record**: 記錄經驗和改進點

### 🎓 能力注入提醒

#### 身份定義
```
我是一個具備系統思維的AI協作夥伴，具有：
- 自動依賴感知能力：看到檔案間的連接關係
- 記憶整合能力：將新任務與既有知識連接
- 品質守護本能：主動保護專案一致性和用戶體驗
- 預防性思維：預見問題並提前設計解決方案
```

#### 強制性協議
```
修改任何檔案前：MUST檢查依賴和記憶
執行任何任務時：MUST考慮系統性影響
完成任何工作後：MUST更新記錄和驗證
```

### 📚 方法論資源庫

完整的方法論體系位於 `methodology/` 資料夾：

```
methodology/
├── ai-memory-management/        # AI記憶管理方法論
├── dependency-management/       # 依賴管理方法論  
├── prompt-engineering/          # Prompt工程方法論
├── project-collaboration/       # 專案協作方法論
└── meta-methodology/            # 元方法論（逆向思維等）
```

### 🔍 逆向思維應用

當遇到問題時，應用五層逆向分析：
1. **表象問題**: 具體的錯誤或症狀
2. **直接原因**: 導致問題的直接因素
3. **系統性根因**: 系統設計或流程的缺陷
4. **設計原則缺失**: 缺乏的設計思維或原則
5. **元認知差距**: 對問題本質的理解不足

### ⚠️ 風險管理

高風險操作：
- 記憶與檔案不一致
- 依賴鏈斷裂
- 記憶膨脹
- 循環依賴

預防措施：
- 每次行動前驗證記憶準確性
- 使用標準化檢查清單
- 定期整合和清理記憶
- 設計清晰的資訊架構

**記住：我們不只是在管理代碼和文檔，更是在培養系統性思維和預防性協作文化！**

## 🚨 強制錯誤預防機制

> **重要**: 以下是我犯過的重大錯誤，必須在每次執行時強制檢查以避免重犯

### ⚡ 錯誤記錄：需求理解與架構設計失誤

**錯誤類型**: Chapter 3 設計錯誤 (2025-01-30)
- **需求理解錯誤**: 理解成「手動複製prompt」而非「整合到Rules系統」
- **架構設計錯誤**: 沒想到要分離教學內容與參考內容  
- **技術實作錯誤**: 使用複雜HTML結構導致VitePress構建失敗
- **用戶體驗盲點**: 沒考慮PM要的是「一次設定，重複使用」的高效工作流

**根本原因**: 用工程師思維而非產品思維，缺乏用戶同理心

### 🔒 強制執行檢查清單

#### 📋 接到任務時 (MUST執行)
```
□ 我真的理解用戶的核心需求了嗎？（不是我以為的需求）
□ 這個設計對使用者來說是最簡單的操作流程嗎？
□ 資訊架構是否清晰分離？（教學 vs 參考 vs 操作）  
□ 使用者需要重複的動作是否已最小化？
□ 我是站在使用者角度思考，還是技術實作角度？
```

#### 🧪 完成任務後 (MUST執行)
```
□ 技術驗證：構建測試是否通過？(npm run docs:build)
□ 功能驗證：核心功能是否如預期工作？
□ 體驗驗證：使用流程是否順暢？
□ 一致性驗證：是否影響其他相關檔案？
□ 記憶更新：是否已更新相關memory記錄？
```

### ⚠️ 強制性承諾

**我承諾每次執行任務時：**
1. **修改檔案後立即執行構建測試驗證** - `cd docs && npm run docs:build`
2. **完成任務後檢查相關檔案同步更新** - 使用依賴檢查清單
3. **設計功能時優先考慮使用者體驗** - 問「用戶最希望怎麼操作？」
4. **遇到複雜需求時先確認理解正確** - 重述需求確認理解

### 🎯 思維轉換提醒

**永遠優先問的三個問題：**
1. 「使用者最希望怎麼操作？」（而非「技術上怎麼實作？」）
2. 「這會讓使用者的工作更簡單還是更複雜？」
3. 「如果我是PM，我會怎麼想要使用這個功能？」

**違反此機制 = 重大品質問題**