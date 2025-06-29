# Claude Code Agent 開發指南

> 📝 供 Claude Code Agent 使用的詳細開發流程指南

## 總體目標

建立一套完整的AI驅動逆向工程教學系統，包含9個教學章節，使用VitePress建立專業的文檔網站。

## 開發環境架構

### 技術棧選擇
- **文檔框架**: VitePress (Vue.js生態)
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions
- **內容格式**: Markdown + Vue組件

### 目錄結構
```
pm-ai-driven-reverse-engineering/
├── docs/                       # VitePress 根目錄
│   ├── .vitepress/            # VitePress 配置
│   │   ├── config.ts          # 主配置文件
│   │   └── theme/             # 自定義主題
│   ├── guide/                 # 教學章節
│   │   ├── ch01.md           # 第01章
│   │   ├── ch02.md           # 第02章
│   │   └── ...
│   ├── resources/             # 資源頁面
│   └── index.md              # 首頁
├── tutorial-plan/             # 章節規劃指南
├── tutorial-material/         # 教學素材
├── tutorial-sample-project/   # 範例專案
├── reverse-system-prompt/     # 系統提示模板
└── DEVELOPMENT_GUIDE.md       # 本指南
```

## 階段一：VitePress環境設置

### 1.1 初始化VitePress
```bash
# 移除舊的HTML文件
rm -rf docs/index.html docs/assets docs/chapters docs/checkpoints

# 初始化VitePress
cd docs
npm init -y
npm install -D vitepress vue
mkdir -p .vitepress guide resources
```

### 1.2 基礎配置文件
建立 `docs/.vitepress/config.ts`:
```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI驅動逆向工程教學',
  description: '使用AI工具進行程式碼逆向工程的完整教學系統',
  lang: 'zh-TW',
  
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '教學指南', link: '/guide/' },
      { text: '資源', link: '/resources/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '基礎篇',
          items: [
            { text: '第01章：安裝與設定', link: '/guide/ch01' },
            { text: '第02章：理解上下文', link: '/guide/ch02' },
            { text: '第03章：三大核心模式', link: '/guide/ch03' }
          ]
        },
        {
          text: '進階篇',
          items: [
            { text: '第04章：AI模型選擇', link: '/guide/ch04' },
            { text: '第05章：產品偵探思維', link: '/guide/ch05' },
            { text: '第06章：專案準備', link: '/guide/ch06' }
          ]
        },
        {
          text: '實戰篇',
          items: [
            { text: '第07章：黃金分析流程', link: '/guide/ch07' },
            { text: '第08章：進階效率技巧', link: '/guide/ch08' },
            { text: '第09章：挑戰與展望', link: '/guide/ch09' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/pm-ai-driven-reverse-engineering' }
    ],
    
    footer: {
      message: '基於 MIT 授權發布',
      copyright: 'Copyright © 2024 AI Tutorial Team'
    }
  },
  
  // GitHub Pages 部署配置
  base: '/pm-ai-driven-reverse-engineering/'
})
```

### 1.3 更新package.json
```json
{
  "name": "ai-driven-reverse-engineering-docs",
  "version": "1.0.0",
  "description": "AI驅動逆向工程教學文檔",
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.0.0",
    "vue": "^3.3.0"
  }
}
```

## 階段二：內容架構設計

### 2.1 章節開發順序
嚴格按照以下順序開發：

1. **第01章：安裝與設定** (`docs/guide/ch01.md`)
2. **第02章：理解上下文** (`docs/guide/ch02.md`)
3. **第03章：三大核心模式** (`docs/guide/ch03.md`)
4. **第04章：AI模型選擇** (`docs/guide/ch04.md`)
5. **第05章：產品偵探思維** (`docs/guide/ch05.md`)
6. **第06章：專案準備** (`docs/guide/ch06.md`)
7. **第07章：黃金分析流程** (`docs/guide/ch07.md`)
8. **第08章：進階效率技巧** (`docs/guide/ch08.md`)
9. **第09章：挑戰與展望** (`docs/guide/ch09.md`)

### 2.2 章節撰寫流程

#### 步驟1：分析規劃指南
```bash
# 仔細閱讀對應章節的規劃指南
cat tutorial-plan/第XX章-XXX規劃指南.md
```

#### 步驟2：研究範例專案
重點分析 `tutorial-sample-project` 中的：
- `cloudy-account`（帳戶服務）
- `cloudy-security`（安全服務）
- `cloudy-files`（檔案服務）
- `cloudy-event`（事件服務）

#### 步驟3：整合教學素材
參考 `tutorial-material` 目錄中的：
- Cursor編輯器使用指南
- 上下文理解與應用
- AI模式深度解析

#### 步驟4：運用系統提示
從 `reverse-system-prompt` 選擇合適的提示模板：
- `analyzer-system.prompt.md` - 程式碼分析
- `documenter-system.prompt.md` - 文件生成
- `planner-system.prompt.md` - 規劃階段

### 2.3 標準章節結構

每個章節必須遵循以下結構（VitePress Markdown格式）：

