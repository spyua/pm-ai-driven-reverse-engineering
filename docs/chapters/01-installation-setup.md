# 第1章：初次見面 - 安裝與設定

## 學習目標

完成本章節後，您將能夠：
- 成功下載並安裝 Cursor 編輯器
- 完成首次啟動的初始設定，包含快捷鍵、AI 語言等
- 從 VSCode 等其他編輯器無縫遷移個人化設定
- 完成帳號註冊與登入，啟用 Pro 版試用

## 課前準備

- 一台可正常連上網路的電腦 (支援 Windows, macOS, Linux)
- (建議) 具備使用其他程式碼編輯器 (如 VSCode) 的基礎經驗

---

## 1.1 下載與安裝

### 步驟說明

1. **前往官網**：打開瀏覽器，造訪 [cursor.com](https://cursor.com)
2. **下載安裝檔**：點擊首頁的 "Download" 按鈕，網站會自動偵測您的作業系統並下載對應檔案
3. **執行安裝**：找到下載的安裝檔，雙擊執行，依照畫面指示完成安裝
4. **啟動應用程式**：透過桌面捷徑或應用程式選單啟動 Cursor

### 常見問題處理

- **下載速度緩慢**：建議使用穩定網路環境，或嘗試不同時段下載
- **安裝權限不足**：Windows 用戶請以管理員身份執行安裝程式
- **無法連接到伺服器**：檢查防火牆設定，確保允許 Cursor 連線

---

## 1.2 首次啟動設定

當您第一次開啟 Cursor 時，系統會引導您進行關鍵設定：

### ⌨️ 鍵盤快捷鍵 (Keyboard Shortcuts)

**目的**：讓您能立即上手，無須重新學習操作習慣
**操作**：如果您是從其他編輯器（如 VSCode, JetBrains）轉來的用戶，選擇您最熟悉的快捷鍵配置

### 🌐 AI 語言 (Language)

**目的**：設定 AI 助理與您溝通時使用的語言
**操作**：直接輸入您希望 AI 使用的語言名稱（例如：`Traditional Chinese`）
**提醒**：此設定後續可在 AI 相關規則中進行更細緻調整

### 📂 程式碼庫索引 (Codebase Indexing)

**目的**：Cursor 在本機對專案程式碼建立索引，讓 AI 更深入理解您的專案結構
**操作**：建議啟用此功能以獲得完整的 AI 功能體驗
**優勢**：提供更精準、更具上下文的程式碼建議與回答

### 💻 命令列捷徑 (CLI Shortcuts)

**目的**：讓您可以直接在終端機中透過指令快速啟動 Cursor
**操作**：可選擇性安裝 `cursor` 和 `code` 命令列指令
**使用方式**：安裝後可在任何路徑下輸入 `cursor .` 來開啟當前資料夾

---

## 1.3 VSCode 設定遷移

完成基礎設定後，Cursor 會詢問您是否要從 VSCode 匯入設定。

### 一鍵匯入功能

**操作**：點擊匯入按鈕，Cursor 會自動將您在 VSCode 中的設定完整複製過來，包含：
- 擴充功能 (Extensions)
- 佈景主題 (Themes)  
- 使用者設定 (User Settings)
- 鍵盤快捷鍵

**優勢**：這是強烈建議的步驟，可以讓您幾乎無痛地轉換工作環境

### 其他編輯器遷移

**從 JetBrains 系列遷移**：
- 在初始設定時選擇 "JetBrains" 的鍵盤快捷鍵配置
- 其他個人化設定需手動重新配置

---

## 1.4 帳號註冊與 Pro 版試用

### 註冊流程

1. **建立帳戶**：點擊 "Sign Up" (註冊) 或 "Login" (登入) 按鈕
2. **驗證方式**：可選擇使用 Email，或透過 Google、GitHub 帳戶快速註冊/登入
3. **完成登入**：在瀏覽器中完成驗證後，自動導回 Cursor 應用程式
4. **開始使用**：登入成功後，即可正式開始使用 Cursor 的所有功能

### ✨ Pro 版試用福利

首次註冊登入的使用者，將自動獲得為期 **14 天的 Cursor Pro 專業版免費試用**。

**Pro 版與免費版的主要差異**：
- 更多的 AI 使用額度
- 優先的伺服器回應速度
- 進階 AI 模型存取權限

**重要提醒**：
- 記住試用期限制，合理安排學習進度
- 可在設定中查看剩餘試用天數
- 試用期間充分體驗所有功能

---

## 隱私權與資料使用

在設定過程中，您會看到關於資料使用偏好的選項。Cursor 非常重視用戶隱私，建議您：

- 花時間閱讀官方的[隱私權政策](https://cursor.sh/privacy)
- 根據您的需求做出最合適的選擇
- 了解哪些資料會被用於改善 AI 功能

---

## 1.5 Cursor 介面操作基礎指南

> 💡 **PM專用指南**：本節將幫助您快速掌握Cursor的核心操作，專注於日常工作中最實用的功能

### 🖥️ 介面布局總覽

當您開啟Cursor時，會看到以下主要區域：

#### 左側：活動欄 (Activity Bar)
- **檔案總管** 📁：瀏覽專案檔案結構
- **搜尋** 🔍：跨檔案搜尋程式碼和文字
- **原始檔控制** 🔄：Git版本控制（進階功能）
- **延伸模組** 🧩：安裝額外功能（暫時不需要關注）

#### 中央：編輯區域
- **檔案標籤**：顯示已開啟的檔案
- **程式碼編輯器**：查看和編輯程式碼的主要區域
- **迷你地圖**：右側小縮圖，方便在長檔案中導航

#### 右側：AI助手區域
- **Chat面板** 💬：與AI進行對話的主要區域
- **Composer面板** ✍️：AI輔助寫作和編輯功能

#### 底部：狀態和工具
- **終端機** 💻：執行指令的地方（PM較少使用）
- **狀態列**：顯示檔案資訊和專案狀態

### 💬 AI Chat 功能基礎操作

#### 如何開啟Chat
1. **點擊右側Chat圖示** 或
2. **快捷鍵**：`Cmd + L`（Mac）/ `Ctrl + L`（Windows）
3. **從選單**：View → Chat

#### Chat的基本使用方式
```
# PM常用對話範例

1. 程式碼解釋
"請解釋這個檔案的主要功能"

2. 業務邏輯分析  
"這個功能對用戶有什麼價值？"

3. 技術複雜度評估
"這個功能開發難度如何？大概需要多少時間？"

4. 問題診斷
"這個錯誤訊息代表什麼？如何解決？"
```

#### Chat進階技巧
- **@檔案引用**：輸入`@檔案名稱`可以讓AI參考特定檔案
- **@資料夾引用**：輸入`@資料夾名稱`讓AI分析整個資料夾
- **對話記錄**：AI會記住本次會話的上下文，可以進行連續對話

### ✍️ Composer 功能入門

#### 什麼是Composer？
Composer是AI輔助寫作功能，特別適合：
- 生成技術文檔
- 撰寫需求說明
- 創建會議紀錄
- 產生報告模板

#### 如何使用Composer
1. **開啟方式**：`Cmd + I`（Mac）/ `Ctrl + I`（Windows）
2. **選擇文字後使用**：選中文字→按快捷鍵→AI會基於選中內容進行改寫
3. **空白處使用**：在空白處按快捷鍵→AI會幫您從零開始創建內容

#### PM常用Composer場景
```
# 範例使用場景

1. 功能說明文檔
"請為這個登入功能撰寫用戶手冊"

2. 需求整理
"將這些討論重點整理成需求文檔"

3. 會議摘要
"請將這個技術討論整理成會議摘要"
```

### 📁 檔案和專案管理

#### 開啟專案
1. **File → Open Folder**：開啟整個專案資料夾（推薦）
2. **File → Open File**：開啟單一檔案
3. **拖拉方式**：直接將資料夾拖到Cursor視窗

#### 檔案導航技巧
- **快速開啟**：`Cmd + P`（Mac）/ `Ctrl + P`（Windows）→ 輸入檔案名稱
- **檔案總管**：點擊左側檔案圖示瀏覽專案結構
- **標籤管理**：點擊檔案標籤上的`X`關閉檔案

#### PM友善的檔案類型識別
```
常見檔案類型：
📄 .md          → 文檔檔案（Markdown）
☕ .java        → Java程式碼
🌐 .html        → 網頁檔案  
🎨 .css         → 樣式檔案
⚙️ .json        → 設定檔案
📋 .txt         → 純文字檔案
```

### ⌨️ PM必知快捷鍵

#### 核心快捷鍵（必學）
| 功能 | Mac | Windows | 說明 |
|------|-----|---------|------|
| 開啟Chat | `Cmd + L` | `Ctrl + L` | 與AI對話 |
| 啟動Composer | `Cmd + I` | `Ctrl + I` | AI輔助寫作 |
| 快速開檔 | `Cmd + P` | `Ctrl + P` | 快速找檔案 |
| 全域搜尋 | `Cmd + Shift + F` | `Ctrl + Shift + F` | 搜尋程式碼 |
| 指令面板 | `Cmd + Shift + P` | `Ctrl + Shift + P` | 執行各種指令 |

#### 實用快捷鍵（進階）
| 功能 | Mac | Windows | 說明 |
|------|-----|---------|------|
| 複製行 | `Cmd + C` | `Ctrl + C` | 游標在行上即可複製整行 |
| 刪除行 | `Cmd + Shift + K` | `Ctrl + Shift + K` | 刪除當前行 |
| 多游標 | `Cmd + D` | `Ctrl + D` | 選擇相同文字 |
| 註解切換 | `Cmd + /` | `Ctrl + /` | 快速註解/取消註解 |

### 🔍 程式碼導航基礎

#### 查看程式碼結構
- **Outline面板**：顯示檔案的函數和類別結構
- **麵包屑導航**：編輯器頂部顯示目前位置
- **縮放功能**：`Cmd + +/-` 調整字體大小

#### 搜尋和過濾
```
搜尋技巧：
1. 檔案內搜尋：Cmd + F
2. 專案內搜尋：Cmd + Shift + F  
3. 檔案名稱搜尋：Cmd + P
4. 符號搜尋：Cmd + Shift + O（找函數和變數）
```

#### PM實用導航場景
- **找特定功能**：搜尋關鍵字如"login"、"payment"
- **查看錯誤日誌**：搜尋"error"、"exception"
- **了解API**：搜尋"controller"、"endpoint"

### 🎯 PM工作流程建議

#### 分析新專案的標準步驟
1. **開啟專案資料夾** → 了解整體結構
2. **查看README檔案** → 了解專案說明
3. **開啟Chat** → 詢問"請介紹這個專案的主要功能"
4. **瀏覽核心檔案** → 重點關注controller、service等
5. **使用搜尋功能** → 找特定業務邏輯

#### 日常使用建議
- **每天5分鐘**：熟悉一個新的快捷鍵
- **多用Chat**：有任何問題就問AI，不要猜測
- **保持整潔**：用完記得關閉不需要的檔案標籤
- **善用搜尋**：比手動瀏覽檔案更有效率

### 🔧 常見問題解決

#### Q1: Chat沒有反應？
**解決方案：**
1. 檢查網路連接
2. 確認已登入Pro帳號
3. 重新啟動Cursor

#### Q2: 找不到特定檔案？
**解決方案：**
1. 使用`Cmd + P`快速搜尋
2. 檢查檔案是否在`.gitignore`中被隱藏
3. 確認專案資料夾是否正確開啟

#### Q3: 介面太複雜看不懂？
**解決方案：**
1. 隱藏不需要的面板（View選單）
2. 專注於檔案總管和Chat功能
3. 善用全螢幕模式（F11）

---

## 實作練習

### 練習1：完整安裝流程
- **時間**：30分鐘
- **目標**：獨立完成整個安裝設定流程
- **檢核點**：能夠成功啟動 Cursor 並看到歡迎畫面

### 練習2：Cursor介面操作實戰
- **時間**：20分鐘  
- **目標**：熟練掌握基本介面操作
- **檢核點**：
  - ✅ 能夠開啟Chat並與AI對話
  - ✅ 會使用核心快捷鍵（Cmd+L, Cmd+P, Cmd+I）
  - ✅ 能夠開啟專案並導航檔案
  - ✅ 了解檔案總管、Chat面板的位置和用途

### 練習3：PM日常操作模擬
- **時間**：15分鐘
- **目標**：模擬PM日常分析程式碼的場景
- **檢核點**：
  - ✅ 能夠詢問AI關於程式碼功能的問題
  - ✅ 會使用搜尋功能找特定檔案
  - ✅ 能夠使用Composer生成簡單文檔

---

## 總結與下一步

恭喜您！現在您已經成功安裝並設定好 Cursor 編輯器。您不僅完成了基礎配置，還學會了如何從舊有的工作環境遷移設定。

**本章重點回顧**：
- 完成 Cursor 的下載安裝
- 設定個人化的使用環境
- 理解 AI 語言和索引功能的重要性
- 啟用 Pro 版試用，準備深度學習

下一章，我們將深入探討 **「理解上下文」**，這是掌握 Cursor AI 功能的核心基礎。