春宵錄 GitHub PWA v22：儲存穩定版

請上傳到 GitHub 專案根目錄並覆蓋：
- index.html
- manifest.json
- sw.js
- icon-152.png
- icon-180.png
- icon-192.png
- icon-512.png

v22 修正：
1. 新增 IndexedDB + localStorage 雙備份，降低一段時間後資料消失的機率。
2. 首次開啟 v22 會自動把舊 localStorage 資料搬進 IndexedDB。
3. 導入 JSON 會自動清除 BOM，避免出現錯誤但資料又已讀入的狀況。
4. 導入成功會顯示實際筆數。
5. sw.js 快取版本更新為 royal-spring-sleep-pwa-v22。

更新前請先匯出一次 JSON 備份。
上傳後若仍顯示舊版，請刪除主畫面圖示後重新加入。
