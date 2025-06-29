# Cloudy Homework - 雲端服務整合專案

## 專案概述

Cloudy Homework 是一個基於 Spring Boot 和 Google Cloud Platform (GCP) 的多模組微服務應用程式，展示了雲端服務的整合應用，包括用戶認證、檔案管理、安全加密和事件處理等功能。

## 技術架構

```
cloudy-homework (多模組 Maven 專案)
├── cloudy-security     # 安全認證模組
├── cloudy-account      # 用戶帳戶管理模組  
├── cloudy-files        # 檔案管理模組
└── cloudy-event        # 事件處理模組 (Google Cloud Functions)
```

## 技術棧

- **後端框架**: Spring Boot 3.1.0
- **程式語言**: Java 17
- **雲端平台**: Google Cloud Platform
- **資料庫**: PostgreSQL (透過 Google Cloud SQL)
- **安全認證**: Spring Security + JWT
- **加密服務**: Google Cloud KMS
- **檔案儲存**: Google Cloud Storage
- **事件處理**: Google Cloud Functions
- **容器化**: Docker
- **建構工具**: Maven

## 模組功能介紹

### 🔐 cloudy-security
安全認證核心模組，提供跨模組的安全服務：
- JWT Token 生成和驗證
- Google Cloud KMS 加密/解密服務
- Spring Security 配置
- 用戶認證服務

**主要功能：**
- `CryptoService`: 整合 Google KMS 的加密服務
- `JwtTokenUtil`: JWT Token 工具類
- `JwtUserDetailsService`: 用戶詳細資訊服務

### 👤 cloudy-account
用戶帳戶管理模組：
- 用戶註冊和登入
- JWT 認證整合
- 用戶資料管理
- PostgreSQL 資料持久化

**API 端點：**
- `POST /login` - 用戶登入
- `POST /register` - 用戶註冊

### 📁 cloudy-files
檔案管理模組，整合 Google Cloud Storage：
- 檔案上傳到 Google Cloud Storage
- 檔案下載和列表查詢
- 檔案資料庫記錄管理
- 檔案壓縮處理整合

**API 端點：**
- `POST /file/upload` - 檔案上傳
- `POST /file/getfile` - 檔案下載
- `POST /file/getFileList` - 獲取檔案列表

### ⚡ cloudy-event
Google Cloud Functions 事件處理模組：
- Google Cloud Storage 事件監聽
- 自動圖片壓縮處理
- 事件驅動架構實現

**主要功能：**
- `StorageFunction`: 處理 Cloud Storage 事件
- `CompressImageService`: 圖片壓縮服務

## 系統需求

- Java 17+
- Maven 3.6+
- Docker (容器化部署)
- Google Cloud Platform 帳戶
- PostgreSQL 資料庫

## 安裝與部署

### 1. 環境準備

```bash
# 克隆專案
git clone <repository-url>
cd tutorial-sample-project

# 確認 Java 和 Maven 版本
java -version
mvn -version
```

### 2. Google Cloud 設定

在使用前需要設定以下 GCP 服務：
- Google Cloud Storage (檔案儲存)
- Google Cloud SQL PostgreSQL (資料庫)
- Google Cloud KMS (加密服務)
- Google Cloud Functions (事件處理)

### 3. 組態設定

各模組需要設定相應的 `application.properties` 或 `application.yml`：

```properties
# 資料庫連接
spring.datasource.url=jdbc:postgresql://[INSTANCE_IP]:5432/[DB_NAME]
spring.datasource.username=[USERNAME]
spring.datasource.password=[PASSWORD]

# GCP 設定
spring.cloud.gcp.storage.bucket=[BUCKET_NAME]
cloud.gcp.kms.id=[KMS_KEY_ID]
```

### 4. 編譯與打包

```bash
# 在根目錄執行
mvn clean compile
mvn clean package
```

### 5. Docker 部署

```bash
# 建構和執行 cloudy-account
cd cloudy-account
docker build -t cloudy-account .
docker run -p 8080:8080 cloudy-account

# 建構和執行 cloudy-files
cd ../cloudy-files
docker build -t cloudy-files .
docker run -p 8081:8080 cloudy-files
```

## 使用方式

### 1. 用戶註冊
```bash
curl -X POST http://localhost:8080/register \
  -H "Content-Type: application/json" \
  -d '{"userAccountID":"testuser","userPassword":"password123"}'
```

### 2. 用戶登入
```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"userAccountID":"testuser","userPassword":"password123"}'
```

### 3. 檔案上傳
```bash
curl -X POST http://localhost:8081/file/upload \
  -H "Authorization: Bearer [JWT_TOKEN]" \
  -F "file=@example.jpg"
```

### 4. 檔案列表查詢
```bash
curl -X POST http://localhost:8081/file/getFileList \
  -H "Authorization: Bearer [JWT_TOKEN]" \
  -H "Content-Type: application/json"
```

## 專案特色

1. **微服務架構**: 模組化設計，各服務職責分離
2. **雲端整合**: 深度整合 Google Cloud Platform 服務
3. **安全性**: JWT 認證 + Google KMS 加密
4. **事件驅動**: Cloud Functions 自動處理檔案事件
5. **容器化**: Docker 支援，便於部署和擴展

## 開發說明

### 專案結構
```
tutorial-sample-project/
├── pom.xml                 # 父專案 POM
├── cloudy-security/        # 安全模組
│   ├── src/main/java/com/ck/security/
│   └── pom.xml
├── cloudy-account/         # 帳戶模組
│   ├── src/main/java/com/ck/account/
│   ├── dockerfile
│   └── pom.xml
├── cloudy-files/          # 檔案模組
│   ├── src/main/java/com/ck/file/
│   ├── dockerfile
│   └── pom.xml
└── cloudy-event/          # 事件模組
    ├── src/main/java/gcfv2storage/
    └── pom.xml
```

### 依賴關係
- `cloudy-account` 依賴 `cloudy-security`
- `cloudy-files` 依賴 `cloudy-security`
- `cloudy-event` 為獨立的 Google Cloud Function

## 注意事項

1. 使用前請確保 GCP 服務已正確設定和啟用
2. 各模組的配置檔案需要根據實際環境調整
3. JWT Token 有效期限制，過期需要重新登入
4. 檔案上傳需要有效的認證 Token
5. Cloud Functions 部署需要額外的 GCP 權限設定

## 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 建立 Pull Request

## 授權條款

本專案為教學範例專案，請參考相關授權條款。

## 聯絡資訊

如有問題或建議，請透過以下方式聯絡：
- Email: [your-email@example.com]
- GitHub Issues: [repository-url]/issues
