import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI驅動逆向工程教學',
  description: '使用AI工具進行程式碼逆向工程的完整教學系統',
  lang: 'zh-TW',
  cleanUrls: true,
  
  // 暫時忽略死連結，等內容完成後再啟用檢查
  ignoreDeadLinks: true,
  
  // GitHub Pages 部署配置
  base: '/pm-ai-driven-reverse-engineering/',
  
  head: [
    ['meta', { name: 'author', content: 'AI Tutorial Team' }],
    ['meta', { name: 'keywords', content: 'AI, 逆向工程, Cursor, 教學, 程式碼分析' }],
    ['link', { rel: 'icon', href: '/pm-ai-driven-reverse-engineering/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '🤖',
    siteTitle: 'AI逆向工程教學',
    
    nav: [
      { text: '🏠 首頁', link: '/' },
      { text: '📚 教學指南', link: '/guide/' },
      { text: '🛠️ 資源工具', link: '/resources/' },
      { text: '📋 檢查點', link: '/checkpoints/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '📖 開始使用',
          items: [
            { text: '教學概覽', link: '/guide/' },
            { text: '學習路徑', link: '/guide/learning-path' }
          ]
        },
        {
          text: '📚 教學章節',
          items: [
            { text: '章節目錄', link: '/chapters/' },
            { text: '第01章：安裝與設定', link: '/chapters/01-installation-setup' }
          ]
        }
      ],
      
      '/chapters/': [
        {
          text: '📚 教學章節',
          items: [
            { text: '章節目錄', link: '/chapters/' },
            { text: '第01章：安裝與設定', link: '/chapters/01-installation-setup' },
            { text: '第02章：理解上下文', link: '/chapters/02-understanding-context' },
            { text: '第03章：三大核心模式', link: '/chapters/03-core-modes' },
            { text: '第04章：AI模型選擇', link: '/chapters/04-model-selection' },
            { text: '第05章：產品偵探思維', link: '/chapters/05-detective-mindset' },
            { text: '第06章：專案準備', link: '/chapters/06-project-preparation' },
            { text: '第07章：黃金分析流程', link: '/chapters/07-golden-analysis-flow' },
            { text: '第08章：進階效率技巧', link: '/chapters/08-advanced-techniques' },
            { text: '第09章：挑戰與展望', link: '/chapters/09-challenges-future' }
          ]
        }
      ],
      
      '/resources/': [
        {
          text: '🎯 範例專案',
          items: [
            { text: 'Cloudy 微服務概覽', link: '/resources/sample-project' },
            { text: 'Account 服務', link: '/resources/cloudy-account' },
            { text: 'Security 服務', link: '/resources/cloudy-security' },
            { text: 'Files 服務', link: '/resources/cloudy-files' },
            { text: 'Event 服務', link: '/resources/cloudy-event' }
          ]
        },
        {
          text: '🤖 系統提示模板',
          items: [
            { text: '提示模板概覽', link: '/resources/prompts' },
            { text: '分析系統提示', link: '/resources/analyzer-prompt' },
            { text: '文檔系統提示', link: '/resources/documenter-prompt' }
          ]
        },
        {
          text: '📚 學習素材',
          items: [
            { text: 'Cursor 使用指南', link: '/resources/cursor-guide' },
            { text: '上下文管理', link: '/resources/context-guide' },
            { text: 'AI 模式解析', link: '/resources/ai-modes' }
          ]
        }
      ],
      
      '/checkpoints/': [
        {
          text: '✅ 審核報告',
          items: [
            { text: '審核機制說明', link: '/checkpoints/' },
            { text: '品質標準', link: '/checkpoints/quality-standards' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/spyua/pm-ai-driven-reverse-engineering' }
    ],
    
    footer: {
      message: '基於 MIT 授權發布',
      copyright: 'Copyright © 2024 AI Tutorial Team'
    },
    
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-TW': {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        }
      }
    },
    
    editLink: {
      pattern: 'https://github.com/spyua/pm-ai-driven-reverse-engineering/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁面'
    },
    
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    
    outline: {
      label: '頁面導覽'
    },
    
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到亮色模式',
    darkModeSwitchTitle: '切換到暗色模式'
  },
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
}) 