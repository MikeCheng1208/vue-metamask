<script>
import Web3 from "web3";
export default {
  props: {
    userMessage: {
      type: String,
      default: "null",
    },
    initConnect: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      web3: null,
      MetaMaskId: "1", // main net netID
      netID: "1", // user metamask id
      MetaMaskAddress: "", // user Address
      Web3Interval: null,
      AccountInterval: null,
      NetworkInterval: null,
      stateLog: null,
      isComplete: false,
      type: "INIT",
      MetamaskMsg: {
        LOAD_MATAMASK_WALLET_ERROR: "Loading metamask error, please try later",
        EMPTY_METAMASK_ACCOUNT:
          "Please log in to your metamask to continue with this app.",
        NETWORK_ERROR: "The connection is abnormal, please try again",
        METAMASK_NOT_INSTALL: "Please install metamask for this application",
        METAMASK_TEST_NET: "Currently not in the main network.",
        METAMASK_MAIN_NET: "Currently Main network",
        USER_DENIED_ACCOUNT_AUTHORIZATION: "User denied account authorization",
      },
    };
  },
  methods: {
    checkWeb3() {
      let web3 = window.web3;
      if (typeof web3 === "undefined") {
        this.web3 = null;
        this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
      }
    },
    checkAccounts() {
      if (this.web3 === null) return;
      this.web3.eth.getAccounts((err, accounts) => {
        console.log();

        if (err != null)
          return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
        if (accounts.length === 0) {
          this.MetaMaskAddress = "";
          this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, "NO_LOGIN");
          return;
        }
        this.MetaMaskAddress = accounts[0]; // user Address
      });
    },
    checkNetWork() {
      try {
        // Main Network: 1
        // Ropsten Test Network: 3
        // Kovan Test Network: 42
        // Rinkeby Test Network: 4
        // Goerli Test Network: 5
        this.web3.eth.net.getId().then((netId) => {
          this.netID = netId;
          if (this.MetaMaskAddress !== "" && netId === 1)
            return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "MAINNET");
          if (this.MetaMaskAddress !== "" && netId === 3)
            return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "ROPSTEN");
          if (this.MetaMaskAddress !== "" && netId === 42)
            return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "KOVAN");
          if (this.MetaMaskAddress !== "" && netId === 4)
            return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "RINKEBY");
          if (this.MetaMaskAddress !== "" && netId === 5)
            return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "GOERLI");
          if (this.MetaMaskAddress !== "")
            this.Log(this.MetamaskMsg.METAMASK_MAIN_NET, "MAINNET");
        });
      } catch (err) {
        this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
      }
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
    async init() {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.send("eth_requestAccounts");
          this.web3TimerCheck(window.web3);
        } catch (error) {
          this.Log(
            this.MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION,
            "USER_DENIED_ACCOUNT_AUTHORIZATION"
          );
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        this.web3TimerCheck(window.web3);
      } else {
        this.web3 = null;
        this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
        console.error(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },
  },
  mounted() {
    if (this.initConnect) {
      this.init();
    }
  },
};
</script>
<template>
  <div id="vue-metamask"></div>
</template>
<style scoped>
#vue-metamask {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
</style>
