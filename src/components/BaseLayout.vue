<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
          <ion-title>{{ pageTitleStore }}</ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div id="mainView">
        <slot />
      </div> 
    </ion-content>
  </div>

  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>¿Quién se cree más famoso que YO?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item router-link="/home/" @click="changePageTitle('Inicio')">
          <ion-icon :icon="homeOutline" />
          <ion-title>Inicio</ion-title>
        </ion-item>
        <ion-item router-link="/about/" @click="changePageTitle('Sobre Nosotros')">
          <ion-icon :icon="transgenderOutline" />
          <ion-title>Sobre Nosotros</ion-title>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonButtons,
  IonMenuButton,
  menuController 
} from "@ionic/vue";

import {
  homeOutline,
  transgenderOutline,
  pulseOutline,
} from "ionicons/icons";
export default {
  name: "BaseLayout",
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonButtons,
    IonMenuButton,
  },
  props: {
    pageTitle: {},
  },
  setup() {
    return {
      homeOutline,
      transgenderOutline,
      pulseOutline,
    };
  },
  computed: {
    pageTitleStore() {
      return this.$store.getters["getPageTitle"];
    },
  },
  methods: {
    changePageTitle(newPageTitle) {
      this.$store.dispatch("setPageTitle", newPageTitle);
      menuController.close();
    },
  },
};
</script>
<style lang="scss">
#mainView {
  min-height: 95%;
  padding: 10px;
  display: flex;
}
.text {
  &-center {
    text-align: center;
  }
}

.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>