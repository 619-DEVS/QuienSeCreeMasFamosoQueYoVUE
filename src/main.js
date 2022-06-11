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

const store = createStore({
  state() {
    return {
      pageTitle: 'Bienvenide',
      currentUsername: '',
      history: {},
      currentNotFollowingMe: [],
      currentNotFollowing: [],
      activeTab: 'notFollowingMe',
    }
  },
  mutations: {
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