# 📋 標準化工作流程目錄

## 概述

此目錄包含PM AI逆向工程專案的所有標準化工作流程文檔，確保教材開發和專案管理的一致性與品質。

## 📂 文檔結構

### 🔄 [教材產出標準化工作流程](./content-development-workflow.md)
- **核心原則**: CONTENT-SOURCE DRIVEN 開發方法
- **標準流程**: 5步驟教材產出流程
- **品質控管**: 三階段品質驗證機制
- **最佳實踐**: 用戶中心的教材設計原則

### 📂 [System Prompt 管理標準](./system-prompt-management.md)
- **分類架構**: 四大核心 + 九大專業模板
- **開發指南**: 標準格式和設計原則
- **管理流程**: 新增、更新、品質檢查SOP
- **使用方法**: 單一、組合、自訂使用策略

### ✅ [教材品質保證檢查清單](./quality-assurance-checklist.md)
- **整合檢查**: 任務前中後的完整檢查機制
- **強制執行**: 必須執行的品質保證步驟
- **影響評估**: 不同修改類型的檢查清單
- **工具支援**: 自動化檢查指令和腳本

## 🎯 使用指引

### 開發新教材時
1. 參考 `content-development-workflow.md` 的標準流程
2. 使用 `quality-assurance-checklist.md` 進行品質檢查
3. 遵循 `system-prompt-management.md` 的prompt管理標準

### 更新現有內容時
1. 先執行 `quality-assurance-checklist.md` 中的影響評估
2. 按照 `content-development-workflow.md` 的更新流程
3. 完成後進行完整的品質驗證

### 管理System Prompt時
1. 遵循 `system-prompt-management.md` 的分類標準
2. 使用標準格式撰寫新的prompt
3. 定期進行品質檢查和效果評估

## 📋 快速檢查清單

### ⚡ 每次任務開始前
- [ ] 檢查相關memory記錄
- [ ] 評估修改影響範圍
- [ ] 制定詳細更新計劃

### 🔧 執行過程中
- [ ] 按依賴順序進行修改
- [ ] 即時更新相關檔案
- [ ] 執行構建測試驗證

### ✅ 任務完成後
- [ ] 更新memory記錄
- [ ] 記錄依賴關係變更
- [ ] 進行完整品質檢查

## 🔗 相關資源

- **專案架構**: 參考根目錄 `CLAUDE.md`
- **內容來源**: `.content-source/outlines/` 和 `.content-source/references/`
- **System Prompt**: `reverse-system-prompt/` 資料夾
- **教材輸出**: `docs/chapters/` 資料夾

## 💡 改進建議

如發現工作流程中的問題或改進機會，請：
1. 記錄具體的問題和建議
2. 更新相關的workflow文檔
3. 在memory中記錄改進經驗
4. 與團隊分享最佳實踐

**記住：標準化工作流程是提升效率和品質的基礎，需要持續優化和改進！**