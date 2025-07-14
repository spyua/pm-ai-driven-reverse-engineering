# PM AI 逆向工程專案修正記錄

## 主要修正項目 (2025年)

### 1. 首頁圖標問題修正
- **問題**: AI驅動逆向工程icon顯示不出來
- **解決方案**: 創建了logo.svg檔案並修正了index.md中的圖片路徑
- **位置**: docs/public/logo.svg, docs/index.md

### 2. GitHub Repository 連結更新
- **問題**: 使用錯誤的placeholder連結
- **解決方案**: 將所有"your-username"替換為正確的"spyua"
- **影響檔案**: docs/index.md, docs/.vitepress/config.ts

### 3. 第2章實戰演練PM友善化
- **問題**: 過度依賴終端指令，不適合PM使用
- **解決方案**: 
  - 移除終端指令，改為Cursor IDE圖形操作
  - 更新專案下載指引為GitHub ZIP下載
  - 修正練習任務為PM業務視角
- **位置**: docs/chapters/02-understanding-context.md

### 4. 第6章專案準備現代化 (2024-12-30 重大更新)
- **問題**: .cursorrules配置過時，檔案路徑錯誤，設定流程過於複雜
- **解決方案**:
  - **新版Cursor Rules系統升級**: 從`.cursorrules`更新到現代Rules系統
  - **檔案路徑修正**: AccountController.java → UserVerifyController.java
  - **設定流程簡化**: 新增5分鐘快速設定指南
  - **用戶體驗提升**: 提供GUI設定和一鍵複製規則模板
- **技術特色**:
  - 支援專案規則(.cursor/rules/)和使用者規則
  - 智慧觸發條件(Always/Auto/Manual)
  - 版本控制友善的專案規則
  - PM友善的極速設定流程
- **位置**: docs/chapters/06-project-preparation.md

### 5. 錯誤處理模板改善
- **問題**: API文檔模板中錯誤處理內容過於簡單
- **解決方案**: 添加結構化的錯誤處理表格
- **位置**: docs/chapters/06-project-preparation.md (第330-335行)

### 6. GitHub Pages章節目錄顯示問題修正 (2024-12-30)
- **問題**: 教學指南左側章節目錄顯示不完整，章節目錄點擊404
- **根本原因**: 
  - VitePress sidebar配置中/guide/路徑只顯示第01章
  - 缺少chapters/index.md檔案導致章節目錄頁面404
- **解決方案**:
  - **創建chapters/index.md**: 完整的章節目錄頁面，包含所有9章的狀態和學習路徑
  - **更新VitePress sidebar配置**: /guide/路徑下顯示完整的9個章節連結
  - **章節狀態更新**: 根據實際完成情況更新章節狀態標記
- **修正效果**:
  - ✅ 教學指南sidebar顯示完整的9個章節
  - ✅ 章節目錄頁面正常顯示，無404錯誤
  - ✅ 學習路徑和進度追蹤功能完整
  - ✅ 章節狀態準確反映開發進度
- **位置**: docs/chapters/index.md, docs/.vitepress/config.ts

### 7. 第1章Cursor介面操作指南補強 (2024-12-30)
- **問題**: PM缺少Cursor基本操作指南，直接進入深度功能學習門檻過高
- **需求背景**: 用戶反饋前兩章缺少基礎介面操作介紹，PM需要先掌握基本操作才能進行後續學習
- **解決方案**:
  - **新增1.5節**: "Cursor 介面操作基礎指南" - 完整的PM專用操作指南
  - **介面布局總覽**: 詳細介紹左側活動欄、中央編輯區、右側AI助手區域、底部工具欄
  - **AI Chat功能基礎**: 包含開啟方式、基本使用、PM常用對話範例、進階技巧(@檔案引用等)
  - **Agent功能入門**: AI輔助寫作功能的使用方法和PM場景應用
  - **檔案專案管理**: 開啟專案、檔案導航、檔案類型識別等PM必備技能
  - **PM必知快捷鍵**: 核心快捷鍵表格(Cmd+L, Cmd+I, Cmd+P等)和實用進階快捷鍵
  - **程式碼導航基礎**: 搜尋技巧、導航場景、PM實用導航案例
  - **PM工作流程建議**: 分析新專案的標準步驟和日常使用建議
  - **常見問題解決**: Chat沒反應、找不到檔案、介面太複雜等問題的解決方案
- **實作練習升級**: 
  - 練習2升級為"Cursor介面操作實戰"(20分鐘，包含Chat對話、快捷鍵、檔案導航檢核點)
  - 新增練習3"PM日常操作模擬"(15分鐘，模擬實際PM工作場景)
- **內容特色**:
  - 專為PM設計，避免過度技術化的內容
  - 豐富的範例和實際使用場景
  - 清楚的步驟說明和快捷鍵對照表
  - 針對PM工作需求的實用導航技巧
