<template>
  <div id="app">
    <div class="banner">
      <img
        src="https://blog.instadapp.io/all-things-instadapp/img/logo/square.png"
        width="100"
        alt="InstaDapp"
        class="logo"
      />
      <h1>DSA Connect</h1>
    </div>
    <div class="bottom">
      <button v-if="!$store.state.connected" v-on:click="$store.dispatch('connect')">Connect Metamask</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Web3 from "web3"
import {DSA} from 'dsa-connect'

export default {
    name: 'app',
    beforeCreate
}

async function beforeCreate() {
  window.web3 = new Web3(window.ethereum);
  Vue.prototype.$dsa = new DSA(window.web3)
  console.log(this.$dsa)

  await window.web3.eth.getAccounts().then((accounts) => {
      if(!accounts.length < 1) this.$store.commit('setConnected', true)
      this.$store.dispatch('connect')
  })

}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
