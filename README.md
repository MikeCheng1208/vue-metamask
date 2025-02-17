# vue-metamask
![vueMetaMask](./assets/vueMetaMask.jpg)
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

<p align=center>Testing Metamask's status with Vue</p>

<p align="center">
<a target="_blank" href="https://www.npmjs.com/package/vue-metamask">
  <img src="https://nodei.co/npm/vue-metamask.png?downloads=true&downloadRank=true&stars=true" alt="NPM version">
</a>
</p>


## Demo
![vueMetaMask](./assets/operates.gif)


MetaMask will introduce an optional “Privacy Mode”, which requires that dapps ask permission to view users’ accounts. Dapps should update their code to support this feature, which will be enabled by default in the future.
<br/>
<a href="https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8">Reference link</a>
<br/>

NPM Install
```
npm i vue-metamask -S
```

And then import it:
```vue
<script setup>
    import { ref } from "vue";
    import VueMetamask from "vue-metamask";
    
    const msg = ref("This is demo net work");

    const connect = (data) => {
        console.log("GET INFO =>", data);
    };
</script>
```

Use
```html
<template>
    <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @complete="connect"
        >
        </vue-metamask>
    </div>
</template>
```
---

## How to use init connect option

```vue
<script setup>
    import { ref } from "vue";
    import VueMetamask from "vue-metamask";
    
    const metamask = ref(null);

    const connect = () => {
        // Get ref target use init methods
        metamask.value.init();
    };
</script>
<template>
    <div id="demo">
        // close init connect
        <vue-metamask ref="metamask" :init-connect="false"></vue-metamask>
        
        // click button call Init
        <button @click="connect">connect</button>
    </div>
</template>
```

---
## Methods

|data | type | value | Functionality |
|-----------|-----------|-----------|---------------|
|initConnect | Boolean    |true (default)| Whether to connect initially |
|userMessage （ Optional ） | String    |Message| return setting status message|
|complete | Event | Callback | return current data|

<br/>
<br/>


## OnComplete return data

|  key      |   type    |    value  |  Description  |
|-----------|-----------|-----------|---------------|
| web3      | Object    | function  | web3  | 
| metaMaskAddress | String | 0x09F38A7F...  | Ｍetamask address  | 
| message   | String    | "message" | User-defined message | 
| type      | String    | "MAINNET" | MAINNET<br/>NO_INSTALL_METAMASK<br/>NO_LOGIN<br/>NETWORK_ERROR<br/>USER_DENIED_ACCOUNT_AUTHORIZATION | 
| netID     | String    |    1n    | User's current network id | 


<br/>

# License
MIT.

