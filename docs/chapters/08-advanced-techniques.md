# 第8章：進階效率技巧 - 自動化與批次處理

## 📖 學習目標

完成本章節後，您將能夠：
- 🚀 掌握自動化分析腳本開發
- ⚡ 建立高效的批次處理工作流程
- 🔧 客製化個人專用的效率工具
- 📊 建立智能化的報告生成系統

## 🌟 進階效率概述

### 為什麼需要進階效率技巧？
在掌握了基礎的程式碼分析能力後，您會發現：
- **重複工作過多**：相似的分析流程重複執行
- **時間成本高**：手動分析耗費大量時間
- **結果不一致**：不同時間分析結果存在差異
- **難以規模化**：無法有效處理大型專案

### 效率提升的四個層次
1. **工具層**：使用更強大的分析工具
2. **自動化層**：開發自動化分析腳本
3. **智能化層**：建立智能化的決策系統
4. **生態層**：構建完整的效率生態

## 🔧 自動化腳本開發

### 腳本一：專案快速掃描器

#### 目標
5分鐘內完成專案的基礎資訊收集和初步評估。

#### 腳本實作

**Bash 版本：**
```bash
#!/bin/bash
# project-scanner.sh - 專案快速掃描器

PROJECT_PATH=${1:-.}
OUTPUT_DIR="analysis-reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_FILE="$OUTPUT_DIR/scan_report_$TIMESTAMP.md"

echo "🔍 開始掃描專案: $PROJECT_PATH"

# 建立報告目錄
mkdir -p $OUTPUT_DIR

# 開始生成報告
cat > $REPORT_FILE << 'EOF'
# 專案掃描報告

## 📋 基本資訊
EOF

echo "- **掃描時間**: $(date)" >> $REPORT_FILE
echo "- **專案路徑**: $PROJECT_PATH" >> $REPORT_FILE
echo "" >> $REPORT_FILE

# 1. 專案結構分析
echo "## 🏗️ 專案結構" >> $REPORT_FILE
echo "\`\`\`" >> $REPORT_FILE
tree $PROJECT_PATH -L 3 -I 'node_modules|.git|target|build' >> $REPORT_FILE 2>/dev/null || ls -la $PROJECT_PATH >> $REPORT_FILE
echo "\`\`\`" >> $REPORT_FILE
echo "" >> $REPORT_FILE

# 2. 檔案統計
echo "## 📊 檔案統計" >> $REPORT_FILE
echo "| 檔案類型 | 數量 | 程式碼行數 |" >> $REPORT_FILE
echo "|----------|------|-----------|" >> $REPORT_FILE

# 統計不同類型檔案
for ext in java js ts py md json xml yml yaml; do
    count=$(find $PROJECT_PATH -name "*.$ext" -type f | wc -l)
    if [ $count -gt 0 ]; then
        lines=$(find $PROJECT_PATH -name "*.$ext" -exec wc -l {} + 2>/dev/null | tail -1 | awk '{print $1}' || echo "0")
        echo "| .$ext | $count | $lines |" >> $REPORT_FILE
    fi
done
echo "" >> $REPORT_FILE

# 3. 技術棧檢測
echo "## 🛠️ 技術棧檢測" >> $REPORT_FILE

# 檢測 Java 專案
if [ -f "$PROJECT_PATH/pom.xml" ] || [ -f "$PROJECT_PATH/build.gradle" ]; then
    echo "- **Java 專案**: ✅" >> $REPORT_FILE
    if [ -f "$PROJECT_PATH/pom.xml" ]; then
        echo "  - 構建工具: Maven" >> $REPORT_FILE
        # 提取 Spring Boot 版本
        if grep -q "spring-boot" "$PROJECT_PATH/pom.xml"; then
            spring_version=$(grep -A 1 "spring-boot-starter-parent" "$PROJECT_PATH/pom.xml" | grep "version" | sed 's/.*<version>\(.*\)<\/version>.*/\1/' | tr -d ' ')
            echo "  - Spring Boot: $spring_version" >> $REPORT_FILE
        fi
    fi
    if [ -f "$PROJECT_PATH/build.gradle" ]; then
        echo "  - 構建工具: Gradle" >> $REPORT_FILE
    fi
fi

# 檢測 Node.js 專案
if [ -f "$PROJECT_PATH/package.json" ]; then
    echo "- **Node.js 專案**: ✅" >> $REPORT_FILE
    # 提取主要依賴
    if command -v jq >/dev/null 2>&1; then
        framework=$(jq -r '.dependencies | keys[]' "$PROJECT_PATH/package.json" | grep -E "(react|vue|angular|express)" | head -1)
        if [ "$framework" != "" ]; then
            echo "  - 主要框架: $framework" >> $REPORT_FILE
        fi
    fi
fi

# 檢測 Python 專案
if [ -f "$PROJECT_PATH/requirements.txt" ] || [ -f "$PROJECT_PATH/setup.py" ]; then
    echo "- **Python 專案**: ✅" >> $REPORT_FILE
fi

echo "" >> $REPORT_FILE

# 4. 安全檢查
echo "## 🔒 安全檢查" >> $REPORT_FILE
security_issues=0

# 檢查敏感檔案
if find $PROJECT_PATH -name "*.key" -o -name "*.pem" -o -name ".env" | grep -q .; then
    echo "- ⚠️ 發現敏感檔案" >> $REPORT_FILE
    find $PROJECT_PATH -name "*.key" -o -name "*.pem" -o -name ".env" | sed 's/^/  - /' >> $REPORT_FILE
    security_issues=$((security_issues + 1))
fi

# 檢查硬編碼密碼
if grep -r -i "password.*=" $PROJECT_PATH --include="*.java" --include="*.js" --include="*.py" | grep -v ".git" >/dev/null; then
    echo "- ⚠️ 可能的硬編碼密碼" >> $REPORT_FILE
    security_issues=$((security_issues + 1))
fi

if [ $security_issues -eq 0 ]; then
    echo "- ✅ 未發現明顯安全問題" >> $REPORT_FILE
fi

echo "" >> $REPORT_FILE

# 5. 建議行動
echo "## 💡 建議行動" >> $REPORT_FILE
echo "1. **深度分析**: 使用第7章的黃金分析流程進行詳細分析" >> $REPORT_FILE
echo "2. **重點關注**: 程式碼量較大的模組需要優先分析" >> $REPORT_FILE
if [ $security_issues -gt 0 ]; then
    echo "3. **安全優先**: 優先處理發現的安全問題" >> $REPORT_FILE
fi
echo "4. **工具輔助**: 配置適合的 cursor rules 和分析模板" >> $REPORT_FILE

echo "" >> $REPORT_FILE
echo "---" >> $REPORT_FILE
echo "*報告由專案快速掃描器自動生成*" >> $REPORT_FILE

echo "✅ 掃描完成！報告已保存至: $REPORT_FILE"
echo "📖 請查看報告了解專案基本情況"
```

