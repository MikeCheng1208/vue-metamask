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

> Testing Metamask's status with Vue

[![NPM](https://nodei.co/npm/vue-metamask.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-metamask/)


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
        },
        methods:{
            onComplete(msg){
                console.log('msg:', msg);
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
