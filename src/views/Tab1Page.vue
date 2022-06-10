<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ExploreContainer test="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
export default defineComponent({
  name: "Tab1Page",
  components: {
    ExploreContainer,
    IonContent,
    IonPage
  },
});
</script>
