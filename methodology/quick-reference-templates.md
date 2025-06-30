# 快速參考操作模板集

> **目的**: 提供可直接複製貼上的標準化操作模板，減少重複性工作

## 🚀 新專案30分鐘初始化模板

### 📋 Phase 1: 基礎建置 (10分鐘)

**Step 1: 環境檢查** (複製執行)
```bash
# 檢查基本環境
mcp__serena__get_current_config
mcp__serena__list_dir "." recursive=true
mcp__serena__get_symbols_overview "."
```

**Step 2: 核心Memory建立** (複製並填入具體資訊)
```bash
# Memory 1: 專案目的
mcp__serena__write_memory "project_purpose" "
# 專案目的與學習目標
- 專案名稱: [填入專案名稱]
- 主要目的: [填入專案目的]  
- 技術棧: [填入主要技術]
- 目標用戶: [填入目標用戶]
- 成功指標: [填入成功指標]
- 創建時間: $(date)
"

# Memory 2: 專案結構
mcp__serena__write_memory "project_structure" "
# 專案架構與組織
## 目錄結構
[從list_dir結果中複製主要目錄]

## 核心模組
[填入主要功能模組]

## 關鍵依賴
[填入重要的外部依賴]

## 更新時間: $(date)
"

# Memory 3: 技術棧
mcp__serena__write_memory "project_tech_stack" "
# 技術棧與工具鏈
## 前端技術
[填入前端相關技術]

## 後端技術  
[填入後端相關技術]

## 資料庫
[填入資料庫技術]

## 部署與DevOps
[填入部署相關技術]

## 更新時間: $(date)
"
```

### 📋 Phase 2: 管理機制 (15分鐘)

**Step 3: 管理規範** (直接執行)
```bash
# Memory 4: 記憶管理策略
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

## 建立時間: $(date)
"

# Memory 5: 任務完成標準
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

## 建立時間: $(date)
"

# Memory 6: 常用指令
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

## 專案特定指令 (需要填入)
- 建置測試: [填入專案的建置指令]
- 連結檢查: [填入專案的連結檢查指令]
- 測試執行: [填入專案的測試指令]

## 建立時間: $(date)
"
```

**Step 4: 驗證完成** (執行確認)
```bash
# 驗證初始化完成
mcp__serena__list_memories
# 應該看到至少6個memory: project_purpose, project_structure, project_tech_stack, strategy_memory_management, guide_task_completion, guide_commands
```

### 📋 Phase 3: 持續追蹤 (5分鐘)

**Step 5: 進度追蹤初始化**
```bash
mcp__serena__write_memory "progress_tracker" "
# 專案進度追蹤記錄

## 初始化完成狀態
- [x] Phase 1: 基礎建置完成 ($(date))
- [x] Phase 2: 系統整合完成 ($(date))
- [x] Phase 3: 持續優化啟動 ($(date))

## 重要里程碑
- $(date): 專案初始化完成
- 待新增: 主要功能開發完成
- 待新增: 測試覆蓋率達標  
- 待新增: 文檔完整性確認

## 當前待改進項目
- 待識別並記錄

## 下次review時間
- 建議: $(date -d '+1 week')
"
```

---

## 🔄 日常維護操作模板

### 📅 每日5分鐘檢查清單

**快速健康檢查** (直接執行)
```bash
# 1. Memory狀態檢查
mcp__serena__list_memories

# 2. 識別需要更新的memory (根據昨日工作)
# [根據實際情況選擇需要更新的memory]

# 3. 記錄今日發現的改進點
mcp__serena__read_memory "daily_improvements" || mcp__serena__write_memory "daily_improvements" "
# 每日改進記錄
## $(date)
- 發現的問題: [填入]
- 改進想法: [填入]
- 待處理項目: [填入]

## 歷史記錄
[保留過往記錄]
"
```

### 📅 每週15分鐘深度檢查

**週度優化模板** (每週五執行)
```bash
# 1. Memory整理和優化
mcp__serena__list_memories
# 檢查是否有重複或過時的memory需要清理

# 2. 效率數據更新
mcp__serena__read_memory "efficiency_metrics" || mcp__serena__write_memory "efficiency_metrics" "
# 效率測量指標

## 本週數據 ($(date))
- 平均任務完成時間: [填入與上週比較]
- 問題解決平均時間: [填入趨勢]
- 每日維護時間: [填入實際消耗]

## 品質指標  
- 錯誤重複率: [填入數據]
- 依賴遺漏率: [填入數據]
- Memory準確性: [填入評估]

## 本週改進項目
[列出具體改進內容]

## 下週目標
[設定具體可測量目標]
"

# 3. 工作流程反思
mcp__serena__read_memory "weekly_reflection" || mcp__serena__write_memory "weekly_reflection" "
# 週度工作流程反思

## 本週總結 ($(date))
### 最大收穫
[填入本週最重要的收穫]

### 遇到的挑戰  
[填入本週遇到的主要挑戰]

### 工作流程改進
[填入具體的流程改進]

## 下週計劃
### 重點目標
[填入下週的主要目標]

### 預期改進
[填入計劃進行的改進]
"
```

