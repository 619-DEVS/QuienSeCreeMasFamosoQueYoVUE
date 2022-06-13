import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createStore } from 'vuex'


import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


import BaseLayout from '@/components/BaseLayout.vue';
import axios from 'axios';
const store = createStore({
  state() {
    return {
      pageTitle: 'Bienvenide',
      currentUsername: '',
      history: {},
      currentNotFollowingMe: [],
      currentNotFollowing: [],
      activeTab: '',
      isLoading: false,
      hasError: {open: false, message: ''},
      secretMode: false,
      fingerprint: '',
    }
  },
  mutations: {
    changeHasError(state, newState) {
      state.hasError = newState;
    },
    changePageTitle(state, newPageTitle) {
      state.pageTitle = newPageTitle;
    },
    changeCurrentNotFollowingMe(state, currentNotFollowingMe) {
      state.currentNotFollowingMe = currentNotFollowingMe;
    },
    changeCurrentNotFollowing(state, currentNotFollowing) {
      state.currentNotFollowing = currentNotFollowing;
    },
    changeCurrentUsername(state, currentUsername) {
      state.currentUsername = currentUsername;
    },
    changeActiveTab(state, activeTab) {
      state.activeTab = activeTab;
    },
    addHistory(state, { username, history }) {
      state.history[username] = history;
    },
    changeLoadingState(state, currentState) {
      state.isLoading = currentState;
    },
    changeSecretMode(state, secretMode) {
      state.secretMode = secretMode;
    },
    changeFingerprint(state, fingerprint) {
      state.fingerprint = fingerprint;
    }


  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle
    },
    getNotFollowingMe(state) {
      return state.currentNotFollowingMe;
    },
    getNotFollowing(state) {
      return state.currentNotFollowing;
    },
    getCurrentUsername(state) {
      return state.currentUsername;
    },
    getActiveTab(state) {
      return state.activeTab;
    },
    getHistory(state) {
      return state.history;
    },
    getHistoryNotFollowingMe(state) {
      return (username) => {
        return state.history[username].notFollowingMe.length
      }
    },
    getHistoryNotFollowing(state) {
      return (username) => {
        return state.history[username].notFollowing.length
      }
    },
    getLoadingState(state) {
      return state.isLoading;
    },
    getHasError(state) {
      return state.hasError;
    },
    getSecretMode(state) {
      return state.secretMode;
    },
    getFingerprint(state)  {
      return state.fingerprint;
    }

  },
  actions: {
    setPageTitle({ commit }, newTitle) {
      commit('changePageTitle', newTitle);
    },
    setCurrentNotFollowingMe({ commit }, newCurrentNotFollowingMe) {
      commit('changeCurrentNotFollowingMe', newCurrentNotFollowingMe);
    },
    setCurrentNotFollowing({ commit }, newCurrentNotFollowing) {
      commit('changeCurrentNotFollowing', newCurrentNotFollowing);
    },
    setCurrentUsername({ commit }, newCurrentUsername) {
      commit('changeCurrentUsername', newCurrentUsername);
    },
    setActiveTab({ commit }, newActiveTab) {
      commit('changeActiveTab', newActiveTab);
    },
    addHistoryElement({ commit }, { username, history }) {
      commit('addHistory', { username, history });
    },
    setLoadingState({ commit }, newLoadingState) {
      commit('changeLoadingState', newLoadingState);
    },
    setHasError({commit}, newHasError) {
      commit('changeHasError', newHasError);
    },
    setSecretMode({commit}, secretMode) {
      commit('changeSecretMode', secretMode)
    },
    async handleFingerprint({commit}) {
      
      return new Promise(async (resolve, reject) => {
          try {
              let fingerprint = localStorage.getItem('fingerprint');
              if (fingerprint) {
                commit('changeFingerprint', fingerprint);
                const response = await axios.get(`http://80.88.90.58:619/fingerprint/${fingerprint}`);
                commit('changeSecretMode', response.data.fingerprint)
                resolve();
                return;
              }

              fingerprint = makeid(6);
              localStorage.setItem('fingerprint', fingerprint);
              await axios.post('http://80.88.90.58:619/fingerprint', {fingerprint: fingerprint});
              resolve();
          } catch(error) {
              console.error(error);
              reject(error)
          }
      });
    },
    async deleteFingerprint({commit}, fingerprint) {
      return new Promise(async (resolve, reject) => {
          try {
            await axios.delete(`http://80.88.90.58:619/fingerprint/${fingerprint}`);
            resolve();
              
          } catch(error) {
              console.error(error);
              reject(error)
          }
      });
    },
    async changeFingerprint({commit, getters}, {value, fingerprint}) {
      
      return new Promise(async (resolve, reject) => {
          try {
              await axios.put(`http://80.88.90.58:619/fingerprint/${fingerprint}`, {value: value});
              resolve();
          } catch(error) {
              console.error(error);
              reject(error)
          }
      });
    }
  }
})


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

app.component('base-layout', BaseLayout);

router.isReady().then(() => {
  app.mount('#app');
});


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}