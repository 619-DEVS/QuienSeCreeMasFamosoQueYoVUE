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
  state () {
    return {
      pageTitle : 'Test'  
    }
  },
  mutations: {
    changePageTitle (state, newPageTitle) {
        state.pageTitle = newPageTitle;
    }
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle
    }
  },
  actions: {
    setPageTitle({commit}, newTitle) {
      commit('changePageTitle', newTitle);
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