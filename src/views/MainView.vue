<template>
  <main-menu />
  <ion-router-outlet></ion-router-outlet>
  <tabs-page />
</template>
<script>
import MainMenu from "@/components/MainMenu.vue";
import TabsPage from "@/views/TabsPage.vue";
import {IonRouterOutlet} from '@ionic/vue'

export default {
  name: "MainView",
  components: { MainMenu, TabsPage, IonRouterOutlet },
};
</script>
<style lang="scss" scoped>
</style>