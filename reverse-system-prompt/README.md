


### analyzer-system.prompt 
- 指定角色 : 資深技術架構師
- 核心功能 : 進行高層次的系統解構，識別核心組件與其相互關係。
- 為 PM 提供的主要產出 : 架構圖、系統概覽、核心職責說明、關鍵數據流圖。
- 回答的關鍵商業問題 : 「這個系統是如何運作的？」

### documenter-system.prompt
- 指定角色 : 專家級技術文件撰寫員
- 核心功能 : 將特定程式碼片段的功能與商業邏輯轉化為易懂的文檔。
- 為 PM 提供的主要產出 : 清晰的目的陳述、簡單類比、輸入輸出說明、業務規則。
- 回答的關鍵商業問題 : 「這段程式碼具體是做什麼的？為什麼重要？」

### planner-system.prompt
- 指定角色 : 產品與工程策略師
- 核心功能 : 在現有程式碼基礎上，分析新功能的開發路徑與成本。
- 為 PM 提供的主要產出 : 高層次的專案計畫、影響範圍分析、風險評估、複雜度估算。
- 回答的關鍵商業問題 : 「要實現這個新功能，需要投入多少資源？」

### refactorer-system.prompt
- 指定角色 : 程式碼品質與可維護性倡導者
- 核心功能 : 識別程式碼中的技術債，並以商業術語解釋其潛在影響。
- 為 PM 提供的主要產出 : 技術債報告、風險分析、重構建議及其商業理由。
- 回答的關鍵商業問題 : 「我們的程式碼庫中是否存在會拖慢未來開發的隱藏風險？」



| 檔名                            | 目的                                     | typical trigger             | alwaysApply |
| ----------------------------- | -------------------------------------- | --------------------------- | ----------- |
| **api\_analysis.md**          | 基本：Endpoint、參數、回傳、錯誤                   | 全域                          | ✅           |
| **use\_case\_mapping.md**     | 把 Code ↔ Use-Case 對齊，列出 Actor、前置條件、主流程 | PM 問「這段程式對應哪個情境？」           | ✅           |
| **data\_flow\_tracing.md**    | 追蹤函式呼叫鏈、序列圖骨架                          | 選程式碼 + Prompt「畫出 Data Flow」 | ✅           |
| **error\_handling.md**        | 整理 Error Code、HTTP Status 與 UX 提示      | 當程式碼含 `catch / throws`      | 🔄          |
| **performance\_watch.md**     | 找出 N+1 查詢、CPU heavy loop，提出優化建議        | 查詢/迭代邏輯被選取                  | 🔄          |
| **security\_auth.md**         | 檢查 Auth Flow、Token 驗證、GDPR/GRC hint    | endpoint 名含 `auth`、`login`  | 🔄          |
| **versioning\_governance.md** | 建議 version、deprecation、rate-limit      | PM 問治理/變更                   | ↕           |
| **domain\_glossary.md**       | 維護DDD詞彙：「Policy」「Claim」…               | 任何對應領域詞彙出現                  | ✅           |
| **test\_stub\_generator.md**  | 生成 curl / Postman snippet              | PM 要「示範呼叫」                  | ↕           |
