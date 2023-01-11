# 速食店POS機點餐demo SPA
注意這不是真的POS機點餐的介面
<br/>來源: <a href="https://www.bilibili.com/video/BV1Zb411T775/?spm_id_from=333.999.0.0">這個</a>

<br/>

底下是POS速食資料 (練手的小項目) 
<br/>
<hr/>
特別適合從原生JS->轉換Vue的新手
<br/>
初始網址 https://yes66395.github.io/POSdemo/
<br/>
速食資料
一般商品:https://yes66395.github.io/POSdemo/commonfood.json  <br/>
分類商品 :https://yes66395.github.io/POSdemo/sortfood.json

用到的技術
<br/>
Vue2語法 + Vite環境 + Vue-Router(簡單配置) + Axios(簡單串接) + Element-Plus

<br/>
完成畫面(沒有RWD)
<img src="https://github.com/yes66395/testjson/blob/main/Untitled.png?raw=true" />

<br/>
你可以學到的知識點

<br/>

1. v-for雙重嵌套 以及v-for一層嵌套
2. axios的使用(可以試著進行二次封裝)
3. Element-plus在vite.config.js的配置使用。
4. Vue-Router的基礎使用(配置)。
5. created，生命週期函數，資料直接出現。
6. 從原生JavaScript ->不操作DOM->只操作資料，驅動畫面，這邊需要一點時間適應
7. 利用computed自動計算。
8. 學會簡單使用Component。

<br/>

功能的說明

<br/>
1. 新增商品，直接點擊右邊的標籤，或是下面的分類商品的圖案，就可以新增 。 <br/>
2. 數量，如果點選重複的商品，數量會遞增。 <br/>
3. 商品單一新增數量功能，以及商品單一刪除功能。 <br/>
4. 全部刪除商品。 <br/>
5. 送出單子，當沒有商品，會貼出警語。 <br/>
6. 變成單子，自動計算數量以及總金額。 <br/>
7. 結帳，這裡只是簡單模擬結帳情況，結帳之後，這個單子就會不見(代表說客人已經付錢了)。 <br/>




