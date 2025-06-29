# 專案結構

## 根目錄結構
```
pm-ai-driven-reverse-engineering/
├── docs/                       # VitePress 教學網站 (主要內容)
├── tutorial-sample-project/    # Spring Boot 範例專案
├── reverse-system-prompt/      # AI 分析提示模板
├── .content-source/            # 開發素材 (隱藏，不對外)
├── .github/workflows/          # GitHub Actions 部署配置
├── README.md                   # 專案說明
└── CLAUDE.md                   # Claude Code 操作指南
```

## 核心目錄說明

### docs/ - VitePress 教學網站
```
docs/
├── .vitepress/config.ts        # VitePress 配置
├── chapters/                   # 教學章節 (主要內容)
│   ├── README.md              # 章節目錄
│   └── 01-installation-setup.md  # 第一章 (已完成)
├── guide/                      # 指南頁面
├── resources/                  # 資源頁面
├── checkpoints/               # 檢查點頁面
├── index.md                   # 首頁
└── package.json               # npm 依賴配置
```

### tutorial-sample-project/ - 範例專案
```
tutorial-sample-project/
├── cloudy-account/            # 帳戶服務
├── cloudy-security/           # 安全服務
├── cloudy-files/             # 檔案服務
├── cloudy-event/             # 事件服務
└── pom.xml                   # Maven 父專案配置
```

### reverse-system-prompt/ - AI 提示模板
```
reverse-system-prompt/
├── analyzer-system.prompt.md      # 程式碼分析提示
├── documenter-system.prompt.md    # 文檔生成提示
├── planner-system.prompt.md       # 專案規劃提示
└── [其他專用提示模板]
```

## 重要配置檔案
- `.github/workflows/deploy.yml` - GitHub Pages 自動部署
- `docs/.vitepress/config.ts` - VitePress 網站配置
- `docs/package.json` - 前端依賴管理
- `.gitignore` - 版本控制忽略規則