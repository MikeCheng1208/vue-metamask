<script setup>
import { ref, onMounted, defineEmits, defineExpose } from "vue";
import Web3 from "web3";

const props = defineProps({
  userMessage: {
    type: String,
    default: "null",
  },
  initConnect: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["complete"]);

const web3 = ref(null);
// const MetaMaskId = ref("1"); // main net netID
const netID = ref("1"); // user metamask id
const MetaMaskAddress = ref(""); // user Address
const Web3Interval = ref(null);
const AccountInterval = ref(null);
const NetworkInterval = ref(null);
// const stateLog = ref(null);
// const isComplete = ref(false);
const type = ref("INIT");

const MetamaskMsg = {
  LOAD_MATAMASK_WALLET_ERROR: "Loading metamask error, please try later",
  EMPTY_METAMASK_ACCOUNT:
    "Please log in to your metamask to continue with this app.",
  NETWORK_ERROR: "The connection is abnormal, please try again",
  METAMASK_NOT_INSTALL: "Please install metamask for this application",
  METAMASK_TEST_NET: "Currently not in the main network.",
  METAMASK_MAIN_NET: "Currently Main network",
  USER_DENIED_ACCOUNT_AUTHORIZATION: "User denied account authorization",
};

const checkWeb3 = () => {
  if (typeof window.ethereum === "undefined") {
    web3.value = null;
    Log(MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
  }
};

const checkAccounts = async () => {
  if (web3.value === null) return;
  try {
    const accounts = await web3.value.eth.getAccounts();
    if (accounts.length === 0) {
      MetaMaskAddress.value = "";
      Log(MetamaskMsg.EMPTY_METAMASK_ACCOUNT, "NO_LOGIN");
      return;
    }
    MetaMaskAddress.value = accounts[0];
  } catch (err) {
    Log(MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
  }
};

const checkNetWork = async () => {
  try {
    const chainId = await web3.value.eth.getChainId();
    netID.value = chainId;
    if (MetaMaskAddress.value === "") return;
    const networkMap = {
      1: { message: MetamaskMsg.METAMASK_MAIN_NET, type: "MAINNET" },
      3: { message: MetamaskMsg.METAMASK_TEST_NET, type: "ROPSTEN" },
      42: { message: MetamaskMsg.METAMASK_TEST_NET, type: "KOVAN" },
      4: { message: MetamaskMsg.METAMASK_TEST_NET, type: "RINKEBY" },
      5: { message: MetamaskMsg.METAMASK_TEST_NET, type: "GOERLI" },
    };
    const network = networkMap[chainId] || {
      message: MetamaskMsg.METAMASK_TEST_NET,
      type: "UNKNOWN",
    };
    Log(network.message, network.type);
  } catch (err) {
    Log(MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
  }
};

const Log = (msg, newType = "") => {
  if (newType === type.value) return;
  const message = props.userMessage === "null" ? msg : props.userMessage;
  type.value = newType;

  emit("complete", {
    web3: web3.value,
    type: newType,
    metaMaskAddress: MetaMaskAddress.value,
    message,
    netID: netID.value,
  });
};

const web3TimerCheck = (web3Instance) => {
  web3.value = web3Instance;
  checkAccounts();
  checkNetWork();
  Web3Interval.value = setInterval(() => checkWeb3(), 1000);
  AccountInterval.value = setInterval(() => checkAccounts(), 1000);
  NetworkInterval.value = setInterval(() => checkNetWork(), 1000);
};

const init = async () => {
  if (window.ethereum) {
    const web3Instance = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      web3TimerCheck(web3Instance);
    } catch (error) {
      Log(
        MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION,
        "USER_DENIED_ACCOUNT_AUTHORIZATION"
      );
    }
  } else {
    web3.value = null;
    Log(MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
    console.error(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

defineExpose({
  init,
});

onMounted(() => {
  if (props.initConnect) {
    init();
  }
});
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
