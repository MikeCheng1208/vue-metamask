# vue-metamask
![vueMetaMask](./assets/vueMetaMask.jpg)
<p align=center>
    <a target="_blank" href="https://travis-ci.org/MikeCheng1208/vue-metamask.svg?branch=develop" title="Build status">
        <img src="https://travis-ci.org/MikeCheng1208/vue-metamask.svg?branch=develop">
    </a>
    <a target="_blank" href="https://vuejs.org/" title="vue">
        <img src="https://img.shields.io/badge/vue-%3E%202.5.0-brightgreen.svg">
    </a>
    <a target="_blank" href="http://nodejs.org/download/" title="Node version">
        <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-brightgreen.svg">
    </a>
    <a target="_blank" href="https://github.com/MikeCheng1208/vue-metamask/pulls" title="PRs Welcome">
        <img src="https://img.shields.io/badge/PRs-welcome-blue.svg">
    </a>
</p>

<p align=center>Testing Metamask's status with Vue</p>

[![NPM](https://nodei.co/npm/vue-metamask.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-metamask/)

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
```
<script>
    import VueMetamask from 'vue-metamask';
    export default {
        components: {
            VueMetamask,
        },
        data(){
            return {
                msg: "This is demo net work"
            }
        },
        methods:{
            onComplete(data){
                console.log('data:', data);
            }
        }
    }
</script>
```

Use
```
<template>
    <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
</template>
```


## Methods

|data | type | value | Functionality |
|-----------|-----------|-----------|---------------|
|userMessage （ Optional ） | String    |Message| return setting status message|
|onComplete | Event | Callback | return current data|

<br/>
<br/>


## OnComplete return data

|  key      |   type    |    value  |  Description  |
|-----------|-----------|-----------|---------------|
| web3      | Object    | function  | web3  | 
| metaMaskAddress | String | 0x09F38A7F...  | Ｍetamask address  | 
| message   | String    | "message" | User-defined message | 
| type      | String    | "MAINNET" | MAINNET<br/>NO_INSTALL_METAMASK<br/>NO_LOGIN<br/>NETWORK_ERROR<br/>USER_DENIED_ACCOUNT_AUTHORIZATION | 
| netID     | String    |    "1"    | User's current network id | 


<br/>

# License
MIT.

