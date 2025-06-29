# Account 服務

## 📋 服務概述

Cloudy Account 是帳戶管理微服務，負責處理用戶註冊、登入、以及帳戶相關的核心功能。

## 🏗️ 架構設計

### 主要組件
- **Controller 層**: 處理 HTTP 請求
- **Service 層**: 業務邏輯處理
- **Repository 層**: 數據訪問
- **Security 整合**: JWT 認證

### 關鍵檔案
```
cloudy-account/
├── src/main/java/com/ck/account/
│   ├── CloudyAccountApplication.java    # 主應用程式
│   └── controller/
│       ├── UserVerifyController.java    # 用戶驗證控制器
│       └── bean/
│           ├── UserInfoDto.java         # 用戶資訊 DTO
│           └── UserInfoRelayDto.java    # 用戶傳遞 DTO
└── src/main/resources/
    └── application.properties           # 應用配置
```

## 🔧 核心功能

### 用戶驗證
- 登入驗證處理
- JWT 令牌生成
- 用戶資訊查詢

### 資料傳輸
- UserInfoDto: 標準用戶資訊格式
- UserInfoRelayDto: 服務間資訊傳遞

## 📡 API 端點

### 用戶驗證相關
```http
POST /api/verify/login
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "password123"
}
```

## 🔒 安全特性

- 整合 cloudy-security 模組
- JWT 令牌驗證
- 密碼加密存儲
- 跨服務認證

## 🚀 運行方式

```bash
# 進入目錄
cd tutorial-sample-project/cloudy-account

# 運行服務
mvn spring-boot:run

# 服務端口: 8080
```

## 🎯 學習重點

通過分析這個服務，您可以學到：
- Spring Boot 控制器設計模式
- DTO 資料傳輸物件使用
- 微服務間的通信機制
- JWT 認證整合方式

## 🔗 相關資源

- [Security 服務](./cloudy-security) - 安全認證核心
- [微服務概覽](./sample-project) - 整體架構
- [第5章：產品偵探思維](/chapters/05-detective-mindset) - 分析方法