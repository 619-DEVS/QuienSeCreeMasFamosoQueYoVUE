<template>
  <ion-page>

    <tabs-page />
      <!-- <ion-router-outlet></ion-router-outlet> -->
    <!-- <main-menu /> -->
  </ion-page>
</template>
<script>
// import MainMenu from "@/components/MainMenu.vue";
import TabsPage from "@/views/TabsPage.vue";
import { IonPage} from '@ionic/vue'

export default {
  name: "MainView",
  components: {  TabsPage,IonPage },
};
</script>
<style lang="scss" scoped>
</style>