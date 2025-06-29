# 程式碼風格與慣例

## Markdown 文檔 (docs/)

### 檔案命名慣例
- 章節檔案: `01-installation-setup.md`，`02-understanding-context.md`
- 使用數字前綴和破折號分隔
- 英文小寫，用破折號連接單字

### 內容結構
- 使用 YAML front matter (如需要)
- 中文內容為主
- 統一的標題層級結構
- 包含學習目標、實作練習、總結

### Markdown 風格
- 使用 `#` 到 `######` 的標題層級
- 程式碼區塊使用三個反引號
- 中英文之間保持適當空格
- 使用表情符號增強可讀性 (🎯, 📚, 🚀, ✅)

## VitePress 配置

### TypeScript 配置檔案
- 使用 ES6 模組語法
- 明確的型別定義
- 結構化的配置物件

### 導航結構
- 中文導航標籤
- 階層式側邊欄
- 清晰的路徑結構

## Java 範例專案 (tutorial-sample-project/)

### Spring Boot 慣例
- 標準的 Maven 多模組結構
- Java 17 語法
- Spring Boot 3.1.0 注解風格
- RESTful API 設計

### 套件命名
- `com.ck.{service}` 格式
- 清晰的層級分離 (controller, service, dao)

### 檔案組織
- 依功能模組分離
- 標準的 Spring 架構模式