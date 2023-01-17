# 速食店POS機點餐demo SPA
注意這不是真的POS機點餐的實際情況，也不可能完整實現POS的所有功能
<br/>來源: <a href="https://www.bilibili.com/video/BV1Zb411T775/?spm_id_from=333.999.0.0">這個</a>

<br/>

底下是POS速食資料 (練手的小項目) 
<br/>
<hr/>
特別適合從原生JS->轉換Vue的新手
<br/>
初始網址 https://yes66395.github.io/POSData/
<br/>
速食資料
一般商品:https://yes66395.github.io/POSData/commonfood.json  <br/>
分類商品 :https://yes66395.github.io/POSData/sortfood.json

## 用到的技術

1. Vue2語法 
2. Vite搭建Vue環境
3. Vue-Router 簡單配置
4. Axios 串接資料
5. 使用UI元件庫 Element-Plus

## 完成畫面(沒有RWD)

<img src="https://github.com/yes66395/testjson/blob/main/Untitled.png?raw=true" />



##  你可以學到的知識點


1. v-for雙重嵌套 以及v-for一層嵌套
2. axios的使用(可以試著進行二次封裝)
3. Element-plus在vite.config.js的配置使用。
4. Vue-Router的基礎使用(配置)。
5. 生命週期函數，資料直接出現。
6. 從原生JavaScript(不斷的操作DOM)->不操作DOM->體驗只操作資料和驅動畫面的威力，但需要一點時間去適應。
7. 利用methods，把方法寫在裡面。
8. 利用computed自動計算。
9. 學會簡單使用Component。

<br/>

## 功能的說明

<br/>
1. 新增商品，直接點擊右邊的標籤，或是下面的分類商品的圖案，就可以新增 。 <br/>
2. 數量，如果點選重複的商品，數量會遞增。 <br/>
3. 商品單一新增數量功能，以及商品單一刪除功能。 <br/>
4. 全部刪除商品。 <br/>
5. 送出單子，變成明細，一單一單的計算裡面的資料。 <br/>
6. 變成單子，自動計算數量以及總金額。 <br/>
7. 結帳，這裡只是簡單模擬結帳情況，結帳之後，這個單子就會不見(代表說客人已經付錢了)。 <br/>

<br/>
<hr>

資料有誤 

請在src / data /data.js 第四行，幫我改成 : https://yes66395.github.io/POSData/


## 安裝步驟
```
git clone https://github.com/yes66395/POSdemo.git //把這個項目複製下來

cd 到這個項目的資料夾 

npm install //安裝該項目需要套件

//開啟服務
npm run dev 

```

## 剩下的你還可以怎麼做?
1. POS.vue，元件可以再進行拆分，可以優化某些功能或是方法
2. 學習Vuex或是最新的Pinia管理元件的狀態
3. Vue-Router，更進一步的學習




