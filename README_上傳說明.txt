妃嬪侍寢春宵錄 GitHub 更新檔 v11

本包內容可直接對應你目前 GitHub 結構上傳覆蓋：

1. index.html
   - 主程式
   - 已包含 v10 功能：照片縮圖使用邊緣相近色背景 + 照片柔邊融入
   - 保留：可改日期、複製紀錄、點照片看原圖、備份文字等功能

2. manifest.json
   - PWA 設定
   - 已改用新圖示路徑：./圖示/icon-xxx.png

3. sw.js
   - PWA 離線快取
   - CACHE_NAME 已更新為 royal-spring-sleep-pwa-v11
   - 上傳後比較容易讓手機抓新版

4. 圖示/
   - icon-152.png
   - icon-180.png
   - icon-192.png
   - icon-512.png
   - 已改成無文字、深色玻璃質感、分層圖示風格

上傳方式：
- 到 GitHub 專案根目錄，上傳覆蓋 index.html、manifest.json、sw.js
- 到「圖示」資料夾，上傳覆蓋 icon-152.png、icon-180.png、icon-192.png、icon-512.png

更新後如果 iPhone 主畫面仍顯示舊版：
1. 先用 Safari 開 GitHub Pages 網址重新整理幾次
2. 關掉主畫面 App 再重開
3. 還是不行時，刪除主畫面圖示後重新「加入主畫面」
4. 必要時清除 Safari 網站資料，但這會影響 localStorage，請先備份
