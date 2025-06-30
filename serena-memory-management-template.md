# Serena Memory 管理規範模板

> **用途**: 在新專案initial serena時，將此模板內容加入專案的CLAUDE.md中，確保AI助手從一開始就遵循規範的memory管理

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
- `progress_[模組名]` - 具體模組或功能的開發進度
- `project_fixes_[年份]` - 年度修正和改進記錄

**會話記錄 (Session Records)**
- `session_[主題]_[狀態]` - 特定會話的重要記錄
- 範例：`session_deploy_success`, `session_bug_fix_complete`

**指南文檔 (Operation Guides)**  
- `guide_commands` - 常用指令和操作指南
- `guide_workflows` - 工作流程和最佳實踐
- `guide_troubleshooting` - 問題排解和常見解決方案

**策略方針 (Management Strategies)**
- `strategy_[領域]` - 特定領域的管理策略
- `strategy_testing` - 測試策略和標準
- `strategy_deployment` - 部署策略和流程

### ✅ 操作決策樹

#### 何時更新現有Memory？
- ✅ 修正bug或改進現有功能
- ✅ 添加新的開發進度
- ✅ 更新專案狀態或配置
- ✅ 記錄解決方案的後續發展
- ✅ 擴展現有指南或策略

#### 何時創建新Memory？
- ✅ 全新的專案領域或功能
- ✅ 獨立的重大會話記錄
- ✅ 新的管理策略或指南
- ✅ 確認現有分類無法容納的內容
- ✅ 年度或階段性的重大里程碑

#### 絕對禁止的行為
- ❌ 未檢查現有memory就創建新記錄
- ❌ 為相同主題創建多個memory
- ❌ 使用臨時性或模糊的命名
- ❌ 在session結束時忘記整理memory
- ❌ 創建過於細粒度的memory記錄

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
- 避免過長的名稱（建議2-4個單詞）
- 包含時間概念時使用年份（如2025）
- 確保名稱的描述性和唯一性
- 避免使用縮寫，保持可讀性

### ⚠️ 違規警告機制

#### 創建Memory前的自我檢查
- [ ] 我已經執行了 `list_memories` 嗎？
- [ ] 現有memory中真的沒有相關內容嗎？
- [ ] 這個內容應該更新現有記錄而不是新增嗎？
- [ ] 我的命名符合標準化分類嗎？
- [ ] 這個memory對未來會話有長期價值嗎？

#### 違規後果和修正
- **發現重複創建** → 立即刪除新記錄，更新正確memory
- **命名不規範** → 重新命名或整合到正確分類
- **內容碎片化** → 整合相關信息到主要memory
- **忘記更新** → 及時補充現有記錄
- **過度細化** → 合併到更大的主題memory中

### 🎯 品質維護標準

#### 週期性檢查（每個重大任務後）
1. 檢查是否有重複或過時的memory
2. 整合相似主題的記錄
3. 更新過時的信息和狀態
4. 確保分類和命名的一致性
5. 移除不再相關的臨時記錄

#### 內容品質標準
- 信息準確且最新
- 結構清晰，易於閱讀
- 包含必要的時間戳和狀態
- 避免技術術語過於複雜
- 保持適當的詳細程度

#### Memory生命週期管理
- **創建**: 確認必要性和唯一性
- **更新**: 保持內容的相關性和準確性
- **整合**: 定期合併相關記錄
- **清理**: 移除過時或不再相關的記錄

### 🚀 專案特定配置

#### 根據專案類型調整分類
**Web開發專案**
- `progress_frontend` - 前端開發進度
- `progress_backend` - 後端開發進度
- `progress_database` - 資料庫設計和實作

**AI/ML專案**
- `progress_model_training` - 模型訓練進度
- `progress_data_processing` - 資料處理進度
- `strategy_model_evaluation` - 模型評估策略

**企業應用專案**
- `progress_integration` - 系統整合進度
- `strategy_security` - 安全策略和實作
- `guide_deployment` - 部署和維運指南

#### 團隊協作考量
- 使用清晰的狀態標記（進行中/已完成/暫停）
- 包含負責人或相關聯絡人信息
- 記錄重要決策的背景和理由
- 建立跨會話的知識傳承機制

### 📖 使用說明

#### 1. 專案初始化
將此規範加入專案的 `CLAUDE.md` 檔案中，確保每次會話都會自動載入這些規則。

#### 2. 首次會話設定
在專案的第一次會話中，建立基礎的memory結構：
```bash
- project_purpose (專案目標和範圍)
- project_structure (專案架構說明)
- project_tech_stack (技術選型記錄)
```

#### 3. 持續維護
每個主要開發階段結束後，執行memory品質檢查和整理。

#### 4. 團隊導入
向團隊成員說明memory命名規範，確保一致性。

**記住：Memory是專案知識管理的核心，必須像管理代碼一樣嚴謹地管理記憶！**

---

## 📋 快速檢查清單

### 每次任務開始前
- [ ] 執行 `mcp__serena__list_memories`
- [ ] 檢查是否有相關現有記錄
- [ ] 確定更新 vs 新增的策略

### 每次記錄信息時
- [ ] 使用標準化命名
- [ ] 選擇正確的分類前綴
- [ ] 確保內容結構清晰

### 每次任務完成後
- [ ] 更新相關progress記錄
- [ ] 檢查memory內容準確性
- [ ] 考慮整合機會

### 定期維護
- [ ] 檢查重複記錄
- [ ] 整理過時信息
- [ ] 確保命名一致性
- [ ] 評估記錄價值

---

*💡 提示：將此模板保存為 `serena-memory-template.md`，在新專案初始化時複製相關部分到 `CLAUDE.md` 中。*