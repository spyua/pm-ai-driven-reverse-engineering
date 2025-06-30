# 新專案 /initial 完整落地工作流

> **目標**: 為新專案建立完整的AI協作基礎設施，從零到可持續運作的標準化流程

## 🎯 核心理念：三階段漸進式建置

```
Phase 1: 基礎建置 (Foundation Setup)
├── 環境準備與工具配置
├── 基本Memory架構建立  
└── 初始依賴關係識別

Phase 2: 系統整合 (System Integration)
├── Memory管理規範落地
├── 依賴管理機制啟動
└── 協作工作流建立

Phase 3: 持續優化 (Continuous Optimization)  
├── 自動化檢查機制
├── 品質保證流程
└── 迭代改進循環
```

## 📋 Phase 1: 基礎建置檢查清單

### 🔧 1.1 環境準備 (5-10分鐘)

**必要工具確認**
- [ ] Serena Agent 正常運作：`mcp__serena__get_current_config`
- [ ] Claude Code CLI 連線正常
- [ ] VS Code/Cursor 編輯器可用
- [ ] Git repository 已初始化

**專案結構掃描**  
```bash
# 執行指令序列
mcp__serena__list_dir "." recursive=true
mcp__serena__get_symbols_overview "."
```

**關鍵檔案識別**
- [ ] README.md 存在且有基本說明
- [ ] package.json / pom.xml / requirements.txt 等依賴檔案
- [ ] 配置檔案 (.env, config.*, etc.)
- [ ] 文檔目錄結構

### 🧠 1.2 初始Memory建置 (10-15分鐘)

**核心Memory建立順序**：

```bash
# 1. 專案核心資訊
mcp__serena__write_memory "project_purpose" "
# 專案目的與學習目標
- 專案名稱: [填入]
- 主要目的: [填入]  
- 技術棧: [填入]
- 目標用戶: [填入]
- 成功指標: [填入]
"

# 2. 專案結構概覽
mcp__serena__write_memory "project_structure" "
# 專案架構與組織
## 目錄結構
[貼上 list_dir 結果摘要]

## 核心模組
[填入主要功能模組]

## 關鍵依賴
[填入重要的外部依賴]
"

# 3. 技術棧記錄
mcp__serena__write_memory "project_tech_stack" "
# 技術棧與工具鏈
## 前端
[填入前端技術]

## 後端  
[填入後端技術]

## 資料庫
[填入資料庫技術]

## 部署與DevOps
[填入部署相關技術]
"
```

### 🔗 1.3 依賴關係初始掃描 (5-10分鐘)

**文件依賴檢查**
```bash
# 搜尋重要的交叉引用
mcp__serena__search_for_pattern "import.*from|require.*|#include"
mcp__serena__search_for_pattern "README|readme|\.md$"
```

**配置檔案分析**
- [ ] 環境變數依賴
- [ ] 第三方服務依賴  
- [ ] 內部模組依賴
- [ ] 文檔更新依賴

## 📋 Phase 2: 系統整合檢查清單

### 🎯 2.1 Memory管理規範落地 (10-15分鐘)

**建立Memory管理流程**
```bash
mcp__serena__write_memory "strategy_memory_management" "
# Memory管理策略 (基於CLAUDE.md規範)

## 操作前強制檢查
1. mcp__serena__list_memories (每次任務開始)
2. 分析現有memory與任務關聯性
3. 優先更新現有記錄，謹慎創建新記錄

## 分類命名規範
- project_* : 專案核心資訊
- progress_* : 開發進度追蹤  
- session_* : 重要會話記錄
- guide_* : 操作指南文檔
- strategy_* : 管理策略方針

## 品質標準
- 內容準確且最新
- 結構清晰易讀
- 包含時間戳記
- 避免重複和碎片化
"
```

**建立標準檢查清單**
```bash
mcp__serena__write_memory "guide_task_completion" "
# 任務完成標準檢查清單

## 任務開始前
- [ ] 執行 mcp__serena__list_memories
- [ ] 讀取相關既有memory
- [ ] 使用 grep/search 確認依賴範圍
- [ ] 制定完整更新計劃

## 執行過程中  
- [ ] 按依賴順序執行修改
- [ ] 確保修改間一致性
- [ ] 即時驗證功能完整性
- [ ] 更新交叉引用

## 任務完成後
- [ ] 更新或創建相關memory
- [ ] 記錄依賴關係變更  
- [ ] 執行品質檢查
- [ ] 同步相關文檔
"
```

### 🔧 2.2 常用指令標準化 (5-10分鐘)

