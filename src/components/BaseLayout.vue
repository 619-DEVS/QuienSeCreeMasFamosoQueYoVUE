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
          <ion-icon :icon="mail" />
          <ion-label>Inicio</ion-label>
        </ion-item>
        <ion-item router-link="/about/" @click="changePageTitle('Sobre Nosotros')">
          <ion-icon :icon="mail" />
          <ion-label>Sobre Nosotros</ion-label>
        </ion-item>
        <ion-item router-link="/results/" @click="changePageTitle('Resultados')">
          <ion-icon :icon="mail" />
          <ion-label>Resultados</ion-label>
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
  IonLabel,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";

import {
  mail,
  paperPlane,
  heart,
  archive,
  trash,
  warning,
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
    IonLabel,
    IonButtons,
    IonMenuButton,
  },
  props: {
    pageTitle: {},
  },
  setup() {
    return {
      mail,
      paperPlane,
      heart,
      archive,
      trash,
      warning,
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
    },
  },
};
</script>
<style lang="scss">
#mainView {
  padding: 20px;
}
.text {
  &-center {
    text-align: center;
  }
}
</style>