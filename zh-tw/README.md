# vue-metamask
![vueMetaMask](../assets/vueMetaMask.jpg)
<p align=center>
    <a target="_blank" href="https://vuejs.org/" title="vue">
        <img src="https://img.shields.io/badge/vue-%3E%203.0.0-brightgreen.svg">
    </a>
    <a target="_blank" href="http://nodejs.org/download/" title="Node version">
        <img src="https://img.shields.io/badge/node-%3E%3D%2020.0.0-brightgreen.svg">
    </a>
    <a target="_blank" href="http://nodejs.org/download/" title="Vite version">
        <img src="https://img.shields.io/badge/vite-%3E%3D%206.0.0-brightgreen.svg">
    </a>
    <a target="_blank" href="http://nodejs.org/download/" title="Vite version">
        <img src="https://img.shields.io/badge/web3-%3E%3D%204.0.0-brightgreen.svg">
    </a>
    <a target="_blank" href="https://github.com/MikeCheng1208/vue-metamask/pulls" title="PRs Welcome">
        <img src="https://img.shields.io/badge/PRs-welcome-blue.svg">
    </a>
</p>


<p align=center>基於 Vue 底下獲取跟檢查 Metamask 的狀態</p>


<p align="center">
<a target="_blank" href="https://www.npmjs.com/package/vue-metamask">
  <img src="https://nodei.co/npm/vue-metamask.png?downloads=true&downloadRank=true&stars=true" alt="NPM version">
</a>
</p>


## Demo
![vueMetaMask](../assets/operates.gif)

NPM 安裝
```
npm i vue-metamask -S
```

然後引入：
```vue
<script setup>
    import { ref } from "vue";
    import VueMetamask from "vue-metamask";
    
    const msg = ref("這是測試網路");

    const complete = (data) => {
        console.log("獲取資訊 =>", data);
    };
</script>
```

使用方式
```html
<template>
    <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @complete="onComplete"
        >
        </vue-metamask>
    </div>
</template>
```

---
## 如何設定初始化要不要連接 metamask
```vue
<script setup>
    import { ref } from "vue";
    import VueMetamask from "vue-metamask";
    
    const metamask = ref(null);

    const connect = () => {
        // 使用 ref 目標呼叫初始化方法
        metamask.value.init();
    };
</script>
<template>
    <div id="demo">
        // 關閉初始連接
        <vue-metamask ref="metamask" :init-connect="false"></vue-metamask>
        
        // 點擊按鈕呼叫初始化
        <button @click="connect">連接</button>
    </div>
</template>
```

---


## 方法

|data | 類型 | 值 | 功能 |
|-----------|-----------|-----------|---------------|
|initConnect | Boolean    |true (預設)| 是否一開始連接 metamask |
|userMessage （ 選填 ） | String    | 傳入的訊息 | 回傳自己設定的狀態訊息|
|complete | 事件     | Callback | 回傳目前的狀態 |

<br/>
<br/>


## OnComplete 回傳資料

|  key      |   類型     |    值     |  說明  |
|-----------|-----------|-----------|---------------|
| web3      | Object    | function  | web3  | 
| metaMaskAddress | String | 0x09F38A7F...  | Ｍetamask address  | 
| message   | String    | "message" | User 定義的訊息  | 
| type      | String    | "MAINNET" | MAINNET<br/>NO_INSTALL_METAMASK<br/>NO_LOGIN<br/>NETWORK_ERROR<br/>USER_DENIED_ACCOUNT_AUTHORIZATION | 
| netID     | String    |    1n    | User 目前的狀態 id | 





