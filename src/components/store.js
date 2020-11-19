import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'
//let web3 = new Web3('wss://mainnet.infura.io/ws/v3/fcc636a538b54959a033709ee3a3ab90')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
  },
  mutations: {
    setConnected (state, value) {
      state.connected = value
      console.log(`Account Connected: ${state.connected}`)
    }
  },
  actions: {
    connect ({ commit }) {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable().catch((err) => {
            commit("setConnected", false)
            console.log(err)
          })
          window.ethereum.on('accountsChanged', (accounts) => {
            if(!accounts.length < 1) {
              commit("setConnected", true)
            } else {
              commit("setConnected", false)
            }
            console.log(accounts)
          })
        }
    }
  }
})

