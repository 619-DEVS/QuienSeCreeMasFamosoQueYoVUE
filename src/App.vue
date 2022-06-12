<template>
  <ion-app>
    <base-layout>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </base-layout>
  </ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
  },
});
</script>