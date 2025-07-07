# 📚 教材產出標準化工作流程

## ⚡ 核心原則：CONTENT-SOURCE DRIVEN

### 🔍 教材開發標準流程

```
教材產出工作流程：
1. 檢查 .content-source/outlines/ 中的章節規劃
2. 參考 .content-source/references/ 中的相關資料
3. 根據outline制定具體的教學內容結構
4. 整合參考資料，設計實用的教學範例
5. 產出完整的教材內容到 docs/chapters/
```

### 📋 內容來源體系

**規劃檔案 (.content-source/outlines/)**
- 章節學習目標和架構設計
- 教學順序和難度分級
- 實作練習和檢核點設計
- 章節間的依賴關係規劃

**參考資料 (.content-source/references/)**
- 技術文檔和最佳實踐
- 實際案例和範例程式碼
- 工具使用指南和troubleshooting
- 產業經驗和專家建議

**系統提示模板 (reverse-system-prompt/)**
- 專業AI分析師提示模板
- 特定任務的系統提示
- PM實戰練習用的提示工具
- 標準化的分析工作流程

## 🎯 教材產出檢查清單

### 📖 內容開發前準備
- [ ] **Outline Review**: 仔細閱讀 `.content-source/outlines/` 對應章節規劃
- [ ] **Reference Study**: 深入研究 `.content-source/references/` 相關資料
- [ ] **Learning Objectives**: 明確該章節的學習目標和成果
- [ ] **Prerequisite Check**: 確認前置知識和技能要求
- [ ] **Difficulty Assessment**: 評估內容難度和學習時間

### 📝 內容結構設計
- [ ] **Learning Flow**: 設計清晰的學習路徑和步驟
- [ ] **Practical Examples**: 準備實用的範例和案例
- [ ] **Hands-on Practice**: 設計動手實作的練習環節
- [ ] **Checkpoint Design**: 規劃學習檢核點和自我評估
- [ ] **Troubleshooting**: 預見常見問題並準備解決方案

### 🛠️ 工具整合要求
- [ ] **Prompt Templates**: 確保相關的System Prompt已放入 `reverse-system-prompt/`
- [ ] **Tool Integration**: 整合Cursor Rules和專業分析工具
- [ ] **Workflow Optimization**: 優化PM的實際工作流程
- [ ] **Resource Linking**: 建立與相關資源的連結
- [ ] **Practice Materials**: 準備完整的練習材料

## 🔄 教材品質控管流程

### Phase 1: 內容開發 (CONTENT DEVELOPMENT)
```
規劃研讀 (Outline Study)
├── 分析章節目標和架構
├── 理解學習路徑設計
└── 確認輸出要求和標準

參考整合 (Reference Integration)
├── 深入研究相關資料
├── 篩選適用的範例和案例
└── 設計實用的教學內容

結構設計 (Structure Design)
├── 規劃章節內容組織
├── 設計學習活動和練習
└── 確保內容的連貫性
```

### Phase 2: 內容產出 (CONTENT PRODUCTION)
```
教材撰寫 (Content Writing)
├── 依據outline撰寫教學內容
├── 整合參考資料和範例
└── 確保內容的實用性

工具準備 (Tool Preparation)
├── 建立相關的System Prompt
├── 準備Cursor Rules設定
└── 整合專業分析工具

實作設計 (Practice Design)
├── 設計動手實作環節
├── 準備練習材料和範例
└── 建立學習檢核機制
```

### Phase 3: 品質驗證 (QUALITY ASSURANCE)
```
內容審查 (Content Review)
├── 檢查內容完整性和正確性
├── 確認學習目標達成度
└── 驗證實作練習的有效性

技術測試 (Technical Testing)
├── 測試所有範例和工具
├── 驗證System Prompt的效果
└── 確保構建和部署正常

體驗測試 (Experience Testing)
├── 模擬PM的學習體驗
├── 測試工作流程的順暢度
└── 收集並改善使用者體驗
```

## 🎓 教材開發最佳實踐

### 內容設計原則
1. **用戶中心**: 從PM的實際需求出發設計內容
2. **循序漸進**: 遵循從簡單到複雜的學習曲線
3. **實戰導向**: 每個章節都要有實際的應用場景
4. **工具整合**: 將AI工具無縫整合到工作流程中
5. **持續改進**: 根據使用反饋優化教材內容

### 品質保證機制
- **技術驗證**: 所有程式碼和工具都必須測試通過
- **內容審查**: 確保資訊準確性和教學有效性
- **用戶體驗**: 模擬真實使用場景進行體驗測試
- **依賴檢查**: 確保所有相關檔案的一致性
- **版本控制**: 維護教材的版本歷史和變更記錄

## ⚠️ 教材開發注意事項

### 常見錯誤預防
- **避免技術導向**: 不要讓技術實作主導教學設計
- **避免內容冗長**: 保持內容精簡和重點突出
- **避免工具複雜**: 確保工具和流程的簡潔性
- **避免缺乏實踐**: 必須包含充分的動手練習
- **避免更新滯後**: 及時更新過時的資訊和工具

### 成功要素
- **清晰的學習路徑**: 學習者能夠明確知道下一步該做什麼
- **豐富的實戰範例**: 提供真實場景的分析案例
- **有效的工具整合**: AI工具能夠真正提升工作效率
- **完整的支援資源**: 包含troubleshooting和進階參考
- **持續的內容更新**: 跟上技術發展和用戶需求變化

**記住：優質的教材不僅要傳授知識，更要培養PM在AI時代的核心能力！**