```bash
mcp__serena__write_memory "guide_commands" "
# 常用開發指令手冊

## Serena 核心指令
- 檢查記憶: mcp__serena__list_memories
- 讀取記憶: mcp__serena__read_memory 'memory_name'
- 寫入記憶: mcp__serena__write_memory 'name' 'content'
- 搜尋程式碼: mcp__serena__search_for_pattern 'pattern'
- 符號查找: mcp__serena__find_symbol 'name_path'

## 依賴檢查指令
- 檔案搜尋: grep -r 'keyword' docs/
- 專案結構: mcp__serena__list_dir '.' recursive=true
- 符號概覽: mcp__serena__get_symbols_overview 'path'

## 品質檢查指令  
- 建置測試: [專案特定的建置指令]
- 連結檢查: [專案特定的連結檢查]
- 測試執行: [專案特定的測試指令]
"
```

### 📊 2.3 進度追蹤機制 (5分鐘)

```bash
mcp__serena__write_memory "progress_tracker" "
# 專案進度追蹤記錄

## 初始化完成狀態
- [x] Phase 1: 基礎建置完成
- [x] Phase 2: 系統整合完成  
- [ ] Phase 3: 持續優化啟動

## 重要里程碑
- $(date): 專案初始化完成
- 待新增: 主要功能開發完成
- 待新增: 測試覆蓋率達標  
- 待新增: 文檔完整性確認

## 待改進項目
- 待識別並記錄
"
```

## 📋 Phase 3: 持續優化啟動

### 🔄 3.1 自動化檢查設置 (10分鐘)

**建立定期檢查提醒**
```bash
mcp__serena__write_memory "maintenance_checklist" "
# 定期維護檢查清單

## 每日檢查 (2分鐘)
- [ ] 檢查memory是否需要更新
- [ ] 確認當日變更的依賴影響
- [ ] 驗證關鍵功能正常運作

## 每週檢查 (10分鐘)  
- [ ] 整合相似主題的memory記錄
- [ ] 檢查過時的memory並更新  
- [ ] 確認文檔與實際狀態一致
- [ ] 評估workflow改進機會

## 每月檢查 (30分鐘)
- [ ] 完整的依賴關係review
- [ ] Memory架構重組和優化
- [ ] 工作流程效果評估
- [ ] 方法論更新和改進
"
```

### 📈 3.2 品質保證機制 (5分鐘)

```bash
mcp__serena__write_memory "quality_standards" "
# 品質保證標準

## Memory品質標準
- 準確性: 內容與實際狀態一致
- 完整性: 包含必要的上下文資訊  
- 時效性: 及時更新過時資訊
- 結構性: 使用標準化格式和分類

## 依賴管理品質標準
- 影響評估: 每次修改前評估完整影響範圍
- 同步更新: 所有相關檔案同步修改
- 一致性驗證: 確保修改後的一致性
- 回滾準備: 保持快速回滾能力

## 協作品質標準  
- 透明度: 所有重要決策記錄在memory
- 可追溯性: 變更歷史清晰可查
- 可複製性: 他人能夠理解和重現流程
- 持續改進: 基於經驗持續優化方法
"
```

## 🎯 成功驗證標準

### Phase 1 完成標準
- [ ] 所有基礎工具可正常使用
- [ ] 建立了5個核心memory記錄
- [ ] 完成初始依賴關係掃描
- [ ] 專案結構清晰可理解

### Phase 2 完成標準  
- [ ] Memory管理規範已落地
- [ ] 標準檢查清單可執行
- [ ] 常用指令已標準化
- [ ] 進度追蹤機制已啟動

### Phase 3 完成標準
- [ ] 自動化檢查機制運作
- [ ] 品質保證流程建立
- [ ] 可持續改進循環啟動
- [ ] 團隊成員可獨立操作

## ⚡ 快速啟動模板

### 新專案30分鐘標準流程

```bash
# 1. 基礎檢查 (5分鐘)
mcp__serena__get_current_config
mcp__serena__list_dir "." recursive=true

# 2. 核心Memory建立 (15分鐘)  
# 依序建立: project_purpose → project_structure → project_tech_stack

# 3. 管理機制啟動 (10分鐘)
# 建立: strategy_memory_management → guide_task_completion → guide_commands

# 4. 驗證完成 
mcp__serena__list_memories
# 確認至少有6個核心memory記錄
```

### 每日維護5分鐘流程

```bash
# 1. Memory狀態檢查
mcp__serena__list_memories

# 2. 當日變更評估
# 檢查是否有memory需要更新

# 3. 依賴影響確認  
# 確認無遺漏的依賴更新

# 4. 功能驗證
# 執行關鍵功能測試
```

---

**關鍵成功因素**: 
1. **嚴格執行檢查清單** - 不跳過任何步驟
2. **持續記錄經驗** - 每次操作都更新相關memory
3. **主動預防問題** - 基於依賴關係提前識別風險
4. **迭代改進流程** - 基於實際使用體驗優化工作流

*這個工作流是活的文檔，會根據實際使用經驗持續優化和改進。*