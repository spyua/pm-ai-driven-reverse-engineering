# 建議命令

## VitePress 文檔開發 (docs/)

### 開發命令
```bash
# 進入文檔目錄
cd docs

# 安裝依賴
npm install

# 本地開發伺服器 (開發時使用)
npm run docs:dev

# 構建文檔 (部署前測試)
npm run docs:build

# 預覽構建結果
npm run docs:preview
```

### 常用系統命令 (Linux)
```bash
# 檔案操作
ls -la          # 列出檔案詳細資訊
find . -name "*.md"  # 尋找 Markdown 檔案
grep -r "pattern" .  # 搜尋文字模式

# Git 操作
git status      # 檢查狀態
git add .       # 添加所有變更
git commit -m "message"  # 提交變更
git push        # 推送到遠端

# 專案結構檢查
tree            # 顯示目錄樹狀結構 (如果已安裝)
```

## 範例專案操作 (tutorial-sample-project/)

### Maven 命令
```bash
# 進入範例專案
cd tutorial-sample-project

# 編譯所有模組
mvn clean compile

# 打包所有模組
mvn clean package

# 安裝依賴
mvn clean install

# 執行特定模組
cd cloudy-account
mvn spring-boot:run

# 執行測試
mvn test
```

## GitHub Pages 部署
部署由 GitHub Actions 自動處理，當推送到 main 分支時自動觸發。