// 取得所有的手風琴項目
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // 1. 檢查這個項目目前是否已經是開啟狀態
        const isOpen = item.classList.contains('active');

        // 2. 先關閉「所有」項目 (如果你希望一次只能開一個，保留這段)
        // 如果你希望可以同時打開多個，請把下面這三行 forEach 刪除
        accordions.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.accordion-body').style.maxHeight = null;
        });

        // 3. 如果原本沒開，現在點擊後就把它打開
        if (!isOpen) {
            item.classList.add('active');
            const body = item.querySelector('.accordion-body');
            // scrollHeight 會自動計算內容實際的高度
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});