# 記憶管理策略（前綴分類系統）

## 📋 前綴分類系統

由於 Serena memory 不支援資料夾結構，我們採用**前綴命名**來管理記憶檔案：

### 🏗️ project_* - 專案核心資訊
- `project_structure` - 專案架構概覽
- `project_purpose` - 專案目標與定位
- `project_tech_stack` - 技術棧和相依性
- `project_code_style` - 程式碼風格與規範

### 📚 guide_* - 指南和參考資料
- `guide_commands` - 常用命令集合
- `guide_task_completion` - 任務完成檢查清單
- `guide_best_practices` - 最佳實踐指南

### 📊 progress_* - 進度追蹤
- `progress_chapters` - 章節開發進度
- `progress_overall` - 專案整體進度
- `progress_milestones` - 里程碑達成狀況

### 🎯 session_* - 會話記錄
- `session_404_fixes` - 404修復會話記錄
- `session_major_restructure` - 重大重構會話
- `session_chapter_development` - 章節開發會話

### ⚙️ strategy_* - 管理策略
- `strategy_memory_management` - 記憶管理策略（本檔案）
- `strategy_development_workflow` - 開發工作流程
- `strategy_quality_control` - 品質控制策略

## 🔄 命名規則

### 基本原則
1. **前綴**：必須使用上述五個前綴之一
2. **分隔符**：使用底線 `_` 分隔前綴和描述
3. **描述**：簡潔明確，使用英文小寫和底線

### 檔案生命週期
- **建立**：按照前綴分類建立新檔案
- **更新**：定期更新相關內容
- **歸檔**：完成的會話記錄保持不變
- **清理**：定期刪除過時或重複的檔案

## 📈 使用效益

### 組織清晰
- 按功能分類，易於尋找
- 避免檔案混亂和重複
- 提高記憶檔案使用效率

### 維護容易
- 明確的命名規則
- 標準化的檔案結構
- 便於批次操作和管理

### 擴展性好
- 可根據需要增加新前綴
- 支援大型專案的記憶管理
- 適應專案發展變化

## 🎯 實施狀態

### ✅ 已完成重新命名
- `project_code_style` ← `code_style_conventions`
- `guide_commands` ← `suggested_commands`
- `guide_task_completion` ← `task_completion_checklist`
- `progress_chapters` ← `chapter_development_progress`
- `session_404_fixes` ← `current_session_achievements`

### 📋 當前檔案清單
```
project_structure          # 專案架構概覽
project_purpose           # 專案目標與使命
project_tech_stack        # 技術棧詳解
project_code_style        # 程式碼風格規範
guide_commands            # 開發命令指南
guide_task_completion     # 任務完成檢查
progress_chapters         # 章節開發進度
session_404_fixes         # 404修復會話記錄
strategy_memory_management # 記憶管理策略
```

## 🔮 未來規劃

### 新增預期檔案
- `session_chapter_3_development` - 第3章開發記錄
- `progress_overall` - 專案整體進度跟蹤
- `guide_best_practices` - 開發最佳實踐
- `strategy_quality_control` - 品質控制策略

### 持續優化
- 根據使用情況調整分類
- 定期審查和清理檔案
- 持續完善命名規則

## 💡 使用建議

### 對於開發者
1. **建立新檔案前**：先確定適合的前綴分類
2. **尋找特定資訊**：根據前綴快速定位相關檔案
3. **定期維護**：更新相關記憶檔案內容

### 對於 AI 助手
1. **讀取記憶時**：根據任務類型選擇相應前綴的檔案
2. **建立記憶時**：嚴格遵循命名規則
3. **管理記憶時**：定期檢查檔案組織狀況

**這個前綴分類系統有效解決了 Serena memory 的平面檔案結構限制，提供了結構化的記憶管理方案！** 🎉