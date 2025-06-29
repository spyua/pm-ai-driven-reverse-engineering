# Files 服務

## 📋 服務概述

Cloudy Files 是檔案處理微服務，負責檔案的上傳、下載、存儲管理，以及與 Google Cloud Storage 的整合。

## 🏗️ 架構設計

### 主要組件
- **AOP**: 登入驗證切面
- **Controller**: 檔案處理控制器
- **DAO**: 檔案資訊數據訪問
- **Service**: 檔案處理業務邏輯
- **Utility**: GCS 上傳工具

### 關鍵檔案結構
```
cloudy-files/
└── src/main/java/com/ck/file/
    ├── CloudyFilesApplication.java      # 主應用程式
    ├── aop/
    │   └── LoginVeriftyAspect.java      # 登入驗證切面
    ├── controller/
    │   ├── FilePorcessController.java   # 檔案處理控制器
    │   └── dto/
    │       ├── FileInfoDto.java         # 檔案資訊 DTO
    │       └── FileInfoRelayDto.java    # 檔案傳遞 DTO
    ├── dao/
    │   ├── FileInfoDataAccess.java      # 檔案資訊數據訪問
    │   └── bean/
    │       ├── FileInfoPK.java          # 檔案資訊主鍵
    │       └── FileInfoPo.java          # 檔案資訊實體
    ├── service/
    │   ├── FileProcessService.java      # 檔案處理服務介面
    │   ├── impl/
    │   │   └── FileProcessServiceImpl.java  # 檔案處理服務實作
    │   └── bean/
    │       ├── FileInfoBo.java          # 檔案資訊業務物件
    │       └── FileInfoRelayBo.java     # 檔案傳遞業務物件
    └── utility/
        └── GCSUploadFileUtils.java      # GCS 上傳工具
```

## 🔧 核心功能

### 檔案管理
- 檔案上傳處理
- 檔案下載服務
- 檔案列表查詢
- 檔案元數據管理

### 雲端整合
- Google Cloud Storage 整合
- 檔案雲端上傳
- 雲端存儲管理

### 安全控制
- AOP 登入驗證
- JWT 令牌檢查
- 權限控制機制

## 📡 API 端點

### 檔案操作
```http
# 檔案上傳
POST /file/upload
Content-Type: multipart/form-data
Authorization: Bearer {jwt_token}

# 檔案下載
POST /file/getfile
Content-Type: application/json
Authorization: Bearer {jwt_token}
{
  "fileId": "file123",
  "fileName": "document.pdf"
}

# 檔案列表
POST /file/getFileList
Content-Type: application/json
Authorization: Bearer {jwt_token}
{
  "userId": "user123"
}
```

## 🎯 設計模式

### AOP 切面編程
```java
// LoginVeriftyAspect
- 統一的登入驗證邏輯
- 跨切面的安全控制
- 減少重複代碼
```

### 分層架構
```java
Controller → Service → DAO → Database
     ↓         ↓        ↓
   DTO ←→ Bo ←→ Po ←→ Entity
```

### 工具類設計
```java
// GCSUploadFileUtils
- Google Cloud Storage 操作封裝
- 檔案上傳下載工具
- 雲端服務抽象
```

## 🛡️ 安全特性

### AOP 安全驗證
- 方法級別的安全檢查
- JWT 令牌自動驗證
- 統一的異常處理

### 檔案安全
- 檔案訪問權限控制
- 用戶檔案隔離
- 安全的檔案傳輸

## 🚀 運行方式

```bash
# 進入目錄
cd tutorial-sample-project/cloudy-files

# 運行服務
mvn spring-boot:run

# 服務端口: 8081 (本地開發)
```

## 📊 資料模型

### FileInfoPo (資料庫實體)
- 檔案基本資訊
- 存儲路徑
- 檔案元數據

### FileInfoDto (資料傳輸)
- 客戶端資料格式
- API 響應結構

### FileInfoBo (業務物件)
- 業務邏輯處理
- 服務層資料模型

## 🎯 學習重點

通過分析這個服務，您可以學到：
- AOP 切面編程實踐
- 檔案上傳下載處理
- Google Cloud Storage 整合
- 微服務安全設計
- RESTful API 設計模式
- 分層架構最佳實踐

## 🔗 相關資源

- [Security 服務](./cloudy-security) - 安全認證依賴
- [Event 服務](./cloudy-event) - 檔案事件處理
- [微服務概覽](./sample-project) - 整體架構
- [第7章：黃金分析流程](/chapters/07-golden-analysis-flow) - 分析實踐