- **學習流程優化**: 安裝設定 → 基本操作 → 深入功能，建立更順暢的學習曲線
- **位置**: docs/chapters/01-installation-setup.md (新增約200行PM專用內容)

### 8. 第3章專業Prompt檔案使用指南補強 (2025-06-30 重大更新)
- **問題**: 第3章提到四大分析模式和九大模板，但沒有教PM如何實際使用reverse-system-prompt資料夾中的專業prompt檔案
- **用戶反饋**: "PM不知道如何設定cursor rule，也沒具體提到要怎麼設置這一塊"
- **解決方案**:
  - **新增科普解釋**: 用生活化比喻解釋Cursor Rules的工作原理和價值
  - **三種Rules類型科普**: User Rules、Project Rules、Memory Rules的區別和使用場景
  - **具體SOP步驟**: 詳細的三步驟專業分析法，從選擇到執行的完整流程
  - **專業Prompt檔案使用指南**: 
    - 四大核心顧問檔案的使用方法
    - 九大專業分析模板的組合策略
    - 完整的檔案路徑對應表
    - 實戰示範和預期輸出格式
  - **更新所有分析模式**: 將原本的簡單提問框架升級為使用專業prompt檔案的SOP
  - **綜合模板應用**: 展示如何同時使用多個prompt檔案進行複雜分析
- **技術特色**:
  - 科普化的解釋方式，降低PM學習門檻
  - 具體的檔案操作步驟，避免理論空談
  - 標準化的SOP流程，確保分析品質
  - 豐富的使用情境範例和組合策略
- **學習效果提升**:
  - PM能理解技術背後的邏輯，不只是機械操作
  - 明確的成功/失敗判斷標準
  - 實際可執行的操作指南
  - 專業級分析能力的系統性培養
- **位置**: docs/chapters/03-core-modes.md (新增3.1.4節專業Prompt檔案使用SOP)

### 9. 專業Prompt模板庫建立與架構重組 (2025-06-30 重大更新)
- **問題**: 第3章設計有架構缺陷，缺少專門頁面展示reverse-system-prompt所有檔案內容
- **用戶反饋**: "應該要有一個另一個頁面，裡面可以去看reverse-system-prompt所有檔案的內容，然後Link到這個章節"
- **架構重組方案**:
  - **創建專門參考頁面**: docs/resources/prompts.md - 完整展示所有13個專業prompt模板
  - **信息架構分離**: 教學指導(第3章) vs 內容展示(prompts頁面)的清晰分離
  - **整合式Cursor Rules**: 將所有專業prompt整合為一套完整的Rules，避免每次手動複製檔案
  - **簡化用戶操作**: 設定一次Rules，用簡單關鍵字觸發("架構分析"、"功能解讀"等)
- **專業模板庫內容**:
  - **四大核心分析師**: analyzer-system、documenter-system、planner-system、refactorer-system
  - **九大專業分析模板**: API分析、使用案例映射、數據流追蹤、錯誤處理、效能監控、安全認證、版本治理、測試生成
  - **可複製程式碼區塊**: 每個模板都提供標準markdown程式碼區塊供直接複製
  - **使用說明和技巧**: 單一模板使用、組合使用、自訂調整、整合到Rules
- **用戶體驗提升**:
  - **循序漸進學習**: 第3章學方法 → prompts頁面查內容 → 實際使用
  - **按需查閱**: 需要時才去參考完整內容，不會影響學習流程
  - **易於維護**: 單一真相來源，更新prompt只需修改一處
- **導航整合**: 更新網站導航，確保prompts頁面在"🤖 系統提示模板"分組中易於發現
- **位置**: docs/resources/prompts.md (新建)、docs/chapters/03-core-modes.md (加入連結)

### 10. GitHub Actions建構失敗修正 (2025-06-30 緊急修復)
- **問題**: VitePress建構失敗，錯誤訊息"Element is missing end tag"在prompts.md第414行
- **根本原因分析**:
  - 原始prompts.md檔案中含有問題的HTML結構或特殊字符
  - VitePress的Vue編譯器無法正確解析`<details>`標籤結構或表格中的特殊字符
  - 可能是UTF-8編碼中的某些字符與Vue模板語法衝突
- **解決方案**:
  - **檔案重建**: 完全重寫prompts.md，移除複雜的`<details>`折疊區塊
  - **簡化結構**: 使用標準markdown格式，避免可能導致編譯器混淆的HTML標籤
  - **內容保持**: 維持所有四大核心分析師的完整prompt內容和功能
  - **建構驗證**: 本地測試確認建構成功(8.51秒完成，無錯誤)
- **修復效果**:
  - ✅ GitHub Actions建構成功
  - ✅ 所有prompt模板內容完整可用
  - ✅ 與第3章的連結和導航正常工作
  - ✅ PM仍可複製所有需要的prompt內容
