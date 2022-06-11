<template>
  <ion-item>
    <ion-avatar slot="start">
      <img src="" />
    </ion-avatar>
    <ion-label>
      <h2>{{element.username}}</h2>
      <h3>{{element.name}}</h3>
    </ion-label>
    <ion-icon  :icon="openOutline"/>
  </ion-item>
</template>
<script>
import {
  openOutline
} from "ionicons/icons";
import { IonItem, IonAvatar, IonLabel, IonIcon } from "@ionic/vue";
export default {
  name: "ListComponent",
  components: { IonItem, IonAvatar, IonLabel, IonIcon },
  props: {
    element: {}
  },
  setup() {
    return {
      openOutline
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item{
  margin: 10px 0px;
}
</style>

