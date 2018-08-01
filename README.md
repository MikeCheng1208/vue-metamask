# vue-metamask
![vueMetaMask](./assets/vueMetaMask.jpg)

> Testing Metamask's status with Vue

npm info :    
[![NPM](https://nodei.co/npm/vue-metamask.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-metamask/)

npm link ( https://www.npmjs.com/package/vue-metamask )

![vue-metamask. npm version](https://img.shields.io/npm/v/vue-metamask.svg) 
![supported node version for vue-metamask.](https://img.shields.io/node/v/vue-metamask.svg) 
![total npm downloads for vue-metamask.](https://img.shields.io/npm/dt/vue-metamask.svg) 
![monthly npm downloads for vue-metamask.](https://img.shields.io/npm/dm/vue-metamask.svg) 
![npm licence for vue-metamask.](https://img.shields.io/npm/l/vue-metamask.svg)

NPM Install
```
npm i vue-metamask
```

And then import it:
```
<script>
    import VueMetamask from 'vue-metamask';
    export default {
        components: {
            VueMetamask,
        }
    }
</script>
```

Use
```
<template>
    <div id="demo">
        <vue-metamask 
            metaMaskId="1" 
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
</template>
```


## Methods

|data | type | value | functionality |
|-----------|-----------|-----------|---------------|
|metaMaskId | String    |1 (default)| determine the status you want to check|
|onComplete | Event | Callback | return current status