```markdown
---
title: 第XX章：章節標題
description: 章節簡介
---

# 第XX章：章節標題

## 📋 學習目標
- [ ] 明確的學習目標1
- [ ] 明確的學習目標2
- [ ] 明確的學習目標3

## 🎯 前置知識
- 必要的預備知識
- 相關章節連結

## 💡 核心概念

### 理論基礎（20%內容比重）
- 概念解釋
- 原理說明
- 重要性分析

## 🛠️ 實際操作

### 環境準備
::: tip 提示
操作前的重要提醒
:::

### 操作步驟（50%內容比重）

#### 步驟一：XXX
```bash
# 命令示例
cursor --help
```

#### 步驟二：XXX
基於 tutorial-sample-project 的實例演示

::: code-group
```java [Java代碼]
// tutorial-sample-project 中的實際代碼
public class SecurityConfig {
    // 實現邏輯
}
```

```typescript [配置文件]
// 相關配置
export default {
    // 配置項目
}
```
:::

## 🎮 實戰演練

### 練習一：基礎操作（20%內容比重）
基於真實專案的案例練習

### 練習二：進階應用
結合前面章節知識的綜合練習

## ✅ 總結與檢查

### 學習成果驗證（10%內容比重）
- [ ] 檢查項目1
- [ ] 檢查項目2
- [ ] 檢查項目3

### 知識點總結
::: details 點擊查看詳細總結
本章節的核心要點...
:::

## 🔍 延伸閱讀
- [相關資源連結](link)
- [下一章節預告](next-chapter)

---

::: info 檢查點 Checkpoint
- [ ] 內容完整度檢查
- [ ] 實用性驗證  
- [ ] 範例可執行性測試
- [ ] 格式一致性檢查
:::
```

## 階段三：品質控制與審核

### 3.1 內容品質標準

**必要指標**：
- [ ] 每章至少3000字詳細內容
- [ ] 至少5個實際操作範例
- [ ] 完整的程式碼片段和截圖
- [ ] 所有範例都能執行驗證

**結構完整性**：
- [ ] 遵循標準VitePress格式
- [ ] 學習目標明確具體
- [ ] 操作步驟詳細完整
- [ ] 包含實戰演練環節

**專案整合度**：
- [ ] 基於 tutorial-sample-project 設計範例
- [ ] 活用 reverse-system-prompt 提示模板
- [ ] 整合 tutorial-material 相關內容
- [ ] 與前後章節知識點串聯

### 3.2 審核報告制度

每章完成後，建立審核文件：`docs/checkpoints/ch0X-review.md`

```markdown
# 第0X章審核報告

## ✅ 完成狀況

**完成日期**: 2024-XX-XX
**審核狀態**: 🟢 通過 / 🟡 待修正 / 🔴 需重做

## 📊 品質指標

| 指標 | 目標 | 實際 | 狀態 |
|------|------|------|------|
| 字數 | 3000+ | XXXX | ✅ |
| 範例數 | 5+ | X | ✅ |
| 截圖數 | 10+ | X | ✅ |
| 程式碼段 | 15+ | X | ✅ |

## 🎯 內容評估

### 優點
- 優點1
- 優點2

### 改進建議
- 建議1
- 建議2

## 🔗 下章準備
- [ ] 知識點銜接確認
- [ ] 範例專案準備
- [ ] 素材資源整理
```

## 階段四：部署與維護

### 4.1 GitHub Actions 配置

更新 `.github/workflows/deploy.yml` 用於VitePress：

```yaml
name: Deploy VitePress to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
          cache-dependency-path: docs/package-lock.json
          
      - name: Setup Pages
        uses: actions/configure-pages@v3
        
      - name: Install dependencies
        run: cd docs && npm ci
        
      - name: Build with VitePress
        run: cd docs && npm run docs:build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### 4.2 本地開發工作流

```bash
# 啟動開發服務器
cd docs
npm run docs:dev

# 建構生產版本
npm run docs:build

# 預覽建構結果
npm run docs:preview
```

## 執行檢查清單

### 環境設置 ✅
- [ ] VitePress 環境初始化完成
- [ ] 配置文件建立完成
- [ ] GitHub Actions 更新完成
- [ ] 本地開發環境測試通過

### 內容開發 🔄
- [ ] 第01章開發完成並審核通過
- [ ] 第02章開發完成並審核通過
- [ ] 第03章開發完成並審核通過
- [ ] 第04章開發完成並審核通過
- [ ] 第05章開發完成並審核通過
- [ ] 第06章開發完成並審核通過
- [ ] 第07章開發完成並審核通過
- [ ] 第08章開發完成並審核通過
- [ ] 第09章開發完成並審核通過

### 品質保證 📋
- [ ] 所有章節遵循標準結構
- [ ] 跨章節知識點連貫性檢查
- [ ] 範例專案整合度驗證
- [ ] 系統提示模板活用度檢查

## 🎯 成功關鍵因素

1. **嚴格順序執行**：按章節順序完成，確保知識點連貫
2. **深度資源整合**：充分利用existing resources
3. **實用性優先**：所有範例必須可執行可驗證
4. **持續品質控制**：每章完成即進行checkpoint審核

---

**開始第一章的開發工作！** 🚀 