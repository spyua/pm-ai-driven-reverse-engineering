// 主要 JavaScript 功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initSmoothScroll();
    initProgressTracking();
    initChapterCards();
    initAnimations();
    updateProgress();
});

// 平滑滾動
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 進度追蹤
function initProgressTracking() {
    // 模擬章節完成狀態
    const chaptersData = [
        { id: 1, status: 'pending', title: '安裝與設定' },
        { id: 2, status: 'pending', title: '理解上下文' },
        { id: 3, status: 'pending', title: '三大核心模式' },
        { id: 4, status: 'pending', title: 'AI模型選擇' },
        { id: 5, status: 'pending', title: '產品偵探思維' },
        { id: 6, status: 'pending', title: '專案準備' },
        { id: 7, status: 'pending', title: '黃金分析流程' },
        { id: 8, status: 'pending', title: '進階效率技巧' },
        { id: 9, status: 'pending', title: '挑戰與展望' }
    ];
    
    // 儲存章節數據到 localStorage
    if (!localStorage.getItem('chaptersData')) {
        localStorage.setItem('chaptersData', JSON.stringify(chaptersData));
    }
    
    // 載入並更新章節狀態
    loadChapterProgress();
}

// 載入章節進度
function loadChapterProgress() {
    const savedData = JSON.parse(localStorage.getItem('chaptersData') || '[]');
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach((card, index) => {
        const chapterData = savedData[index];
        if (chapterData) {
            updateChapterStatus(card, chapterData.status);
        }
    });
    
    updateProgressBar();
}

// 更新章節狀態
function updateChapterStatus(card, status) {
    const statusBadge = card.querySelector('.status-badge');
    
    // 移除所有狀態類別
    statusBadge.className = 'status-badge';
    
    // 根據狀態添加對應類別和文字
    switch(status) {
        case 'completed':
            statusBadge.classList.add('status-completed');
            statusBadge.textContent = '已完成';
            break;
        case 'progress':
            statusBadge.classList.add('status-progress');
            statusBadge.textContent = '進行中';
            break;
        default:
            statusBadge.classList.add('status-pending');
            statusBadge.textContent = '準備中';
    }
}

// 更新進度條
function updateProgressBar() {
    const savedData = JSON.parse(localStorage.getItem('chaptersData') || '[]');
    const completedCount = savedData.filter(chapter => chapter.status === 'completed').length;
    const totalCount = savedData.length;
    const percentage = (completedCount / totalCount) * 100;
    
    const progressFill = document.querySelector('.progress-fill');
    const progressCurrent = document.querySelector('.progress-current');
    
    if (progressFill && progressCurrent) {
        progressFill.style.width = `${percentage}%`;
        progressCurrent.textContent = completedCount;
    }
}

// 章節卡片交互
function initChapterCards() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const chapterNum = index + 1;
            handleChapterClick(chapterNum, card);
        });
        
        // 添加鍵盤支援
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const chapterNum = index + 1;
                handleChapterClick(chapterNum, card);
            }
        });
    });
}

// 處理章節點擊
function handleChapterClick(chapterNum, cardElement) {
    // 檢查是否有對應的章節文件
    const chapterUrl = `chapters/第${chapterNum.toString().padStart(2, '0')}章.md`;
    
    // 這裡可以添加實際的章節導航邏輯
    // 目前只是示範功能
    showChapterModal(chapterNum);
    
    // 添加點擊效果
    cardElement.style.transform = 'scale(0.98)';
    setTimeout(() => {
        cardElement.style.transform = '';
    }, 150);
}

// 顯示章節模態框（示範用）
function showChapterModal(chapterNum) {
    const modal = createModal(`第${chapterNum.toString().padStart(2, '0')}章`, 
        '此章節正在開發中，敬請期待！\n\n您可以查看 tutorial-plan 目錄中的規劃文件來了解章節內容規劃。');
    document.body.appendChild(modal);
    
    // 自動關閉
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 3000);
}

// 創建模態框
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 400px;
        text-align: center;
        animation: modalFadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${title}</h3>
        <p style="color: var(--text-secondary); line-height: 1.6; white-space: pre-line;">${content}</p>
    `;
    
    // 添加背景遮罩
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        animation: backdropFadeIn 0.3s ease;
    `;
    
    // 點擊背景關閉
    backdrop.addEventListener('click', function() {
        if (modal.parentNode) modal.parentNode.removeChild(modal);
        if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    });
    
    document.body.appendChild(backdrop);
    
    return modal;
}

// 動畫效果
function initAnimations() {
    // 添加 CSS 動畫樣式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalFadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @keyframes backdropFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // 滾動動畫
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // 觀察需要動畫的元素
    const animateElements = document.querySelectorAll('.overview-card, .chapter-card, .resource-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// 更新總體進度
function updateProgress() {
    // 可以在這裡添加實際的進度更新邏輯
    // 例如：從 GitHub API 獲取 commit 信息，檢查文件存在性等
    
    // 示範：添加一些檢查點
    addCheckpoint('專案初始化', 'GitHub Pages 環境設置完成，目錄結構建立完成', new Date().toISOString().split('T')[0]);
}

// 添加檢查點
function addCheckpoint(title, description, date) {
    const checkpointList = document.querySelector('.checkpoint-list');
    if (!checkpointList) return;
    
    const existingCheckpoints = checkpointList.querySelectorAll('.checkpoint-item');
    const checkpointItem = document.createElement('div');
    checkpointItem.className = 'checkpoint-item';
    checkpointItem.innerHTML = `
        <div class="checkpoint-status">✅</div>
        <div class="checkpoint-content">
            <strong>${title}</strong>
            <p>${description}</p>
            <time>${date}</time>
        </div>
    `;
    
    // 如果已經有相同標題的檢查點，更新它而不是添加新的
    let updated = false;
    existingCheckpoints.forEach(item => {
        const existingTitle = item.querySelector('strong').textContent;
        if (existingTitle === title) {
            item.innerHTML = checkpointItem.innerHTML;
            updated = true;
        }
    });
    
    if (!updated) {
        // 插入到列表開頭（最新的在上面）
        const firstCheckpoint = checkpointList.querySelector('.checkpoint-item');
        if (firstCheckpoint) {
            checkpointList.insertBefore(checkpointItem, firstCheckpoint);
        } else {
            checkpointList.appendChild(checkpointItem);
        }
    }
}

// 導出功能供外部使用
window.tutorialApp = {
    updateChapterStatus: function(chapterNum, status) {
        const savedData = JSON.parse(localStorage.getItem('chaptersData') || '[]');
        if (savedData[chapterNum - 1]) {
            savedData[chapterNum - 1].status = status;
            localStorage.setItem('chaptersData', JSON.stringify(savedData));
            loadChapterProgress();
        }
    },
    
    addCheckpoint: addCheckpoint,
    
    getProgress: function() {
        const savedData = JSON.parse(localStorage.getItem('chaptersData') || '[]');
        const completed = savedData.filter(chapter => chapter.status === 'completed').length;
        return {
            completed: completed,
            total: savedData.length,
            percentage: (completed / savedData.length) * 100
        };
    }
};

// 控制台歡迎訊息
console.log(`
🤖 AI驅動逆向工程教學專案
=====================================
歡迎來到開發者控制台！

可用命令：
- tutorialApp.updateChapterStatus(chapterNum, status)
- tutorialApp.addCheckpoint(title, description, date)
- tutorialApp.getProgress()

範例：
tutorialApp.updateChapterStatus(1, 'completed')
tutorialApp.addCheckpoint('第一章完成', '安裝與設定章節已完成', '2024-01-01')
`); 