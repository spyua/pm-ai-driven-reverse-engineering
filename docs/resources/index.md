# 資源工具總覽

本頁面整合了AI驅動逆向工程教學所需的所有資源，包括範例專案、系統提示模板、學習素材等。

## 🎯 核心資源架構

### 📁 專案資源結構
```
pm-ai-driven-reverse-engineering/
├── 📖 docs/                      # 主要文檔系統
│   ├── chapters/                 # 教學章節
│   ├── resources/               # 資源工具頁面
│   └── checkpoints/             # 檢核評估
├── 🎯 tutorial-sample-project/    # Cloudy 微服務範例
│   ├── cloudy-account/           # 帳戶服務
│   ├── cloudy-security/          # 安全服務  
│   ├── cloudy-files/             # 檔案服務
│   └── cloudy-event/             # 事件服務
└── 📚 .content-source/           # 開發素材來源
    ├── tutorial-plan/            # 章節規劃指南
    ├── tutorial-material/        # 教學素材
    └── references/              # 參考資料
```

## 🎯 Cloudy 微服務範例專案

### 專案概述
Cloudy 是一個基於 Spring Boot 的微服務架構專案，專為教學設計，涵蓋了現代企業應用的核心功能模組。

### 服務架構
```mermaid
graph TB
    A[Frontend/API Gateway] --> B[cloudy-account<br/>帳戶服務]
    A --> C[cloudy-security<br/>安全服務]  
    A --> D[cloudy-files<br/>檔案服務]
    A --> E[cloudy-event<br/>事件服務]
    
    B --> F[(Account DB)]
    C --> G[(Auth DB)]
    D --> H[(File Storage)]
    E --> I[(Event Queue)]
```

### 🏠 [cloudy-account](./cloudy-account) - 帳戶服務
**功能**: 用戶註冊、登入、個人資料管理
**技術棧**: Spring Boot, Spring Data JPA, MySQL
**學習重點**: RESTful API 設計、資料庫操作、驗證機制

### 🔐 [cloudy-security](./cloudy-security) - 安全服務  
**功能**: JWT 認證、權限控制、安全策略
**技術棧**: Spring Security, JWT, Redis
**學習重點**: 安全架構、認證授權、會話管理

### 📁 [cloudy-files](./cloudy-files) - 檔案服務
**功能**: 檔案上傳、下載、管理、壓縮
**技術棧**: Spring Boot, MinIO, File Processing
**學習重點**: 檔案處理、物件儲存、非同步處理

### 📨 [cloudy-event](./cloudy-event) - 事件服務
**功能**: 事件發布、訂閱、通知推送
**技術棧**: Spring Boot, RabbitMQ, WebSocket
**學習重點**: 事件驅動架構、訊息佇列、即時通訊

## 🤖 AI 系統提示模板庫

### 模板分類

#### 📊 分析類模板
- **analyzer-system.prompt.md** - 程式碼結構分析
- **architecture-analyzer.prompt.md** - 系統架構分析  
- **dependency-analyzer.prompt.md** - 依賴關係分析
- **performance-analyzer.prompt.md** - 效能分析

#### 📝 文檔類模板  
- **documenter-system.prompt.md** - 技術文檔生成
- **api-documenter.prompt.md** - API 文檔生成
- **readme-generator.prompt.md** - README 生成
- **comment-generator.prompt.md** - 程式碼註解生成

#### 🛡️ 安全檢查模板
- **security_auth.prompt.md** - 安全認證檢查
- **vulnerability-scanner.prompt.md** - 漏洞掃描
- **code-security-review.prompt.md** - 程式碼安全審查

#### 📋 規劃類模板
- **planner-system.prompt.md** - 專案規劃
- **refactor-planner.prompt.md** - 重構規劃
- **migration-planner.prompt.md** - 遷移規劃

### [查看所有提示模板 →](./prompts)

## 📚 學習素材庫

### 核心學習指南
- **[Cursor 使用指南](./cursor-guide)** - AI 編輯器完整指南
- **[上下文管理](./context-guide)** - 提升 AI 理解效果的關鍵
- **[AI 模式解析](./ai-modes)** - 三大核心模式深度介紹

### 系統提示模板
- **[分析系統提示](./analyzer-prompt)** - 程式碼分析專用模板
- **[文檔系統提示](./documenter-prompt)** - 文檔生成專用模板
- **[提示模板概覽](./prompts)** - 完整模板系統說明

### 實戰案例研究
- **[Cloudy 微服務](./sample-project)** - 完整微服務專案解析
- **[帳戶服務分析](./cloudy-account)** - RESTful API 與 JPA 實踐
- **[安全服務分析](./cloudy-security)** - JWT 認證機制深度解析
- **[檔案服務分析](./cloudy-files)** - AOP 與雲端存儲整合
- **[事件服務分析](./cloudy-event)** - 無伺服器架構與事件處理

## 🛠️ 開發工具推薦

### 必備工具
- **Cursor** - AI 驅動的程式碼編輯器
- **Git** - 版本控制系統
- **Docker** - 容器化平台（可選）
- **Postman** - API 測試工具

### 輔助工具
- **JetBrains IntelliJ IDEA** - Java 開發環境（備選）
- **MySQL Workbench** - 資料庫管理工具
- **Redis Desktop Manager** - Redis 管理工具
- **Sourcetree** - Git GUI 工具

### 瀏覽器插件
- **JSON Formatter** - JSON 格式化
- **React Developer Tools** - React 開發工具
- **Wappalyzer** - 技術棧識別

## 📖 外部資源連結

### 官方文檔
- [Cursor 官方文檔](https://cursor.sh/docs)
- [Spring Boot 官方指南](https://spring.io/guides)
- [OpenAI API 文檔](https://platform.openai.com/docs)

### 社群資源
- [GitHub - Cursor 社群](https://github.com/getcursor)
- [Spring Boot 中文社群](https://springboot.io/)
- [微服務架構最佳實踐](https://microservices.io/)

### 學習平台
- [Spring Academy](https://spring.academy/)
- [Baeldung Spring 教學](https://www.baeldung.com/spring-boot)
- [阮一峰的網路日誌](https://www.ruanyifeng.com/blog/)

## 🤝 資源貢獻

### 如何貢獻資源
1. **提交新的範例專案** - 基於實際業務場景
2. **分享系統提示模板** - 經過驗證的有效模板
3. **貢獻教學素材** - 高品質的學習內容
4. **回報資源問題** - 發現錯誤或過時資訊

### 貢獻指南
- 📝 [專案結構說明](https://github.com/your-username/pm-ai-driven-reverse-engineering#project-structure)
- 🔍 [品質標準](../checkpoints/quality-standards)
- 💬 [問題回報](https://github.com/your-username/pm-ai-driven-reverse-engineering/issues)

---

## 🚀 開始使用資源

1. **選擇學習路徑** - 根據經驗選擇適合的章節
2. **下載範例專案** - 本地環境設置  
3. **配置開發工具** - Cursor 編輯器設定
4. **開始第一章** - [安裝與設定](../chapters/01-installation-setup)

**充分利用這些資源，開始您的AI驅動逆向工程學習之旅！** 🚀 