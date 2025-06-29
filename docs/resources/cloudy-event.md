# Event 服務

## 📋 服務概述

Cloudy Event 是事件處理微服務，基於 Google Cloud Functions 構建，負責處理存儲事件、圖片壓縮、以及異步事件處理。

## 🏗️ 架構設計

### 無伺服器架構
- **Google Cloud Functions**: 事件驅動執行
- **Storage Trigger**: 自動觸發機制
- **Event Processing**: 異步事件處理

### 關鍵檔案結構
```
cloudy-event/
└── src/main/java/gcfv2storage/
    ├── StorageFunction.java             # 主要存儲函數
    ├── service/
    │   ├── CompressImageService.java    # 圖片壓縮服務介面
    │   └── impl/
    │       └── CompressImageServiceImpl.java  # 圖片壓縮實作
    └── utility/
        ├── GCSUploadFileUtils.java      # GCS 上傳工具
        └── ImageUtils.java              # 圖片處理工具
```

## ⚡ 核心功能

### 存儲事件處理
- 檔案上傳事件監聽
- 自動觸發處理邏輯
- 事件資料解析

### 圖片處理
- 自動圖片壓縮
- 多種格式支援
- 品質優化處理

### 雲端整合
- Google Cloud Storage 整合
- Cloud Functions 部署
- 事件驅動架構

## 🔧 技術特性

### Google Cloud Functions v2
```java
// StorageFunction 特性
- 基於 Functions Framework
- 事件自動觸發
- 無伺服器執行環境
- 自動擴展能力
```

### 圖片壓縮處理
```java
// CompressImageService 功能
- 智能壓縮算法
- 保持圖片品質
- 多格式處理支援
- 批次處理能力
```

### 工具整合
```java
// ImageUtils 提供
- 圖片格式檢測
- 尺寸調整處理
- 品質優化
- 元數據處理
```

## 🎯 事件流程

### 自動處理流程
1. **檔案上傳** → Cloud Storage
2. **事件觸發** → Storage Function
3. **圖片檢測** → ImageUtils
4. **壓縮處理** → CompressImageService
5. **結果上傳** → Cloud Storage
6. **完成通知** → 相關服務

## ⚙️ 部署配置

### Cloud Functions 部署
```bash
# 部署函數
gcloud functions deploy cloudy-event-processor \
  --gen2 \
  --runtime=java17 \
  --region=asia-east1 \
  --source=. \
  --entry-point=gcfv2storage.StorageFunction \
  --trigger-bucket=your-bucket-name
```

### 環境變數配置
```bash
# 必要的環境變數
export GCP_PROJECT_ID=your-project-id
export STORAGE_BUCKET=your-storage-bucket
export COMPRESSION_QUALITY=80
```

## 🎯 設計模式

### 事件驅動模式
- 非同步事件處理
- 鬆耦合架構設計
- 自動化工作流程

### 服務抽象
- CompressImageService 介面設計
- 實作與介面分離
- 便於擴展和測試

### 工具模式
- GCSUploadFileUtils 雲端操作
- ImageUtils 圖片處理工具
- 功能模組化設計

## 📊 效能特性

### 無伺服器優勢
- 自動擴展能力
- 按需付費模式
- 零運維負擔

### 處理效率
- 並行事件處理
- 智能資源分配
- 快速響應時間

## 🎯 學習重點

通過分析這個服務，您可以學到：
- Google Cloud Functions 開發
- 事件驅動架構設計
- 無伺服器應用開發
- 圖片處理技術
- 雲端存儲整合
- 異步事件處理模式

## 🔗 相關資源

- [Files 服務](./cloudy-files) - 檔案上傳觸發源
- [微服務概覽](./sample-project) - 整體架構
- [系統提示模板](./prompts) - 事件處理分析
- [第8章：進階效率技巧](/chapters/08-advanced-techniques) - 自動化處理