---

## 🛠️ 常見任務操作模板

### 📝 新功能開發流程

**開始新功能前** (複製執行)
```bash
# 1. 檢查現有memory
mcp__serena__list_memories

# 2. 分析功能相關的依賴
mcp__serena__search_for_pattern "[功能相關關鍵字]"

# 3. 記錄開發計劃
mcp__serena__write_memory "session_[功能名稱]_dev_plan" "
# [功能名稱] 開發計劃

## 功能描述
[填入功能詳細描述]

## 影響範圍分析
### 直接影響檔案
[列出需要修改的檔案]

### 間接影響檔案
[列出可能需要更新的相關檔案]

## 開發步驟
1. [步驟1]
2. [步驟2]
3. [步驟3]

## 驗證標準
[列出完成標準]

## 開始時間: $(date)
"
```

**功能開發完成後** (複製執行)
```bash
# 更新開發記錄
mcp__serena__read_memory "session_[功能名稱]_dev_plan"
# 在原有內容基礎上添加:

## 完成總結 ($(date))
### 實際修改檔案
[列出實際修改的檔案]

### 遇到的問題  
[記錄開發過程中的問題]

### 解決方案
[記錄問題的解決方案]

### 經驗教訓
[記錄重要的經驗教訓]

# 更新相關memory
# [根據實際情況更新project_structure, project_tech_stack等]
```

### 🔍 問題排查流程

**問題發生時** (複製執行)
```bash
# 1. 問題記錄
mcp__serena__write_memory "session_[問題類型]_troubleshoot" "
# [問題類型] 排查記錄

## 問題描述 ($(date))
### 現象
[詳細描述問題現象]

### 環境情況
[記錄環境相關資訊]

### 重現步驟
1. [步驟1]
2. [步驟2]

## 排查過程
[記錄排查步驟和發現]

## 解決方案
[記錄最終解決方案]

## 預防措施
[記錄預防措施]
"

# 2. 檢查相關memory是否需要更新
mcp__serena__list_memories
# 根據問題原因更新相關memory
```

### 📚 文檔更新流程

**文檔修改前** (複製執行)
```bash
# 1. 依賴範圍確認
grep -r "[修改的關鍵內容]" docs/

# 2. 影響評估
mcp__serena__write_memory "session_doc_update_[主題]" "
# 文檔更新影響評估

## 修改內容 ($(date))
[描述要修改的內容]

## 影響範圍
### 直接依賴檔案
[列出需要同步更新的檔案]

### 間接影響檔案  
[列出可能受影響的檔案]

## 更新計劃
1. [更新步驟1]
2. [更新步驟2]

## 驗證清單
- [ ] [驗證項目1]
- [ ] [驗證項目2]
"
```

---

## 🎯 品質檢查模板

### ✅ 完整性檢查清單

**專案健康檢查** (定期執行)
```bash
# 1. Memory完整性檢查
mcp__serena__list_memories
# 確認核心memory存在: project_purpose, project_structure, project_tech_stack, strategy_memory_management, guide_task_completion, guide_commands

# 2. Memory內容一致性檢查
# 逐一檢查memory內容是否與實際專案狀態一致

# 3. 依賴關係檢查
# 檢查重要檔案的依賴關係是否完整

# 4. 文檔同步檢查
# 確認文檔內容與實際代碼一致

# 5. 記錄檢查結果
mcp__serena__write_memory "health_check_$(date +%Y%m%d)" "
# 專案健康檢查報告 ($(date))

## 檢查項目
- [ ] Memory完整性: [狀態]
- [ ] Memory一致性: [狀態]  
- [ ] 依賴關係: [狀態]
- [ ] 文檔同步: [狀態]

## 發現的問題
[列出發現的問題]

## 改進建議
[提出改進建議]

## 下次檢查時間
$(date -d '+1 month')
"
```

---

## 🔧 故障快速恢復模板

### 🚨 緊急恢復流程

**當Memory混亂時** (緊急執行)
```bash
# 1. 備份當前狀態
mcp__serena__list_memories > memory_backup_$(date +%Y%m%d_%H%M).log

# 2. 識別問題範圍
# [人工分析哪些memory有問題]

# 3. 重建核心memory (使用上述Phase 2模板)

# 4. 記錄恢復過程
mcp__serena__write_memory "emergency_recovery_$(date +%Y%m%d)" "
# 緊急恢復記錄 ($(date))

## 問題描述
[描述發生的問題]

## 恢復步驟
[記錄執行的恢復步驟]

## 數據損失評估
[評估是否有數據損失]

## 預防措施
[制定預防措施]
"
```

---

**使用提示**:
1. 所有模板中的 `[填入...]` 部分需要根據實際情況替換
2. `$(date)` 會自動填入當前時間戳
3. 模板可根據專案特性進行客製化調整
4. 建議將常用模板保存為快捷指令或書籤

*這些模板設計為「拿來即用」，減少每次都要重新思考標準流程的時間成本。*