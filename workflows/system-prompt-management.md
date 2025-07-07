# 📂 System Prompt 管理標準

## 🎯 分類和命名標準

```
reverse-system-prompt/
├── core-analyzers/              # 核心分析師提示
│   ├── analyzer-system.prompt.md
│   ├── documenter-system.prompt.md
│   └── planner-system.prompt.md
├── domain-specific/             # 領域專用提示
│   ├── security_auth.prompt.md
│   ├── performance_watch.prompt.md
│   └── data_flow.prompt.md
├── pm-practice/                 # PM實戰練習提示
│   ├── business_analysis.prompt.md
│   ├── technical_review.prompt.md
│   └── competitive_analysis.prompt.md
└── workflow-automation/         # 工作流程自動化
    ├── cursor_rules_generator.prompt.md
    └── analysis_reporter.prompt.md
```

## 📝 Prompt 開發指南

### 設計原則
- [ ] **使用場景明確**: 每個prompt都有清晰的使用場景說明
- [ ] **PM友善設計**: 使用產品經理熟悉的語言和概念
- [ ] **實戰導向**: 專注於解決實際工作中的問題
- [ ] **結果導向**: 明確輸出格式和期望結果
- [ ] **持續優化**: 根據使用反饋不斷改進

### 標準格式結構
```markdown
# [Prompt名稱]

## 使用場景
[具體描述何時使用此prompt]

## 輸入要求
[明確說明需要什麼資訊作為輸入]

## 輸出格式
[詳細規範期望的輸出結構和格式]

## Prompt內容
[實際的prompt文字]

## 使用範例
[提供具體的使用案例和預期結果]

## 注意事項
[使用時的注意點和常見問題]
```

## 🔄 管理工作流程

### 新增Prompt時
1. 確認使用場景和目標用戶
2. 參考現有prompt的格式和風格
3. 撰寫清晰的使用說明和範例
4. 測試prompt效果和輸出品質
5. 更新分類目錄和索引

### 更新Prompt時
1. 記錄變更原因和改進目標
2. 保留原版本作為備份
3. 測試新版本的效果
4. 更新相關教材和文檔
5. 通知相關使用者變更內容

### 品質檢查標準
- **功能完整性**: prompt能夠達成設計目標
- **輸出穩定性**: 多次使用產生一致的高品質輸出
- **使用便利性**: PM能夠輕鬆理解和使用
- **文檔完整性**: 包含完整的使用說明和範例
- **維護性**: 易於更新和改進

## 📋 四大核心顧問檔案標準

### analyzer-system.prompt.md - 系統架構師
**用途**: 系統全貌分析
**輸出格式**: 架構圖解、技術選型分析、擴展性評估
**PM應用**: 理解系統複雜度、評估技術風險

### documenter-system.prompt.md - 技術翻譯員  
**用途**: 功能解釋說明
**輸出格式**: 業務功能描述、使用流程說明、技術術語解釋
**PM應用**: 將技術實作轉譯為業務語言

### planner-system.prompt.md - 規劃顧問
**用途**: 開發成本評估
**輸出格式**: 工作量估算、資源需求分析、風險評估
**PM應用**: 專案規劃、資源配置、時程安排

### refactorer-system.prompt.md - 品質稽核員
**用途**: 技術債分析
**輸出格式**: 程式碼品質報告、改進建議、優先級排序
**PM應用**: 技術債管理、重構決策支援

## 🏷️ 九大專業分析模板

1. **api_analysis.prompt.md** - API功能分析
2. **use_case_mapping.prompt.md** - 使用案例對應
3. **data_flow_tracing.prompt.md** - 資料流程追蹤
4. **error_handling.prompt.md** - 錯誤處理分析
5. **performance_watch.prompt.md** - 效能監控分析
6. **security_auth.prompt.md** - 安全認證檢查
7. **versioning_governance.prompt.md** - 版本治理建議
8. **test_stub_generator.prompt.md** - 測試範例生成

## 標準使用SOP

### 單一模板使用
1. 選擇合適的核心顧問檔案
2. 複製完整prompt內容到Chat
3. 指定分析目標並執行
4. 驗證輸出品質和格式

### 組合模板使用
1. 確定分析的主要目標
2. 選擇核心顧問作為主要框架
3. 添加相關的專業模板
4. 明確指定各模板的執行順序
5. 整合多個輸出結果

### 自訂調整
1. 基於標準模板進行修改
2. 根據專案特性調整輸出格式
3. 添加專案特定的分析維度
4. 測試調整後的效果
5. 記錄成功的調整模式

**記住：System Prompt是PM分析能力的核心工具，必須保持高品質和易用性！**