<script>
export default {
    props: {
        metaMaskId: {
            type: String,
            default: "1"
        },
    },
    data(){
        return {
            web3: null,
            metaMaskId: this.props.metaMaskId,        
            netID: '1',                         //User MetaMask netID
            MetaMaskAddress: "",                //User MetaMask Address
            Message: "",                        //Error Message
            Web3Interval: null,
            AccountInterval: null,
            NetworkInterval: null,
            type: "Nologin",
            MetamaskMsg:{
                LOAD_MATAMASK_WALLET_ERROR: "There's an error loading Metamask, please try again later.",
                EMPTY_METAMASK_ACCOUNT: 'Please log in your Metamask to proceed.',
                METAMASK_ACCOUNT: 'You are choosing this Metamask wallet:',
                NETWORK_ERROR: "There's a connection error, please try again.",
                METAMASK_NOT_INSTALL: 'Please download Metamask to proceed.',
                METAMASK_TEST_NET: 'Please choose mainnet to proceed this application.'
            }
        };
    },
    methods:{
        fetchWeb3() {
            let web3 = window.web3;
            if (typeof web3 === 'undefined') {
                this.web3 = null;
                this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL);
            }
        },
        fetchAccounts() {
            if (this.web3 === null) return;
            this.web3.eth.getAccounts((err, accounts) => {
                if (err != null) return this.Log(this.MetamaskMsg.LOAD_MATAMASK_WALLET_ERROR);
                if (accounts.length === 0)  return this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, 'Nologin');
                this.MetaMaskAddress = accounts[0]; //User MetaMask Address
            });
        },
        fetchNetWork() {
            this.web3.version.getNetwork((err, netID) => {
                if (err != null) return this.Log(this.MetamaskMsg.METAMASK_TEST_NET);
                if( this.MetaMaskAddress !== '' && this.metaMaskId !== netID) return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, 'NoMainNet');
                this.netID = netID;
            })
        },
        Log(msg, type=""){
            this.Message = msg;
            this.$emit("onComplete", {msg});
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
            this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL);
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
