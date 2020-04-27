<script>
    import "util";
    import Web3 from "web3";
    import * as util from "util";

    var sigUtil = require('eth-sig-util')
    export default {
        props: {
            userMessage: {
                type: String,
                default: "null"
            }
        },
        data() {
            return {
                web3: null,
                MetaMaskId: "1",        // main net netID
                netID: '1',             // user metamask id
                MetaMaskAddress: "",    // user Address
                Web3Interval: null,
                AccountInterval: null,
                NetworkInterval: null,
                account: "",
                stateLog: null,
                isComplete: false,
                appname: "",
                szMsgType: "",
                szDescription: "",
                bResult: "",
                szData: "",
                szTitle: "",
                provider: "",
                timestamp:"",
                vendor: "Metamask/TrustWallet/SaturnWallet/ImToken",
                sign_message: "",
                signature:"",
                network: [1, 61, "1", "61"],
                type: "INIT",
                MetamaskMsg: {
                    ONE_TIME_SIGNATURE_MESSAGE: 'Signing this message proves your ownership of your Ethereum wallet address to %s without giving %s access to any sensitive information. Message ID: @',
                    LOAD_MATAMASK_WALLET_ERROR: 'Loading metamask error, please try later',
                    EMPTY_METAMASK_ACCOUNT: 'Please log in to your metamask to continue with this app.',
                    NETWORK_ERROR: 'The connection is abnormal, please try again',
                    METAMASK_NOT_INSTALL: 'Please install metamask for this application',
                    METAMASK_TEST_NET: 'Currently not in the main network.',
                    METAMASK_MAIN_NET: 'Currently Main network',
                    USER_DENIED_ACCOUNT_AUTHORIZATION: 'User denied account authorization',
                },
                minABI: [
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "name",
                        "outputs": [{"name": "", "type": "string"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
                        "name": "approve",
                        "outputs": [{"name": "", "type": "bool"}],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [{"name": "", "type": "uint256"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {"name": "_from", "type": "address"},
                            {"name": "_to", "type": "address"},
                            {"name": "_value", "type": "uint256"}
                        ],
                        "name": "transferFrom",
                        "outputs": [{"name": "", "type": "bool"}],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [{"name": "", "type": "uint8"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [{"name": "_owner", "type": "address"}],
                        "name": "balanceOf",
                        "outputs": [{"name": "balance", "type": "uint256"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [{"name": "", "type": "string"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
                        "name": "transfer",
                        "outputs": [{"name": "", "type": "bool"}],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
                        "name": "allowance",
                        "outputs": [{"name": "", "type": "uint256"}],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {"payable": true, "stateMutability": "payable", "type": "fallback"},
                    {
                        "anonymous": false,
                        "inputs": [
                            {"indexed": true, "name": "owner", "type": "address"},
                            {"indexed": true, "name": "spender", "type": "address"},
                            {"indexed": false, "name": "value", "type": "uint256"}
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {"indexed": true, "name": "from", "type": "address"},
                            {"indexed": true, "name": "to", "type": "address"},
                            {"indexed": false, "name": "value", "type": "uint256"}
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                ]
            };
        },
        methods: {
            getTimeStamp : function(){
                return this.timestamp;
            },

            setTimeStamp :  function(ts){
                this.timestamp = ts;
            },
            getSignature : function(){
                return this.signature;
            },
            setSignature : function(signature){
                this.signature = signature;
            },
            setAppName(name) {
                this.appname = name;
            },
            getAppName() {
                return this.appname;
            },
            setVendor: function(vendor){
                this.vendor = vendor;
            },
            setMessage(msg) {
                if (msg === "") {
                    this.sign_message = this.MetamaskMsg.ONE_TIME_SIGNATURE_MESSAGE;
                }
            },
            getMessage() {
                if (this.sign_message === "") {
                    this.sign_message = this.MetamaskMsg.ONE_TIME_SIGNATURE_MESSAGE;
                    this.sign_message = util.format(this.sign_message, this.getAppName(),this.getAppName(),this.getTimeStamp()); // 'foo:%s'
                }

                return this.sign_message;
            },
            getAccount: function () {
                return this.account;
            },
            setAccount: function (account) {
                this.account = account;
            },
            signMessage: async function (callback) {
                var that = this;
                this.szTitle = that.vendor + " Sign";
                this.szMsgType = "info";
                this.szDescription = 'Signing Message...';
                this.bResult = false;
                var message = this.getMessage();
                var retObject = {bResult: false, szMsgType: "", szDescription: "", szData: null};
                let promise = new Promise((valid) => {
                    that.web3.personal.sign(that.web3.toHex(message), that.getAccount(), function (err, res) {
                        if (err != null) {
                            retObject.szMsgType = "error";
                            retObject.szTitle = that.vendor + " Message Signature";
                            retObject.szDescription = "User denied message signature...";
                            retObject.bResult = false;
                        } else {
                            retObject.szMsgType = "success";
                            retObject.szTitle = that.vendor + " Message Signature";
                            retObject.szDescription = "User accepted message signature...";
                            retObject.bResult = true;
                            retObject.szData = res;
                            that.setSignature(res);
                        }
                        valid(retObject);
                    });
                });
                let result = await promise;
                this.szMsgType = result.szMsgType;
                this.szDescription = result.szDescription;
                this.bResult = result.bResult;
                this.szData = result.szData;
                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription,
                    message: message,
                    ts: this.getTimeStamp(),
                    signature: this.szData
                });
                return this.bResult;
            },

            verifyMessage: async function (callback) {
                var that = this;
                this.szTitle = that.vendor + " Verify Message";
                this.szMsgType = "info";
                this.szDescription = 'Verifying Message...';
                this.bResult = false;
                var ts = this.getTimeStamp();
                var message = this.getMessage();
                var signature = this.getSignature();
                var retObject = {bResult: false, szMsgType: "", szDescription: "", szData: null};
                let promise = new Promise((valid) => {
                    message = this.web3.toHex(message);
                    const msgParams = {data: message}
                    msgParams.sig = signature
                    const recovered = sigUtil.recoverPersonalSignature(msgParams);
                    if (recovered.toLowerCase() === that.getAccount().toLowerCase()) {
                        retObject.szMsgType = "success";
                        retObject.szTitle = that.vendor + " Message Signature";
                        retObject.szDescription = "Message has been verified successfuly!";
                        retObject.bResult = true;
                        retObject.szData = recovered;
                    } else {
                        retObject.szMsgType = "error";
                        retObject.szTitle = that.vendor + " Message Signature";
                        retObject.szDescription = "Message cannot be verified!";
                        retObject.bResult = false;
                        retObject.szData = null;
                    }
                    valid(retObject);
                });
                let result = await promise;
                this.szMsgType = result.szMsgType;
                this.szDescription = result.szDescription;
                this.bResult = result.bResult;
                this.szData = result.szData;
                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription,
                    message: message,
                    ts: ts,
                    signature: this.szData
                });
                return this.bResult;
            },

            sendEthereum: async function (contract, to, amount) {
                this.szTitle = "ETH Deposit";
                this.szMsgType = "info";
                this.szDescription = 'Processing...';
                this.bResult = false;
                var retObject = {bResult: false, szMsgType: "", szDescription: "", szData: null};
                let depositAmount = this.web3.toHex(this.web3.toWei(this.web3.toBigNumber(amount)));
                const method = 'eth_sendTransaction';
                const payload = {
                    method: method,
                    params: [{
                        from: this.getAccount(),
                        to: to,
                        value: depositAmount,
                    }],
                    from: this.getAccount(),
                };
                const provider = window['ethereum'] || window.web3.currentProvider;
                let promise = new Promise((valid) => {
                    provider.sendAsync(payload, function (err, response) {
                        const rejected = 'User denied transaction signature.';
                        if (response.error && response.error.message.includes(rejected)) {
                            retObject.szData = "";
                            retObject.bResult = false;
                            retObject.szMsgType = "error";
                            retObject.szDescription = "We can't take your money without your permission.";
                            valid(retObject);
                        }
                        if (err) {
                            retObject.szData = "";
                            retObject.bResult = false;
                            retObject.szMsgType = "error";
                            retObject.szDescription = "There was an issue, please try again.";
                            valid(retObject);
                        }
                        if (response.result) {
                            retObject.szData = response.result;
                            retObject.bResult = true;
                            retObject.szMsgType = "info";
                            retObject.szDescription = "Thank you for your generosity!";
                            valid(retObject);
                        }
                    })
                });
                let result = await promise;
                this.szMsgType = result.szMsgType;
                this.szDescription = result.szDescription;
                this.bResult = result.bResult;
                this.szData = result.szData;
                return {
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription,
                    tx: this.szData
                };
            },

            sendToken: async function (contractAddr, to, amount) {
                this.szTitle = "Token Deposit";
                this.szMsgType = "info";
                this.szDescription = 'Processing...';
                this.bResult = false;
                var retObject = {bResult: false, szMsgType: "", szDescription: "", szData: null};
                let that = this;
                let promise = new Promise((valid) => {

                    let tokenAmount = this.web3.toBigNumber(amount);
                    let tokenContract = this.web3.eth.contract(that.minABI).at(contractAddr);

                    tokenContract.decimals((err, decimals) => {
                        let transferAmount = tokenAmount.times(this.web3.toBigNumber(10).pow(decimals));

                        tokenContract.transfer(to, transferAmount, (error, response) => {
                            const rejected = 'User denied transaction signature.';

                            if (error.message && error.message.includes(rejected)) {
                                retObject.szData = "";
                                retObject.bResult = false;
                                retObject.szMsgType = "error";
                                retObject.szDescription = "We can't take your money without your permission.";
                                valid(retObject);
                            } else if (error) {
                                retObject.szData = "";
                                retObject.bResult = false;
                                retObject.szMsgType = "error";
                                retObject.szDescription = "There was an issue, please try again.";
                                valid(retObject);
                            }
                            if (response) {
                                retObject.szData = response;
                                retObject.bResult = true;
                                retObject.szMsgType = "info";
                                retObject.szDescription = "Thank you for your generosity!";
                                valid(retObject);
                            }

                        });
                    });

                });

                let result = await promise;
                this.szMsgType = result.szMsgType;
                this.szDescription = result.szDescription;
                this.bResult = result.bResult;
                this.szData = result.szData;
                return {
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription,
                    tx: this.szData
                };
            },

            sendDeposit: async function (contract, to, amount, callback) {
                var that = this;
                let promise;
                if (contract != "") {
                    promise = new Promise((valid) => {
                        valid(that.sendToken(contract, to, amount));
                    });
                } else {
                    promise = new Promise((valid) => {
                        valid(that.sendEthereum(contract, to, amount));
                    });
                }
                let result = await promise;
                this.szMsgType = result.type;
                this.szDescription = result.description;
                this.bResult = result.success;
                this.szData = result.tx;
                this.szTitle = result.title;
                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription,
                    balance: this.szData
                });
                return this.bResult;
            },

            checkWeb3() {
                let web3 = window.web3;
                if (typeof web3 === 'undefined') {
                    this.web3 = null;
                    this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
                }
            },
            checkAccounts() {
                if (this.web3 === null) return;
                this.web3.eth.getAccounts((err, accounts) => {
                    console.log();

                    if (err != null) return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
                    if (accounts.length === 0) {
                        this.MetaMaskAddress = "";
                        this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, 'NO_LOGIN');
                        return;
                    }
                    this.MetaMaskAddress = accounts[0]; // user Address
                });
            },
            checkNetWork() {
                this.web3.version.getNetwork((err, netID) => {
                    // Main Network: 1
                    // Ropsten Test Network: 3
                    // Kovan Test Network: 42
                    // Rinkeby Test Network: 4
                    if (err != null) return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
                    this.netID = netID;    //User MetaMask's current status
                    if (this.MetaMaskAddress !== '' && netID === '1') return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'MAINNET');
                    if (this.MetaMaskAddress !== '' && netID === '3') return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'ROPSTEN');
                    if (this.MetaMaskAddress !== '' && netID === '42') return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'KOVAN');
                    if (this.MetaMaskAddress !== '' && netID === '4') return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'RINKEBY');
                    if (this.MetaMaskAddress !== '') this.Log(this.MetamaskMsg.METAMASK_MAIN_NET, "MAINNET");
                })
            },
            Log(msg, type = "") {
                const letType = type;
                if (letType === this.type) return;
                const message = this.userMessage === "null" ? msg : this.userMessage;
                this.type = type;
                this.$emit("onComplete", {
                    web3: this.web3,
                    type,
                    metaMaskAddress: this.MetaMaskAddress,
                    message,
                    netID: this.netID,
                });
            },
            web3TimerCheck(web3) {
                this.web3 = web3;
                this.checkAccounts();
                this.checkNetWork();
                this.Web3Interval = setInterval(() => this.checkWeb3(), 1000);
                this.AccountInterval = setInterval(() => this.checkAccounts(), 1000);
                this.NetworkInterval = setInterval(() => this.checkNetWork(), 1000);
            },

            isInstalled: function (callback) {
                this.szTitle = this.vendor + " Installation";
                this.bResult = false;
                if (typeof window.web3 !== 'undefined') {
                    this.web3 = window.web3;
                    this.szMsgType = "success";
                    this.szDescription = this.vendor + ' is installed';
                    this.bResult = true;
                } else if (typeof window.ethereum !== 'undefined') {
                    this.szMsgType = "success";
                    this.szDescription = this.vendor + ' is installed';
                    this.bResult = true;
                } else {
                    this.szMsgType = "error";
                    this.szDescription = this.vendor + ' is not installed';
                    this.bResult = false;
                }

                if (typeof window.ethereum !== 'undefined'
                    || (typeof window.web3 !== 'undefined')) {
                    this.provider = window['ethereum'] || window.web3.currentProvider
                } else {
                    this.Log("Unknown Error!", "error")
                }
                //window.web3 = new Web3(this._provider);


                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription
                });
                return this.bResult;
            },

            isLocked: async function (callback) {
                let that = this;
                var retObject = {bResult: false, szMsgType: "", szDescription: "", szAccount: ""};
                this.szTitle = this.vendor + " Status";

                if (typeof window.ethereum !== 'undefined') {
                    await window.ethereum.enable().then((account) => {
                        let bNetworkStatus = true;
                        if (typeof ethereum != "undefined") {
                            if (typeof window.ethereum.networkVersion != "undefined") {
                                if (that.network.includes(window.ethereum.networkVersion) == false) {
                                    retObject.szMsgType = "error";
                                    retObject.szDescription = 'This application requires the main network, please switch it in your MetaMask UI.';
                                    retObject.bResult = false;
                                    bNetworkStatus = false;
                                }
                            }
                        }
                        if (bNetworkStatus) {
                            that.web3.eth.defaultAccount = account[0];
                            that.setAccount(account[0]);
                            retObject.bResult = true;
                            retObject.szMsgType = "success";
                            retObject.szDescription = that.vendor + ' is accessible...';
                        }

                    }).catch(function (reason) {
                        retObject.szMsgType = "error";
                        retObject.szDescription = reason.stack;
                        retObject.bResult = false;
                    });
                } else if (typeof window.web3 !== 'undefined') {
                    let promise = new Promise((valid) => {
                        that.web3.eth.getAccounts(function (err, accounts) {
                            if (err != null) {
                                retObject.szMsgType = "error";
                                retObject.szDescription = err;
                                retObject.bResult = false;
                                retObject.szAccount = "";
                            } else if (accounts.length === 0) {
                                retObject.szMsgType = "error";
                                retObject.szDescription = 'Could not read your accounts from MetaMask. Try unlocking it.';
                                retObject.bResult = false;
                                retObject.szAccount = "";
                            } else {
                                retObject.szMsgType = "info";
                                retObject.szDescription = that._vendor + ' is accessible';
                                retObject.bResult = true;
                                retObject.szAccount = accounts[0]
                            }
                            valid(retObject);
                        });
                    });
                    let result = await promise;
                    that.setAccount(result.szAccount);
                    retObject.bResult = result.bResult;
                    retObject.szMsgType = result.szMsgType;
                    retObject.szDescription = result.szDescription;
                } else {
                    let msg = "type of window.ethereum :" + typeof window.ethereum;
                    msg += "\r\ntype of window.web3:" + typeof window.web3;
                    msg += "\r\n" + that._vendor + " is not accessible!";

                    retObject.szMsgType = "error";
                    retObject.szDescription = msg;
                    retObject.bResult = false;
                }
                this.szMsgType = retObject.szMsgType;
                this.szDescription = retObject.szDescription;
                this.bResult = retObject.bResult;
                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription
                });
                return this.bResult;
            },

            checkNetwork: async function (callback) {
                let that = this;
                var retObject = {szTitle: "", bResult: false, szMsgType: "", szDescription: ""};
                retObject.szTitle = that.vendor + " Ethereum Network";
                let networkState = new Promise((valid) => {
                    that.web3.version && that.web3.version.getNetwork((err, netId) => {
                        if (err != null) {
                            retObject.szMsgType = "error";
                            retObject.szDescription = err;
                            retObject.bResult = false;
                        } else if (that.network.includes(netId) == false) {
                            retObject.szMsgType = "error";
                            retObject.szDescription = 'This application requires the main network, please switch it in your MetaMask UI.';
                            retObject.bResult = false;
                        } else {
                            retObject.szMsgType = "info";
                            retObject.szDescription = that.vendor + ' is working on ethereum main network.';
                            retObject.bResult = true;
                        }
                        valid(retObject);
                    });
                });

                let result = await networkState;
                this.szTitle = result.szTitle;
                this.szMsgType = result.szMsgType;
                this.szDescription = result.szDescription;
                this.bResult = result.bResult;
                callback({
                    success: this.bResult,
                    type: this.szMsgType,
                    title: this.szTitle,
                    description: this.szDescription
                });
                return this.bResult;
            },
            logData: function (data) {
                console.dir(data)
            },

            oldFunctions: async function () {
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    try {
                        await window.ethereum.enable();
                        this.web3TimerCheck(window.web3);
                    } catch (error) {
                        this.Log(this.MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION, "USER_DENIED_ACCOUNT_AUTHORIZATION");
                    }
                } else if (window.web3) {
                    window.web3 = new Web3(this.web3.currentProvider);
                    this.web3TimerCheck(window.web3);
                    alert("2")
                } else {
                    alert("3")
                    this.web3 = null;
                    this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
                    console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
                }
            },
            async connectToWeb3() {
                this.setAppName("APPNAME");
                this.setTimeStamp(new Date().getTime());
                this.setVendor("Metamask/TrustWallet/ImToken/SaturnWallet/NiftyWallet");
                console.log("Initialized");
                console.log(this.getTimeStamp())

                let that = this;
                if (this.isInstalled(function (data) {
                    that.logData(data);
                }).then === false) {
                    return false;
                }

                if (await this.isLocked(function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }

                if (await this.checkNetwork(function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }

                if (await this.signMessage(function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }

                if (await this.verifyMessage(function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }
                /*
               ERC20 TOKEN TRANSFER
               0xdac17f958d2ee523a2206206994597c13d831ec7 = USDT (TETHER Contract Address)
               0xE22f762f1140C62CeD9af924651040D105828551 = Receiver Address
               if (await this.sendDeposit("0xdac17f958d2ee523a2206206994597c13d831ec7","0xE22f762f1140C62CeD9af924651040D105828551","1", function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }
               ETHEREUM TRANSFER
               0xbADd297C3dF680638d3701b788b01F37133084Af = Receiver Address
               if (await this.sendDeposit("","0xE22f762f1140C62CeD9af924651040D105828551","1", function (data) {
                    that.logData(data);
                }) === false) {
                    return false;
                }
                */
            },
            mounted() {

            },

        }
    };
</script>
<template>
    <div>
        <button v-on:click.stop="connectToWeb3" class="btn btn-outline-warning btn-lg btn-block">Connect</button>
    </div>
</template>
<style scoped>

</style>