**使用方法：**
```bash
# 給腳本執行權限
chmod +x project-scanner.sh

# 掃描當前目錄
./project-scanner.sh

# 掃描指定專案
./project-scanner.sh /path/to/project
```

### 腳本二：Cursor Rules 自動生成器

#### 目標
根據專案特性自動生成最適合的 cursor rules 配置。

#### 腳本實作

**Python 版本：**
```python
#!/usr/bin/env python3
# cursor-rules-generator.py - Cursor Rules 自動生成器

import os
import json
import argparse
from pathlib import Path

class CursorRulesGenerator:
    def __init__(self, project_path):
        self.project_path = Path(project_path)
        self.tech_stack = self.detect_tech_stack()
        self.project_type = self.detect_project_type()
        
    def detect_tech_stack(self):
        """檢測專案技術棧"""
        tech_stack = []
        
        # Java 相關
        if (self.project_path / "pom.xml").exists():
            tech_stack.append("maven")
            with open(self.project_path / "pom.xml", 'r') as f:
                content = f.read()
                if "spring-boot" in content:
                    tech_stack.append("spring-boot")
                if "spring-security" in content:
                    tech_stack.append("spring-security")
        
        # Node.js 相關
        if (self.project_path / "package.json").exists():
            tech_stack.append("nodejs")
            try:
                with open(self.project_path / "package.json", 'r') as f:
                    package_data = json.load(f)
                    deps = {**package_data.get('dependencies', {}), 
                           **package_data.get('devDependencies', {})}
                    
                    if any(dep in deps for dep in ['react', 'react-dom']):
                        tech_stack.append("react")
                    if 'vue' in deps:
                        tech_stack.append("vue")
                    if 'express' in deps:
                        tech_stack.append("express")
                    if 'typescript' in deps:
                        tech_stack.append("typescript")
            except:
                pass
        
        # Python 相關
        if (self.project_path / "requirements.txt").exists():
            tech_stack.append("python")
            
        return tech_stack
    
    def detect_project_type(self):
        """檢測專案類型"""
        if "spring-boot" in self.tech_stack:
            return "microservice"
        elif "react" in self.tech_stack or "vue" in self.tech_stack:
            return "frontend"
        elif "express" in self.tech_stack:
            return "backend-api"
        elif "python" in self.tech_stack:
            return "python-app"
        else:
            return "general"
    
    def generate_base_rules(self):
        """生成基礎規則"""
        return """# Cursor Rules - Auto Generated
# 這是為您的專案自動生成的 Cursor 規則配置

# 角色設定
您是一位專業的程式碼分析師和技術顧問，專精於程式碼審查、架構分析和技術建議。

# 回應風格
- 使用清晰、專業且易懂的語言
- 提供具體、可操作的建議
- 用結構化的格式組織資訊
- 重點突出關鍵問題和解決方案

"""
    
    def generate_tech_specific_rules(self):
        """根據技術棧生成特定規則"""
        rules = []
        
        if "spring-boot" in self.tech_stack:
            rules.append("""# Spring Boot 專案特定配置
## Spring Boot 分析重點
- 重點關注 @Controller, @Service, @Repository 註解的使用
- 分析 Spring Security 配置的安全性
- 檢查依賴注入的設計模式
- 評估 JPA 實體設計和資料庫互動
- 審查配置檔案 (application.yml/properties)

## Spring Boot 最佳實踐檢查
- 確認分層架構的實作
- 檢查異常處理機制
- 評估 API 設計的 RESTful 程度
- 分析測試覆蓋率和品質
""")
        
        if "react" in self.tech_stack:
            rules.append("""# React 專案特定配置
## React 分析重點
- 檢查組件設計和職責分離
- 分析 State 管理策略
- 評估 Props 傳遞的合理性
- 檢查 Hook 的使用模式
- 審查效能優化技巧

## React 最佳實踐檢查
- 確認組件的可重用性
- 檢查副作用處理 (useEffect)
- 評估程式碼分割和懶載入
- 分析無障礙性 (a11y) 實作
""")
        
        if "nodejs" in self.tech_stack:
            rules.append("""# Node.js 專案特定配置
## Node.js 分析重點
- 檢查異步程式碼的處理方式
- 分析錯誤處理策略
- 評估安全性措施
- 檢查相依性管理
- 審查環境變數配置

## Node.js 最佳實踐檢查
- 確認 Promise/async-await 的正確使用
- 檢查記憶體洩漏風險
- 評估 API 文檔完整性
- 分析日誌記錄機制
""")
        
        return "\n".join(rules)
    
    def generate_analysis_prompts(self):
        """生成分析提示模板"""
        return """
# 常用分析指令模板

## 快速概覽
當我說 "快速分析" 時，請提供：
1. 專案整體架構概述
2. 主要技術棧和版本
3. 核心功能模組識別
4. 初步的風險評估
5. 建議的後續分析方向

## 深度分析
當我說 "深度分析 [模組名稱]" 時，請提供：
1. 模組功能和職責分析
2. 程式碼品質評估
3. 設計模式識別
4. 潛在問題和風險
5. 具體改進建議

## 安全審查
當我說 "安全審查" 時，請重點檢查：
1. 輸入驗證和資料清理
2. 認證和授權機制
3. 敏感資訊保護
4. 常見安全漏洞
5. 安全最佳實踐遵循情況

## 效能分析
當我說 "效能分析" 時，請評估：
1. 演算法複雜度
2. 資料庫查詢效率
3. 記憶體使用模式
4. 網路請求優化
5. 快取策略有效性
"""

    def generate_output_format(self):
        """生成輸出格式規範"""
        return """
# 輸出格式規範

## 分析報告格式
請按以下結構組織分析結果：

### 📋 快速總結
- **核心功能**: [1-2句描述]
- **技術評估**: ⭐⭐⭐⭐⭐ (1-5星)
- **主要風險**: [關鍵風險點]
- **建議行動**: [優先處理事項]

### 🔍 詳細分析
[具體分析內容，使用小標題組織]

### 💡 改進建議
1. **立即處理** (1-3天)
2. **短期目標** (1-2週)  
3. **長期規劃** (1-3個月)

### 🔗 相關資源
[相關文檔、工具、最佳實踐連結]

## 程式碼建議格式
提供程式碼建議時，請：
- 明確說明問題所在
- 提供具體的改進程式碼
- 解釋改進的原因和好處
- 給出實作的優先級
"""
    
    def generate_rules_file(self):
        """生成完整的 cursor rules 檔案"""
        rules = []
        rules.append(self.generate_base_rules())
        rules.append(self.generate_tech_specific_rules())
        rules.append(self.generate_analysis_prompts())
        rules.append(self.generate_output_format())
        
        return "\n".join(rules)
    
    def save_rules(self, output_path=None):
        """保存規則到檔案"""
        if output_path is None:
            output_path = self.project_path / ".cursorrules"
        
        rules_content = self.generate_rules_file()
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(rules_content)
        
        return output_path

def main():
    parser = argparse.ArgumentParser(description='自動生成 Cursor Rules 配置')
    parser.add_argument('project_path', help='專案路徑', default='.', nargs='?')
    parser.add_argument('-o', '--output', help='輸出檔案路徑')
    
    args = parser.parse_args()
    
    generator = CursorRulesGenerator(args.project_path)
    
    print(f"🔍 檢測到的技術棧: {', '.join(generator.tech_stack)}")
    print(f"📁 專案類型: {generator.project_type}")
    
    output_path = generator.save_rules(args.output)
    
    print(f"✅ Cursor Rules 已生成: {output_path}")
    print("💡 請重新啟動 Cursor 以套用新的規則配置")

if __name__ == "__main__":
    main()
```