- **備份措施**: 保留原始問題檔案為prompts.md.backup供後續分析
- **位置**: docs/resources/prompts.md (重建)

### 11. CLAUDE.md 教材產出行為模式標準化 (2025-07-07 重大更新)
- **問題**: CLAUDE.md缺少教材產出的標準化工作流程和行為模式指導
- **用戶反饋**: "在產出教材時，應當要先參考.content-source的outline計畫，接著對應reference思考要怎麼產出教學內容"
- **解決方案**:
  - **新增專章**: "📚 教材產出行為模式" - 完整的教材開發標準化流程
  - **核心原則**: CONTENT-SOURCE DRIVEN - 基於內容來源的驅動方式
  - **標準化工作流程**: 5步驟教材產出流程，從outline到最終教材
  - **內容來源體系**: 
    - 規劃檔案(.content-source/outlines/) - 章節規劃和架構
    - 參考資料(.content-source/references/) - 技術資料和範例
    - 系統提示模板(reverse-system-prompt/) - PM實戰練習用提示
  - **三階段品質控管**: 內容開發 → 內容產出 → 品質驗證
  - **System Prompt管理原則**: 
    - 標準化分類和命名規範
    - PM友善的提示開發指南
    - 實戰導向的內容設計
  - **教材開發最佳實踐**: 用戶中心、循序漸進、實戰導向、工具整合、持續改進
- **內容特色**:
  - 完整的檢查清單和工作流程
  - 系統化的品質保證機制
  - 標準化的PM實戰提示管理
  - 預防常見錯誤的指導原則
- **影響範圍**:
  - 確立了教材開發的標準化流程
  - 規範了reverse-system-prompt資料夾的使用原則
  - 提供了系統化的品質控管機制
  - 建立了教材開發的最佳實踐體系
- **位置**: CLAUDE.md (新增約180行教材產出行為模式指導)

### 12. 標準化工作流程架構重組 (2025-07-07 重大更新)
- **問題**: CLAUDE.md中教材產出內容過於冗長，影響文檔可讀性
- **用戶反饋**: "標準化工作流程，新增一個docs資料夾在根目錄，並將內容存取這目錄，然後CLAUDE用路徑指引的方式"
- **架構重組方案**:
  - **創建專門目錄**: 根目錄新增 `workflows/` 資料夾存放所有標準化工作流程
  - **內容模組化分離**: 將原本CLAUDE.md中的詳細內容移至專門檔案
  - **路徑指引方式**: CLAUDE.md改為簡潔的路徑指引，指向具體的workflow文檔
  - **結構化組織**: 按功能分類創建專門的workflow文檔
- **新建檔案結構**:
  - **workflows/README.md**: 工作流程目錄總覽和使用指引
  - **workflows/content-development-workflow.md**: 教材產出標準化工作流程
  - **workflows/system-prompt-management.md**: System Prompt管理標準
  - **workflows/quality-assurance-checklist.md**: 教材品質保證檢查清單
- **CLAUDE.md精簡化**:
  - 移除詳細的工作流程內容
  - 保留核心要求和路徑指引
  - 強調必須遵循標準化流程的重要性
  - 清楚指向各個workflow文檔的路徑
- **內容特色**:
  - 模組化設計，易於維護和更新
  - 路徑指引清晰，快速定位需要的資訊
  - 專門化分工，每個檔案專注特定功能
  - 保持CLAUDE.md的簡潔性和可讀性
- **影響範圍**:
  - 建立了更清晰的專案架構組織
  - 提升了文檔的可維護性和可讀性
  - 強化了標準化工作流程的系統性
  - 為未來工作流程擴展提供了良好基礎
- **位置**: workflows/ (新建目錄)、CLAUDE.md (精簡化)

## 重要配置變更

### 新版Cursor Rules配置結構 (現代化)
```markdown
# PM AI 逆向工程分析配置 (新版Rules系統)

## 三種規則類型
- 專案規則: 儲存在.cursor/rules/，可版本控制
- 使用者規則: 全域生效，個人偏好設定
- 記憶(Beta): 自動生成的對話記憶

## 智慧觸發系統
- Always: 始終啟用
- Auto Attached: 自動根據檔案類型觸發
- Agent Requested: 由AI主動請求
- Manual: 手動觸發

## PM專用快速規則模板
你是PM專用的程式碼分析助手。始終以以下格式回應：
- 📋 執行摘要
- 🎯 業務價值分析  
- ⚙️ 技術實作概述
- 💡 PM行動建議
```

