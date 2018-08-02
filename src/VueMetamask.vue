<script>
export default {
    props: {
        userMessage:{
            type: String,
            default: "null"
        }
    },
    data(){
        return {
            web3: null,
            MetaMaskId: "1",        // main net netID
            netID: '1',             // user metamask id
            MetaMaskAddress: "",    // user Address
            Web3Interval: null,
            AccountInterval: null,
            NetworkInterval: null,
            stateLog: null,
            isComplete: false,
            type: "INIT",
            MetamaskMsg:{
                LOAD_MATAMASK_WALLET_ERROR: 'Loading metamask error, please try later',
                EMPTY_METAMASK_ACCOUNT: 'Please log in to your metamask to continue with this app.',
                NETWORK_ERROR: 'The connection is abnormal, please try again',
                METAMASK_NOT_INSTALL: 'Please install metamask for this application',
                METAMASK_TEST_NET: 'Currently not in the main network.',
                METAMASK_MAIN_NET: 'Currently Main network',
            }
        };
    },
    methods:{
        fetchWeb3() {
            let web3 = window.web3;
            if (typeof web3 === 'undefined') {
                this.web3 = null;
                this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
            }
        },
        fetchAccounts() {
            if (this.web3 === null) return;
            this.web3.eth.getAccounts((err, accounts) => {
                if (err != null) return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
                if (accounts.length === 0){
                    this.MetaMaskAddress = "";
                    this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, 'NO_LOGIN');
                    return;
                } 
                this.MetaMaskAddress = accounts[0]; // user Address
            });
        },
        fetchNetWork() {
            this.web3.version.getNetwork((err, netID) => {
                if (err != null) return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
                this.netID = netID;    //User MetaMask's current status
                if( this.MetaMaskAddress !== '' && this.MetaMaskId !== netID) return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'NO_MAINNET');
                if( this.MetaMaskAddress !== '') this.Log(this.MetamaskMsg.METAMASK_MAIN_NET, "MAINNET");
            })
        },
        Log(msg, type=""){
            const letType = type;
            if(letType === this.type) return;
            const message = this.userMessage === "null" ? msg : this.userMessage;
            this.type = type;
            this.$emit("onComplete", {
                message,
                type,
                netID: this.netID
            });
        }
    },
    mounted(){
        let web3 = window.web3;
        if (typeof web3 !== 'undefined') {
            window.web3 = new Web3(web3.currentProvider);
            this.web3 = window.web3;
            this.fetchAccounts();
            this.fetchNetWork();
            this.Web3Interval = setInterval(()=> this.fetchWeb3(), 1000);
            this.AccountInterval = setInterval(()=> this.fetchAccounts(), 1000);
            this.NetworkInterval = setInterval(()=>this.fetchNetWork(), 1000);
        } else {
            this.web3 = null;
            this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
        }
    }
};
</script>
<template>
    <div class="vue-metamask"></div>
</template>
<style lang='scss' scoped>
    .vue-metamask{
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
    }
</style>
