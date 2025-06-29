# Security 服務

## 📋 服務概述

Cloudy Security 是安全認證核心模組，為整個微服務生態系統提供統一的安全機制，包括 JWT 令牌管理、密碼加密、以及認證授權。

## 🏗️ 架構設計

### 核心組件
- **Configuration**: 安全配置與 Bean 管理
- **DAO 層**: 用戶數據訪問
- **Filter**: JWT 請求過濾器
- **Handler**: 認證入口點處理
- **Service**: 加密服務
- **Utility**: JWT 工具與密碼編碼器

### 關鍵檔案結構
```
cloudy-security/
└── src/main/java/com/ck/security/
    ├── config/
    │   ├── BeanConfig.java              # Bean 配置
    │   └── SecurityConfig.java          # 安全配置
    ├── dao/
    │   ├── UserDataAccess.java          # 用戶數據訪問
    │   └── bean/
    │       └── AccountInfoPo.java       # 帳戶資訊實體
    ├── filter/
    │   └── JwtRequestFilter.java        # JWT 請求過濾器
    ├── handler/
    │   └── JwtAuthenticationEntryPoint.java  # JWT 認證入口點
    ├── service/
    │   ├── CryptoService.java           # 加密服務介面
    │   └── impl/
    │       ├── CryptoServiceImpl.java   # 加密服務實作
    │       └── JwtUserDetailsServiceImpl.java  # JWT 用戶詳情服務
    └── utility/
        ├── CloudKMSPasswordEncoder.java  # Cloud KMS 密碼編碼器
        └── JwtTokenUtil.java             # JWT 令牌工具
```

## 🔒 核心功能

### JWT 令牌管理
- 令牌生成與驗證
- 令牌刷新機制
- 令牌有效性檢查

### 密碼安全
- Cloud KMS 整合加密
- 密碼哈希處理
- 安全密碼編碼

### 認證授權
- Spring Security 整合
- 用戶認證處理
- 權限管理機制

## 🛡️ 安全特性

### Cloud KMS 整合
```java
// CloudKMSPasswordEncoder 提供
- Google Cloud KMS 密鑰管理
- 高級加密標準
- 雲端安全存儲
```

### JWT 安全
```java
// JwtTokenUtil 功能
- 令牌簽名驗證
- 有效期管理
- 用戶聲明提取
```

### 請求過濾
```java
// JwtRequestFilter 處理
- 每個請求的令牌驗證
- 安全上下文設置
- 異常處理機制
```

## 📡 API 整合

### 認證流程
1. **用戶登入** → Account 服務
2. **令牌生成** → Security 服務
3. **令牌驗證** → 各個服務請求
4. **權限檢查** → Security 配置

## 🎯 設計模式

### 配置模式
- `BeanConfig`: 統一 Bean 管理
- `SecurityConfig`: 安全策略配置

### 服務模式
- `CryptoService`: 加密服務抽象
- 實作與介面分離

### 工具模式
- `JwtTokenUtil`: JWT 操作工具類
- `CloudKMSPasswordEncoder`: 專用密碼編碼器

## 🚀 使用方式

### 依賴引入
```xml
<!-- 其他服務中引入 -->
<dependency>
    <groupId>com.ck</groupId>
    <artifactId>cloudy-security</artifactId>
    <version>1.0.0</version>
</dependency>
```

### 配置使用
```java
// 在其他服務中使用
@Autowired
private JwtTokenUtil jwtTokenUtil;

@Autowired
private CryptoService cryptoService;
```

## 🎯 學習重點

通過分析這個核心模組，您可以學到：
- Spring Security 深度配置
- JWT 令牌完整實作
- 雲端安全服務整合
- 微服務安全架構設計
- 加密服務抽象設計

## 🔗 相關資源

- [Account 服務](./cloudy-account) - 安全整合應用
- [Files 服務](./cloudy-files) - 檔案安全控制
- [系統提示模板](./prompts) - 安全分析提示
- [第3章：三大核心模式](/chapters/03-core-modes) - 分析模式應用