**使用方法：**
```bash
# 為當前專案生成 cursor rules
python cursor-rules-generator.py

# 為指定專案生成
python cursor-rules-generator.py /path/to/project

# 指定輸出檔案
python cursor-rules-generator.py -o custom-rules.txt
```

### 腳本三：批次分析處理器

#### 目標
同時分析多個專案或模組，產生統一的分析報告。

#### 腳本實作

**Node.js 版本：**
```javascript
#!/usr/bin/env node
// batch-analyzer.js - 批次分析處理器

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BatchAnalyzer {
    constructor(projects, options = {}) {
        this.projects = projects;
        this.options = {
            outputDir: options.outputDir || 'batch-analysis',
            parallel: options.parallel || 3,
            timeout: options.timeout || 300000, // 5分鐘
            ...options
        };
        this.results = [];
    }

    async analyzeProject(projectPath) {
        console.log(`🔍 開始分析: ${projectPath}`);
        
        try {
            const startTime = Date.now();
            
            // 基本資訊收集
            const basicInfo = this.collectBasicInfo(projectPath);
            
            // 程式碼品質分析
            const codeQuality = this.analyzeCodeQuality(projectPath);
            
            // 安全性檢查
            const security = this.checkSecurity(projectPath);
            
            // 依賴分析
            const dependencies = this.analyzeDependencies(projectPath);
            
            const endTime = Date.now();
            
            const result = {
                project: projectPath,
                timestamp: new Date().toISOString(),
                duration: endTime - startTime,
                basicInfo,
                codeQuality,
                security,
                dependencies,
                status: 'success'
            };
            
            console.log(`✅ 完成分析: ${projectPath} (${result.duration}ms)`);
            return result;
            
        } catch (error) {
            console.error(`❌ 分析失敗: ${projectPath} - ${error.message}`);
            return {
                project: projectPath,
                timestamp: new Date().toISOString(),
                error: error.message,
                status: 'failed'
            };
        }
    }

    collectBasicInfo(projectPath) {
        const info = {
            path: projectPath,
            name: path.basename(projectPath),
            size: 0,
            fileCount: 0,
            techStack: []
        };

        try {
            // 計算專案大小和檔案數量
            const stats = this.getDirectoryStats(projectPath);
            info.size = stats.size;
            info.fileCount = stats.fileCount;

            // 檢測技術棧
            info.techStack = this.detectTechStack(projectPath);

        } catch (error) {
            console.warn(`警告: 無法收集 ${projectPath} 的基本資訊`);
        }

        return info;
    }

    getDirectoryStats(dirPath) {
        let size = 0;
        let fileCount = 0;

        const files = fs.readdirSync(dirPath);
        
        for (const file of files) {
            if (file.startsWith('.') || file === 'node_modules') continue;
            
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                const subStats = this.getDirectoryStats(filePath);
                size += subStats.size;
                fileCount += subStats.fileCount;
            } else {
                size += stat.size;
                fileCount++;
            }
        }

        return { size, fileCount };
    }

    detectTechStack(projectPath) {
        const techStack = [];

        // 檢測檔案
        const indicators = [
            { file: 'package.json', tech: 'Node.js' },
            { file: 'pom.xml', tech: 'Maven/Java' },
            { file: 'build.gradle', tech: 'Gradle/Java' },
            { file: 'requirements.txt', tech: 'Python' },
            { file: 'Cargo.toml', tech: 'Rust' },
            { file: 'go.mod', tech: 'Go' }
        ];

        for (const indicator of indicators) {
            if (fs.existsSync(path.join(projectPath, indicator.file))) {
                techStack.push(indicator.tech);
            }
        }

        // 檢測 package.json 中的框架
        const packageJsonPath = path.join(projectPath, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            try {
                const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                const deps = { ...packageData.dependencies, ...packageData.devDependencies };
                
                if (deps.react) techStack.push('React');
                if (deps.vue) techStack.push('Vue.js');
                if (deps.angular) techStack.push('Angular');
                if (deps.express) techStack.push('Express');
                if (deps.typescript) techStack.push('TypeScript');
            } catch (error) {
                // 忽略解析錯誤
            }
        }

        return techStack;
    }

    analyzeCodeQuality(projectPath) {
        const quality = {
            score: 0,
            issues: [],
            metrics: {}
        };

        try {
            // 檢查是否有 linting 配置
            const lintConfigs = ['.eslintrc.js', '.eslintrc.json', 'tslint.json'];
            const hasLinting = lintConfigs.some(config => 
                fs.existsSync(path.join(projectPath, config))
            );

            if (hasLinting) {
                quality.score += 20;
            } else {
                quality.issues.push('缺少代碼檢查配置');
            }

            // 檢查測試目錄
            const testDirs = ['test', 'tests', '__tests__', 'spec'];
            const hasTests = testDirs.some(dir => 
                fs.existsSync(path.join(projectPath, dir))
            );

            if (hasTests) {
                quality.score += 30;
            } else {
                quality.issues.push('缺少測試目錄');
            }

            // 檢查文檔
            const docFiles = ['README.md', 'docs', 'documentation'];
            const hasDocs = docFiles.some(doc => 
                fs.existsSync(path.join(projectPath, doc))
            );

            if (hasDocs) {
                quality.score += 20;
            } else {
                quality.issues.push('缺少項目文檔');
            }

            // 計算檔案大小分佈
            quality.metrics = this.calculateFileMetrics(projectPath);

        } catch (error) {
            quality.issues.push(`品質分析錯誤: ${error.message}`);
        }

        return quality;
    }

    calculateFileMetrics(projectPath) {
        const metrics = {
            avgFileSize: 0,
            largeFiles: [],
            fileTypes: {}
        };

        try {
            const files = this.getAllFiles(projectPath);
            let totalSize = 0;

            for (const file of files) {
                const stat = fs.statSync(file);
                totalSize += stat.size;

                // 記錄大檔案
                if (stat.size > 10000) { // 10KB
                    metrics.largeFiles.push({
                        file: path.relative(projectPath, file),
                        size: stat.size
                    });
                }

                // 統計檔案類型
                const ext = path.extname(file).toLowerCase();
                metrics.fileTypes[ext] = (metrics.fileTypes[ext] || 0) + 1;
            }

            metrics.avgFileSize = files.length > 0 ? totalSize / files.length : 0;

        } catch (error) {
            console.warn(`計算指標時出錯: ${error.message}`);
        }

        return metrics;
    }

    getAllFiles(dirPath, fileList = []) {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            if (file.startsWith('.') || file === 'node_modules') continue;

            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                this.getAllFiles(filePath, fileList);
            } else {
                fileList.push(filePath);
            }
        }

        return fileList;
    }

    checkSecurity(projectPath) {
        const security = {
            score: 100,
            vulnerabilities: [],
            recommendations: []
        };

        try {
            // 檢查敏感檔案
            const sensitiveFiles = ['.env', '*.key', '*.pem', 'id_rsa'];
            for (const pattern of sensitiveFiles) {
                // 簡化的檢查邏輯
                if (this.hasPattern(projectPath, pattern)) {
                    security.vulnerabilities.push(`發現敏感檔案: ${pattern}`);
                    security.score -= 20;
                }
            }

            // 檢查 package.json 的安全性
            const packageJsonPath = path.join(projectPath, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
                const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                
                // 檢查是否有已知有漏洞的依賴 (簡化檢查)
                const vulnerableDeps = ['lodash@<4.17.21', 'moment@<2.29.4'];
                // 這裡應該實作更完整的漏洞檢查邏輯
            }

        } catch (error) {
            security.recommendations.push(`安全檢查錯誤: ${error.message}`);
        }

        return security;
    }

    hasPattern(dirPath, pattern) {
        // 簡化的模式匹配
        try {
            const files = fs.readdirSync(dirPath);
            return files.some(file => file.includes(pattern.replace('*', '')));
        } catch {
            return false;
        }
    }

    analyzeDependencies(projectPath) {
        const deps = {
            total: 0,
            outdated: [],
            security: [],
            licenses: {}
        };

        try {
            const packageJsonPath = path.join(projectPath, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
                const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                const dependencies = { 
                    ...packageData.dependencies, 
                    ...packageData.devDependencies 
                };
                
                deps.total = Object.keys(dependencies).length;
                
                // 這裡可以加入更詳細的依賴分析邏輯
            }
        } catch (error) {
            console.warn(`依賴分析錯誤: ${error.message}`);
        }

        return deps;
    }

    async batchAnalyze() {
        console.log(`🚀 開始批次分析 ${this.projects.length} 個專案`);
        
        // 確保輸出目錄存在
        if (!fs.existsSync(this.options.outputDir)) {
            fs.mkdirSync(this.options.outputDir, { recursive: true });
        }

        // 並行分析專案
        const chunks = this.chunkArray(this.projects, this.options.parallel);
        
        for (const chunk of chunks) {
            const promises = chunk.map(project => this.analyzeProject(project));
            const results = await Promise.allSettled(promises);
            
            for (const result of results) {
                if (result.status === 'fulfilled') {
                    this.results.push(result.value);
                } else {
                    console.error(`分析失敗: ${result.reason}`);
                }
            }
        }

        // 生成報告
        await this.generateReport();
        
        console.log(`✅ 批次分析完成，結果保存在 ${this.options.outputDir}`);
    }

    chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    async generateReport() {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        
        // 生成 JSON 報告
        const jsonReportPath = path.join(this.options.outputDir, `batch-analysis-${timestamp}.json`);
        fs.writeFileSync(jsonReportPath, JSON.stringify(this.results, null, 2));

        // 生成 Markdown 報告
        const mdReportPath = path.join(this.options.outputDir, `batch-analysis-${timestamp}.md`);
        const markdownReport = this.generateMarkdownReport();
        fs.writeFileSync(mdReportPath, markdownReport);

        console.log(`📊 JSON 報告: ${jsonReportPath}`);
        console.log(`📋 Markdown 報告: ${mdReportPath}`);
    }

    generateMarkdownReport() {
        const successfulResults = this.results.filter(r => r.status === 'success');
        const failedResults = this.results.filter(r => r.status === 'failed');

        let report = `# 批次分析報告\n\n`;
        report += `**生成時間**: ${new Date().toLocaleString()}\n`;
        report += `**分析專案數**: ${this.results.length}\n`;
        report += `**成功**: ${successfulResults.length} | **失敗**: ${failedResults.length}\n\n`;

        // 總覽表格
        report += `## 📊 專案總覽\n\n`;
        report += `| 專案名稱 | 技術棧 | 檔案數 | 程式碼品質 | 安全評分 | 狀態 |\n`;
        report += `|----------|--------|--------|------------|----------|------|\n`;

        for (const result of successfulResults) {
            const name = result.basicInfo.name;
            const techStack = result.basicInfo.techStack.join(', ') || 'N/A';
            const fileCount = result.basicInfo.fileCount;
            const quality = result.codeQuality.score;
            const security = result.security.score;
            
            report += `| ${name} | ${techStack} | ${fileCount} | ${quality}/100 | ${security}/100 | ✅ |\n`;
        }

        for (const result of failedResults) {
            const name = path.basename(result.project);
            report += `| ${name} | - | - | - | - | ❌ |\n`;
        }

        // 詳細分析
        report += `\n## 🔍 詳細分析結果\n\n`;
        
        for (const result of successfulResults) {
            report += `### ${result.basicInfo.name}\n\n`;
            report += `- **路徑**: ${result.project}\n`;
            report += `- **技術棧**: ${result.basicInfo.techStack.join(', ')}\n`;
            report += `- **檔案數量**: ${result.basicInfo.fileCount}\n`;
            report += `- **分析時間**: ${result.duration}ms\n\n`;

            if (result.codeQuality.issues.length > 0) {
                report += `**品質問題**:\n`;
                for (const issue of result.codeQuality.issues) {
                    report += `- ${issue}\n`;
                }
                report += `\n`;
            }

            if (result.security.vulnerabilities.length > 0) {
                report += `**安全問題**:\n`;
                for (const vuln of result.security.vulnerabilities) {
                    report += `- ${vuln}\n`;
                }
                report += `\n`;
            }

            report += `---\n\n`;
        }

        if (failedResults.length > 0) {
            report += `## ❌ 分析失敗的專案\n\n`;
            for (const result of failedResults) {
                report += `- **${path.basename(result.project)}**: ${result.error}\n`;
            }
        }

        return report;
    }
}