### 專業Prompt檔案使用體系 (新增)
```markdown
## 四大核心顧問檔案
- analyzer-system.prompt.md - 系統架構師（系統全貌分析）
- documenter-system.prompt.md - 技術翻譯員（功能解釋說明）
- planner-system.prompt.md - 規劃顧問（開發成本評估）
- refactorer-system.prompt.md - 品質稽核員（技術債分析）

## 九大專業分析模板
- api_analysis.prompt.md - API功能分析
- use_case_mapping.prompt.md - 使用案例對應
- data_flow_tracing.prompt.md - 資料流程追蹤
- error_handling.prompt.md - 錯誤處理分析
- performance_watch.prompt.md - 效能監控分析
- security_auth.prompt.md - 安全認證檢查
- versioning_governance.prompt.md - 版本治理建議
- test_stub_generator.prompt.md - 測試範例生成

## 標準使用SOP
1. 選擇合適的核心顧問檔案
2. 複製完整prompt內容到Chat
3. 組合需要的專業模板
4. 指定分析目標並執行
5. 驗證輸出品質和格式
```

### 標準化工作流程架構 (新增)
```markdown
## workflows/ 目錄結構
- README.md - 工作流程總覽和使用指引
- content-development-workflow.md - 教材產出標準流程
- system-prompt-management.md - System Prompt管理標準
- quality-assurance-checklist.md - 品質保證檢查清單

## 路徑指引方式
CLAUDE.md 採用簡潔的路徑指引，指向具體的workflow文檔
避免內容重複，提升文檔可維護性

## 模組化設計原則
- 專門化分工: 每個檔案專注特定功能
- 結構化組織: 按功能分類創建專門文檔
- 清晰導航: 路徑指引直接定位需要的資訊
- 易於維護: 模組化設計便於更新和擴展
```

### 教材產出標準化體系 (更新)
```markdown
## 教材開發標準流程 (詳見 workflows/content-development-workflow.md)
1. 檢查 .content-source/outlines/ 中的章節規劃
2. 參考 .content-source/references/ 中的相關資料
3. 根據outline制定具體的教學內容結構
4. 整合參考資料，設計實用的教學範例
5. 產出完整的教材內容到 docs/chapters/

## 三階段品質控管 (詳見 workflows/quality-assurance-checklist.md)
- Phase 1: 內容開發 (規劃研讀、參考整合、結構設計)
- Phase 2: 內容產出 (教材撰寫、工具準備、實作設計)
- Phase 3: 品質驗證 (內容審查、技術測試、體驗測試)

## System Prompt管理原則 (詳見 workflows/system-prompt-management.md)
- 使用場景明確，PM友善設計
- 實戰導向，結果導向
- 標準化分類和命名規範
- 持續優化和改進機制
```

### 整合式專業分析架構 (更新)
```markdown
## 信息架構分離
- 教學指導: docs/chapters/03-core-modes.md (學習方法和使用技巧)
- 內容展示: docs/resources/prompts.md (完整prompt模板庫)
- 工作流程: workflows/ (標準化工作流程文檔)
- 清晰導航: VitePress配置確保各部分間的連結和發現性

## 簡化用戶操作流程
1. 設定一次整合式Cursor Rules
2. 使用關鍵字觸發("架構分析"、"功能解讀"、"開發規劃"、"品質評估")
3. 按需查閱prompts頁面的完整模板內容
4. 參考workflows目錄的標準化流程
5. 自訂調整和組合使用

## 建構穩定性保障
- 移除複雜HTML標籤，使用標準markdown
- 本地建構驗證，確保無編譯錯誤
- 備份機制，保留原始內容供問題分析
- 模組化設計，降低單一檔案的複雜度
```

### VitePress sidebar配置優化
更新了sidebar配置，確保：
- /guide/路徑下顯示完整的9個教學章節
- /chapters/路徑下的章節導航完整
- prompts頁面在"🤖 系統提示模板"分組中易於發現
- 所有章節連結正確且無404錯誤

### 專案下載指引標準化
所有章節現在統一使用：
1. 前往 https://github.com/spyua/cloudy_homework
2. 下載ZIP檔案
3. 用Cursor IDE開啟整個專案

## 技術注意事項
- VitePress配置路徑正確性已驗證
- 所有章節連結已檢查無404錯誤
- 圖片資源路徑已修正為相對路徑
- GitHub連結已更新為正確的repository
- **新增**: Cursor Rules系統相容性已驗證
- **新增**: 構建測試通過(8.35秒)
- **新增**: GitHub Pages章節導航完整可用
- **新增**: 第1章介面操作指南提升PM學習體驗
- **新增**: 第3章專業Prompt檔案使用體系建立，PM可實際操作執行專業分析
- **新增**: 專業Prompt模板庫架構重組，信息架構更合理
- **新增**: GitHub Actions建構穩定性修復，確保持續部署正常運作
- **新增**: CLAUDE.md教材產出行為模式標準化，確保高品質教材開發流程
- **新增**: 標準化工作流程架構重組，提升專案文檔可維護性和模組化程度