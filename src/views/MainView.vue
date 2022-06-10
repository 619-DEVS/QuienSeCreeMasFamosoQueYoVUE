<template>
  <ion-tabs>
    <main-menu />
    <ion-router-outlet />
    <tab-bar />
  </ion-tabs>
</template>

<script>
import { defineComponent } from "vue";
import { IonTabs, IonRouterOutlet } from "@ionic/vue";
import MainMenu from "@/components/MainMenu.vue";
import TabBar from "@/components/TabBar.vue";

export default defineComponent({
  name: "MainView",
  components: { IonTabs, IonRouterOutlet, MainMenu, TabBar },
});
</script>
