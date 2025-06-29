# Cloudy 微服務概覽

## 📋 專案簡介

Cloudy 是一個基於 Spring Boot 的微服務架構範例專案，專門為 AI 驅動逆向工程教學設計。這個專案展示了現代微服務的典型架構模式和實作方法。

## 🏗️ 架構概覽

```
Cloudy 微服務生態系統
├── cloudy-account     # 帳戶管理服務
├── cloudy-security    # 安全認證服務  
├── cloudy-files       # 檔案處理服務
└── cloudy-event       # 事件處理服務
```

## 🔧 技術棧

- **框架**: Spring Boot 3.1.0
- **語言**: Java 17
- **雲平台**: Google Cloud Platform
- **資料庫**: PostgreSQL (Google Cloud SQL)
- **安全**: Spring Security + JWT
- **加密**: Google Cloud KMS
- **存儲**: Google Cloud Storage

## 📚 服務詳情

### [Account 服務](./cloudy-account)
- 用戶註冊與登入
- 帳戶資訊管理
- 認證與授權

### [Security 服務](./cloudy-security)
- JWT 令牌管理
- 密碼加密處理
- 安全策略配置

### [Files 服務](./cloudy-files)
- 檔案上傳與下載
- 檔案元數據管理
- 雲端存儲整合

### [Event 服務](./cloudy-event)
- 事件處理與通知
- 異步消息處理
- Google Cloud Functions 整合

## 🎯 教學用途

這個專案特別適合學習：
- 微服務架構設計模式
- Spring Boot 最佳實踐
- 雲端服務整合
- 安全認證機制
- RESTful API 設計

## 🚀 快速開始

```bash
# 進入範例專案目錄
cd tutorial-sample-project

# 構建所有服務
mvn clean install

# 運行特定服務
cd cloudy-account
mvn spring-boot:run
```

## 🔗 相關資源

- [專案完整代碼](../../../tutorial-sample-project/)
- [第6章：專案準備](/chapters/06-project-preparation)
- [第7章：黃金分析流程](/chapters/07-golden-analysis-flow)