// 使用範例
async function main() {
    const projects = process.argv.slice(2);
    
    if (projects.length === 0) {
        console.log('使用方法: node batch-analyzer.js <project1> <project2> ...');
        console.log('範例: node batch-analyzer.js ./project1 ./project2 ../other-project');
        process.exit(1);
    }

    const analyzer = new BatchAnalyzer(projects, {
        outputDir: 'batch-analysis-results',
        parallel: 3
    });

    await analyzer.batchAnalyze();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = BatchAnalyzer;
```

**使用方法：**
```bash
# 安裝依賴 (如果需要)
npm install

# 分析多個專案
node batch-analyzer.js ./project1 ./project2 ../another-project

# 結果將保存在 batch-analysis-results 目錄中
```

## ⚡ 智能化報告生成系統

### 系統概述
建立一個智能化的報告生成系統，能夠根據分析結果自動生成不同類型的報告。

### 報告生成器實作

```python
#!/usr/bin/env python3
# smart-report-generator.py - 智能化報告生成系統

import json
import jinja2
from datetime import datetime
from pathlib import Path

class SmartReportGenerator:
    def __init__(self):
        self.templates_dir = Path("report-templates")
        self.templates_dir.mkdir(exist_ok=True)
        self.jinja_env = jinja2.Environment(
            loader=jinja2.FileSystemLoader(self.templates_dir)
        )
        self.init_templates()
    
    def init_templates(self):
        """初始化報告模板"""
        
        # 執行摘要模板
        executive_template = """# {{ project_name }} 程式碼分析報告

## 📋 執行摘要

**分析日期**: {{ analysis_date }}
**分析師**: {{ analyst_name }}
**專案版本**: {{ project_version }}

### 🎯 整體評估

| 評估項目 | 評分 | 狀態 |
|----------|------|------|
| 程式碼品質 | {{ code_quality_score }}/100 | {{ quality_status }} |
| 安全性 | {{ security_score }}/100 | {{ security_status }} |
| 可維護性 | {{ maintainability_score }}/100 | {{ maintainability_status }} |
| 效能 | {{ performance_score }}/100 | {{ performance_status }} |

### 🏆 主要優勢
{% for strength in strengths %}
- {{ strength }}
{% endfor %}

### ⚠️ 關鍵問題
{% for issue in critical_issues %}
- **{{ issue.severity }}**: {{ issue.description }}
{% endfor %}

### 💡 建議行動
{% for action in recommended_actions %}
- **{{ action.priority }}**: {{ action.description }} (預估工時: {{ action.effort }})
{% endfor %}

## 📊 詳細分析

{{ detailed_analysis }}

## 🎯 改進路線圖

### 立即行動 (1週內)
{% for item in immediate_actions %}
- [ ] {{ item }}
{% endfor %}

### 短期目標 (1個月內)
{% for item in short_term_goals %}
- [ ] {{ item }}
{% endfor %}

### 長期規劃 (3個月內)
{% for item in long_term_plans %}
- [ ] {{ item }}
{% endfor %}

---
*本報告由智能分析系統自動生成*
"""
        
        # 技術詳細模板
        technical_template = """# {{ project_name }} 技術分析詳細報告

## 🏗️ 架構分析

### 整體架構
{{ architecture_overview }}

### 技術棧
{% for tech in tech_stack %}
- **{{ tech.name }}**: {{ tech.version }} {% if tech.status == 'outdated' %}⚠️ 需要更新{% elif tech.status == 'latest' %}✅ 最新版本{% endif %}
{% endfor %}

### 模組依賴關係
```mermaid
{{ dependency_diagram }}
```

## 💻 程式碼品質分析

### 品質指標
| 指標 | 當前值 | 目標值 | 狀態 |
|------|--------|--------|------|
{% for metric in quality_metrics %}
| {{ metric.name }} | {{ metric.current }} | {{ metric.target }} | {{ metric.status_icon }} |
{% endfor %}

### 程式碼異味
{% for smell in code_smells %}
#### {{ smell.type }}
- **位置**: {{ smell.location }}
- **描述**: {{ smell.description }}
- **建議**: {{ smell.recommendation }}
{% endfor %}

## 🔒 安全性分析

### 安全檢查結果
{% for check in security_checks %}
- **{{ check.category }}**: {{ check.status_icon }} {{ check.description }}
{% endfor %}

### 發現的漏洞
{% for vulnerability in vulnerabilities %}
#### {{ vulnerability.severity }} - {{ vulnerability.type }}
- **描述**: {{ vulnerability.description }}
- **影響**: {{ vulnerability.impact }}
- **修復建議**: {{ vulnerability.fix }}
{% endfor %}

## ⚡ 效能分析

### 效能瓶頸
{% for bottleneck in performance_bottlenecks %}
- **{{ bottleneck.component }}**: {{ bottleneck.description }}
  - 影響程度: {{ bottleneck.impact }}
  - 優化建議: {{ bottleneck.optimization }}
{% endfor %}

### 資源使用
{{ resource_usage_chart }}

## 🧪 測試分析

### 測試覆蓋率
- **整體覆蓋率**: {{ test_coverage.overall }}%
- **線覆蓋率**: {{ test_coverage.line }}%
- **分支覆蓋率**: {{ test_coverage.branch }}%

### 測試品質
{% for quality_issue in test_quality_issues %}
- {{ quality_issue }}
{% endfor %}

---
*詳細技術分析報告 - {{ generation_timestamp }}*
"""

        # 管理摘要模板
        management_template = """# {{ project_name }} 管理摘要報告

## 📈 業務影響評估

### 專案健康度評分: {{ overall_health_score }}/100

### 風險評估
| 風險類別 | 風險等級 | 業務影響 | 建議處理時間 |
|----------|----------|----------|--------------|
{% for risk in business_risks %}
| {{ risk.category }} | {{ risk.level }} | {{ risk.impact }} | {{ risk.timeline }} |
{% endfor %}

### 投資回報分析
- **當前技術債務成本**: {{ tech_debt_cost }}
- **建議改進投資**: {{ improvement_investment }}
- **預期投資回報**: {{ expected_roi }}
- **回報週期**: {{ payback_period }}

## 🎯 策略建議

### 優先級矩陣
```
高影響 | {{ high_impact_high_effort }} | {{ high_impact_low_effort }}
       |---------------------------|---------------------------
低影響 | {{ low_impact_high_effort }}  | {{ low_impact_low_effort }}
       |     高成本        |     低成本
```

### 資源分配建議
{% for allocation in resource_allocations %}
- **{{ allocation.area }}**: {{ allocation.percentage }}% ({{ allocation.justification }})
{% endfor %}

## 📊 競爭力分析

### 技術成熟度
- **當前狀態**: {{ current_maturity_level }}
- **行業平均**: {{ industry_average }}
- **差距分析**: {{ maturity_gap }}

### 創新機會
{% for opportunity in innovation_opportunities %}
- **{{ opportunity.area }}**: {{ opportunity.description }}
  - 預期效益: {{ opportunity.benefit }}
  - 實施難度: {{ opportunity.difficulty }}
{% endfor %}

---
*管理決策支援報告 - {{ generation_timestamp }}*
"""

        # 保存模板
        self.save_template("executive_summary.md", executive_template)
        self.save_template("technical_detail.md", technical_template)
        self.save_template("management_summary.md", management_template)
    
    def save_template(self, filename, content):
        """保存模板到檔案"""
        template_path = self.templates_dir / filename
        with open(template_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    def generate_report(self, analysis_data, report_type="executive"):
        """生成指定類型的報告"""
        template_map = {
            "executive": "executive_summary.md",
            "technical": "technical_detail.md", 
            "management": "management_summary.md"
        }
        
        template_name = template_map.get(report_type, "executive_summary.md")
        template = self.jinja_env.get_template(template_name)
        
        # 準備模板資料
        template_data = self.prepare_template_data(analysis_data, report_type)
        
        # 渲染報告
        report_content = template.render(template_data)
        
        return report_content
    
    def prepare_template_data(self, analysis_data, report_type):
        """準備模板資料"""
        base_data = {
            'project_name': analysis_data.get('project_name', 'Unknown Project'),
            'analysis_date': datetime.now().strftime('%Y-%m-%d'),
            'analyst_name': analysis_data.get('analyst', 'AI Assistant'),
            'generation_timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        if report_type == "executive":
            base_data.update(self.prepare_executive_data(analysis_data))
        elif report_type == "technical":
            base_data.update(self.prepare_technical_data(analysis_data))
        elif report_type == "management":
            base_data.update(self.prepare_management_data(analysis_data))
        
        return base_data
    
    def prepare_executive_data(self, data):
        """準備執行摘要資料"""
        return {
            'code_quality_score': data.get('quality_score', 0),
            'security_score': data.get('security_score', 0),
            'maintainability_score': data.get('maintainability_score', 0),
            'performance_score': data.get('performance_score', 0),
            'quality_status': self.get_status_text(data.get('quality_score', 0)),
            'security_status': self.get_status_text(data.get('security_score', 0)),
            'maintainability_status': self.get_status_text(data.get('maintainability_score', 0)),
            'performance_status': self.get_status_text(data.get('performance_score', 0)),
            'strengths': data.get('strengths', []),
            'critical_issues': data.get('critical_issues', []),
            'recommended_actions': data.get('recommended_actions', []),
            'immediate_actions': data.get('immediate_actions', []),
            'short_term_goals': data.get('short_term_goals', []),
            'long_term_plans': data.get('long_term_plans', []),
            'detailed_analysis': data.get('detailed_analysis', '')
        }
    
    def prepare_technical_data(self, data):
        """準備技術詳細資料"""
        return {
            'architecture_overview': data.get('architecture_overview', ''),
            'tech_stack': data.get('tech_stack', []),
            'dependency_diagram': data.get('dependency_diagram', ''),
            'quality_metrics': data.get('quality_metrics', []),
            'code_smells': data.get('code_smells', []),
            'security_checks': data.get('security_checks', []),
            'vulnerabilities': data.get('vulnerabilities', []),
            'performance_bottlenecks': data.get('performance_bottlenecks', []),
            'resource_usage_chart': data.get('resource_usage_chart', ''),
            'test_coverage': data.get('test_coverage', {}),
            'test_quality_issues': data.get('test_quality_issues', [])
        }
    
    def prepare_management_data(self, data):
        """準備管理摘要資料"""
        return {
            'overall_health_score': data.get('overall_health_score', 0),
            'business_risks': data.get('business_risks', []),
            'tech_debt_cost': data.get('tech_debt_cost', 'N/A'),
            'improvement_investment': data.get('improvement_investment', 'N/A'),
            'expected_roi': data.get('expected_roi', 'N/A'),
            'payback_period': data.get('payback_period', 'N/A'),
            'high_impact_high_effort': data.get('priority_matrix', {}).get('high_high', ''),
            'high_impact_low_effort': data.get('priority_matrix', {}).get('high_low', ''),
            'low_impact_high_effort': data.get('priority_matrix', {}).get('low_high', ''),
            'low_impact_low_effort': data.get('priority_matrix', {}).get('low_low', ''),
            'resource_allocations': data.get('resource_allocations', []),
            'current_maturity_level': data.get('current_maturity_level', 'N/A'),
            'industry_average': data.get('industry_average', 'N/A'),
            'maturity_gap': data.get('maturity_gap', 'N/A'),
            'innovation_opportunities': data.get('innovation_opportunities', [])
        }
    
    def get_status_text(self, score):
        """根據分數返回狀態文字"""
        if score >= 80:
            return "優秀 ✅"
        elif score >= 60:
            return "良好 🟡"
        else:
            return "需改進 🔴"
    
    def save_report(self, report_content, output_path):
        """保存報告到檔案"""
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(report_content)

# 使用範例
def main():
    # 範例分析資料
    sample_data = {
        'project_name': 'Cloudy 微服務專案',
        'analyst': 'Claude AI',
        'quality_score': 75,
        'security_score': 82,
        'maintainability_score': 68,
        'performance_score': 85,
        'strengths': [
            '清晰的微服務架構設計',
            '現代化的技術棧選擇',
            '良好的程式碼組織結構'
        ],
        'critical_issues': [
            {'severity': '高', 'description': '缺乏統一的錯誤處理機制'},
            {'severity': '中', 'description': '測試覆蓋率偏低'}
        ],
        'recommended_actions': [
            {'priority': '高', 'description': '實作統一錯誤處理', 'effort': '3天'},
            {'priority': '中', 'description': '提升測試覆蓋率', 'effort': '1週'}
        ],
        'immediate_actions': [
            '修復已知的安全漏洞',
            '建立 CI/CD 流程'
        ],
        'short_term_goals': [
            '完善單元測試',
            '優化 API 效能'
        ],
        'long_term_plans': [
            '實作微服務治理',
            '建立監控和告警系統'
        ]
    }
    
    generator = SmartReportGenerator()
    
    # 生成不同類型的報告
    executive_report = generator.generate_report(sample_data, "executive")
    technical_report = generator.generate_report(sample_data, "technical")
    management_report = generator.generate_report(sample_data, "management")
    
    # 保存報告
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    generator.save_report(executive_report, f'executive_report_{timestamp}.md')
    generator.save_report(technical_report, f'technical_report_{timestamp}.md')
    generator.save_report(management_report, f'management_report_{timestamp}.md')
    
    print("✅ 智能報告生成完成！")

if __name__ == "__main__":
    main()
```

## 🔄 工作流程自動化

### 完整的自動化流程

#### 流程腳本

```bash
#!/bin/bash
# complete-analysis-workflow.sh - 完整的自動化分析流程

PROJECT_PATH=${1:-.}
ANALYSIS_TYPE=${2:-standard}
OUTPUT_DIR="comprehensive-analysis"

echo "🚀 開始自動化分析流程"
echo "📁 專案路徑: $PROJECT_PATH"
echo "📊 分析類型: $ANALYSIS_TYPE"

# 創建輸出目錄
mkdir -p $OUTPUT_DIR

# 步驟1: 專案快速掃描
echo "🔍 步驟1: 專案快速掃描"
./project-scanner.sh $PROJECT_PATH
cp analysis-reports/scan_report_*.md $OUTPUT_DIR/

# 步驟2: 生成客製化 cursor rules
echo "⚙️ 步驟2: 生成 Cursor Rules"
python cursor-rules-generator.py $PROJECT_PATH -o $OUTPUT_DIR/.cursorrules

# 步驟3: 深度分析 (使用生成的 cursor rules)
echo "🔬 步驟3: 深度程式碼分析"
# 這裡需要整合 Cursor 的 AI 分析功能
# 或者使用其他程式碼分析工具

# 步驟4: 安全掃描
echo "🔒 步驟4: 安全掃描"
if command -v npm >/dev/null 2>&1 && [ -f "$PROJECT_PATH/package.json" ]; then
    cd $PROJECT_PATH
    npm audit --json > ../$OUTPUT_DIR/security-audit.json 2>/dev/null
    cd - > /dev/null
fi

# 步驟5: 依賴分析
echo "📦 步驟5: 依賴分析"
if [ -f "$PROJECT_PATH/package.json" ]; then
    cd $PROJECT_PATH
    npm ls --json > ../$OUTPUT_DIR/dependencies.json 2>/dev/null
    npm outdated --json > ../$OUTPUT_DIR/outdated-deps.json 2>/dev/null
    cd - > /dev/null
fi

# 步驟6: 生成綜合報告
echo "📋 步驟6: 生成綜合報告"
python smart-report-generator.py $OUTPUT_DIR

# 步驟7: 打包結果
echo "📦 步驟7: 打包分析結果"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
tar -czf "analysis-results-$TIMESTAMP.tar.gz" $OUTPUT_DIR

echo "✅ 自動化分析流程完成！"
echo "📁 結果保存在: $OUTPUT_DIR"
echo "📦 打包檔案: analysis-results-$TIMESTAMP.tar.gz"

# 清理臨時檔案
echo "🧹 清理臨時檔案"
rm -rf analysis-reports/scan_report_*.md
```

### 定時分析腳本

```bash
#!/bin/bash
# scheduled-analysis.sh - 定時分析腳本

PROJECTS_CONFIG="projects.conf"
LOG_FILE="analysis.log"

# 讀取專案配置
if [ ! -f $PROJECTS_CONFIG ]; then
    echo "錯誤: 找不到專案配置檔案 $PROJECTS_CONFIG"
    exit 1
fi

# 開始定時分析
echo "$(date): 開始定時分析" >> $LOG_FILE

while IFS=',' read -r project_name project_path analysis_schedule; do
    # 跳過註解行
    [[ $project_name =~ ^#.*$ ]] && continue
    
    echo "分析專案: $project_name" >> $LOG_FILE
    
    # 檢查是否到了分析時間
    if should_analyze "$analysis_schedule"; then
        echo "$(date): 執行 $project_name 的分析" >> $LOG_FILE
        
        # 執行分析
        ./complete-analysis-workflow.sh "$project_path" standard >> $LOG_FILE 2>&1
        
        # 發送通知 (如果配置了)
        if [ -n "$NOTIFICATION_WEBHOOK" ]; then
            send_notification "$project_name" "分析完成"
        fi
    fi
    
done < $PROJECTS_CONFIG

echo "$(date): 定時分析完成" >> $LOG_FILE
```

### 專案配置範例

```conf
# projects.conf - 專案配置檔案
# 格式: 專案名稱,專案路徑,分析頻率(daily/weekly/monthly)

# Web 應用專案
MyWebApp,/path/to/webapp,daily
ApiService,/path/to/api,weekly

# 微服務專案
UserService,/path/to/user-service,weekly
PaymentService,/path/to/payment-service,weekly
NotificationService,/path/to/notification-service,monthly

# 範例專案
CloudyDemo,./tutorial-sample-project,daily
```

## 📊 效率監控和指標

### 效率監控腳本

```python
#!/usr/bin/env python3
# efficiency-monitor.py - 效率監控系統

import json
import time
import statistics
from datetime import datetime, timedelta
from pathlib import Path

class EfficiencyMonitor:
    def __init__(self, data_file="efficiency_data.json"):
        self.data_file = data_file
        self.load_data()
    
    def load_data(self):
        """載入歷史資料"""
        try:
            with open(self.data_file, 'r') as f:
                self.data = json.load(f)
        except FileNotFoundError:
            self.data = {
                'analysis_history': [],
                'performance_metrics': {},
                'efficiency_trends': []
            }
    
    def save_data(self):
        """保存資料"""
        with open(self.data_file, 'w') as f:
            json.dump(self.data, f, indent=2)
    
    def record_analysis(self, project_name, analysis_type, duration, quality_score):
        """記錄分析結果"""
        record = {
            'timestamp': datetime.now().isoformat(),
            'project': project_name,
            'type': analysis_type,
            'duration': duration,
            'quality_score': quality_score,
            'efficiency_score': self.calculate_efficiency_score(duration, quality_score)
        }
        
        self.data['analysis_history'].append(record)
        self.update_performance_metrics()
        self.save_data()
    
    def calculate_efficiency_score(self, duration, quality_score):
        """計算效率分數"""
        # 基準: 30分鐘完成80分品質的分析為100分效率
        baseline_duration = 30 * 60  # 30分鐘 (秒)
        baseline_quality = 80
        
        # 時間效率 (分數越高越好)
        time_efficiency = max(0, baseline_duration / duration * 100)
        
        # 品質效率
        quality_efficiency = quality_score / baseline_quality * 100
        
        # 綜合效率分數
        efficiency_score = (time_efficiency * 0.4 + quality_efficiency * 0.6)
        
        return min(100, efficiency_score)
    
    def update_performance_metrics(self):
        """更新效能指標"""
        if not self.data['analysis_history']:
            return
        
        recent_data = self.get_recent_analyses(days=30)
        
        if recent_data:
            durations = [record['duration'] for record in recent_data]
            quality_scores = [record['quality_score'] for record in recent_data]
            efficiency_scores = [record['efficiency_score'] for record in recent_data]
            
            self.data['performance_metrics'] = {
                'avg_duration': statistics.mean(durations),
                'avg_quality': statistics.mean(quality_scores),
                'avg_efficiency': statistics.mean(efficiency_scores),
                'total_analyses': len(recent_data),
                'improvement_trend': self.calculate_trend(efficiency_scores)
            }
    
    def get_recent_analyses(self, days=30):
        """獲取近期分析資料"""
        cutoff_date = datetime.now() - timedelta(days=days)
        
        recent = []
        for record in self.data['analysis_history']:
            record_date = datetime.fromisoformat(record['timestamp'])
            if record_date >= cutoff_date:
                recent.append(record)
        
        return recent
    
    def calculate_trend(self, values):
        """計算趨勢"""
        if len(values) < 2:
            return "insufficient_data"
        
        # 簡單的線性趨勢計算
        first_half = values[:len(values)//2]
        second_half = values[len(values)//2:]
        
        first_avg = statistics.mean(first_half)
        second_avg = statistics.mean(second_half)
        
        if second_avg > first_avg * 1.05:
            return "improving"
        elif second_avg < first_avg * 0.95:
            return "declining"
        else:
            return "stable"
    
    def generate_efficiency_report(self):
        """生成效率報告"""
        metrics = self.data['performance_metrics']
        
        report = f"""# 效率監控報告

## 📊 總體指標

- **平均分析時間**: {metrics.get('avg_duration', 0)/60:.1f} 分鐘
- **平均品質分數**: {metrics.get('avg_quality', 0):.1f}/100
- **平均效率分數**: {metrics.get('avg_efficiency', 0):.1f}/100
- **總分析次數**: {metrics.get('total_analyses', 0)}
- **效率趨勢**: {self.get_trend_description(metrics.get('improvement_trend', 'unknown'))}

## 📈 效率分析

### 時間效率
"""
        
        # 分析時間分佈
        recent_data = self.get_recent_analyses()
        if recent_data:
            durations = [r['duration']/60 for r in recent_data]  # 轉換為分鐘
            
            report += f"""
- **最快分析**: {min(durations):.1f} 分鐘
- **最慢分析**: {max(durations):.1f} 分鐘
- **標準差**: {statistics.stdev(durations):.1f} 分鐘

### 品質效率
"""
            quality_scores = [r['quality_score'] for r in recent_data]
            report += f"""
- **最高品質**: {max(quality_scores):.1f}/100
- **最低品質**: {min(quality_scores):.1f}/100
- **品質穩定性**: {100 - statistics.stdev(quality_scores):.1f}/100

### 改進建議
"""
            
            # 基於資料提供改進建議
            avg_duration = statistics.mean(durations)
            avg_quality = statistics.mean(quality_scores)
            
            if avg_duration > 45:
                report += "- 🕒 分析時間偏長，建議優化分析流程或使用更多自動化工具\n"
            
            if avg_quality < 75:
                report += "- 📈 分析品質有提升空間，建議加強分析技巧培訓\n"
            
            if statistics.stdev(durations) > 15:
                report += "- 📊 分析時間不穩定，建議標準化分析流程\n"
        
        return report
    
    def get_trend_description(self, trend):
        """獲取趨勢描述"""
        descriptions = {
            "improving": "📈 持續改善",
            "declining": "📉 需要關注", 
            "stable": "📊 穩定狀態",
            "insufficient_data": "📋 資料不足",
            "unknown": "❓ 未知"
        }
        return descriptions.get(trend, "❓ 未知")

# 使用範例
def main():
    monitor = EfficiencyMonitor()
    
    # 模擬記錄一些分析資料
    monitor.record_analysis("TestProject", "comprehensive", 1800, 85)  # 30分鐘，85分
    monitor.record_analysis("WebApp", "quick", 900, 75)   # 15分鐘，75分
    monitor.record_analysis("API", "security", 2700, 92)  # 45分鐘，92分
    
    # 生成效率報告
    report = monitor.generate_efficiency_report()
    print(report)
    
    # 保存報告
    with open('efficiency_report.md', 'w') as f:
        f.write(report)

if __name__ == "__main__":
    main()
```

## ✅ 能力檢核

### 基礎能力（必須掌握）
- [ ] 能夠使用基礎的自動化腳本進行專案掃描
- [ ] 能夠配置和使用自動生成的 cursor rules
- [ ] 能夠執行批次分析處理
- [ ] 能夠使用模板生成基本報告

### 進階能力（目標達成）
- [ ] 能夠開發客製化的自動化腳本
- [ ] 能夠建立完整的分析工作流程
- [ ] 能夠設計智能化的報告生成系統
- [ ] 能夠監控和優化分析效率

### 專家能力（持續提升）
- [ ] 能夠建立組織級的自動化分析平台
- [ ] 能夠設計複雜的工作流程編排
- [ ] 能夠優化分析演算法和效率
- [ ] 能夠整合多種工具建立分析生態系統

## 🚀 課後實戰練習

### ⭐⭐ 基礎練習
**目標**：掌握基本的自動化工具使用

**任務1：腳本使用**
1. 下載並執行專案快速掃描器
2. 為 Cloudy 專案生成 cursor rules
3. 使用生成的 rules 進行分析

**任務2：簡單批次處理**
1. 選擇2-3個小型專案
2. 使用批次分析器進行分析
3. 比較不同專案的分析結果

### ⭐⭐⭐ 進階練習
**目標**：建立完整的自動化流程

**任務3：工作流程建立**
1. 設計一個完整的分析工作流程
2. 整合多個自動化工具
3. 建立定時執行機制

**任務4：客製化報告**
1. 根據組織需求客製化報告模板
2. 整合不同資料源
3. 建立多種類型的報告輸出

### ⭐⭐⭐⭐ 專家練習
**目標**：建立智能化分析平台

**任務5：平台建設**
1. 設計一個Web介面的分析平台
2. 整合所有自動化工具
3. 建立用戶管理和權限控制

**任務6：AI整合**
1. 整合機器學習模型優化分析
2. 建立智能推薦系統
3. 實作自適應的分析策略

## 📚 延伸學習資源

### 相關章節
- [第6章：專案準備](./06-project-preparation) - 分析前的準備工作
- [第7章：黃金分析流程](./07-golden-analysis-flow) - 標準化分析流程
- [第9章：挑戰與展望](./09-challenges-future) - 未來發展方向

### 實用工具
- [程式碼分析提示模板](../resources/analyzer-prompt) - AI 分析模板
- [文檔生成提示模板](../resources/documenter-prompt) - 報告生成模板
- [Cloudy 微服務範例](../resources/sample-project) - 實戰練習專案

### 技術資源
- [GitHub Actions](https://docs.github.com/en/actions) - 持續整合自動化
- [Jinja2 模板](https://jinja.palletsprojects.com/) - Python 模板引擎
- [Shell 腳本最佳實踐](https://google.github.io/styleguide/shellguide.html)

## 🎯 章節總結

恭喜！您已經掌握了進階效率技巧：

### 🎉 您現在具備：
- ✅ 自動化腳本開發能力
- ✅ 批次處理和工作流程設計技巧
- ✅ 智能化報告生成系統
- ✅ 效率監控和持續改進能力

### 🚀 效率提升的核心價值：
1. **時間節省**：自動化減少重複性工作
2. **品質一致**：標準化流程確保結果一致性
3. **規模擴展**：批次處理支援大規模分析
4. **智能決策**：智能化報告支援更好的決策

### 💡 持續改進建議：
1. **工具整合**：持續整合新的分析工具和技術
2. **流程優化**：根據使用經驗持續優化自動化流程
3. **團隊協作**：建立團隊共享的效率工具庫
4. **技術跟進**：關注新興的自動化和AI技術

**現在您已經具備了專業級的效率工具開發能力，能夠為任何團隊建立高效的分析生態系統！** 🌟

---

*💡 提示：效率工具的價值在於持續使用和改進，建議將這些工具整合到日常工作流程中，並根據實際需求進行調整和優化。*