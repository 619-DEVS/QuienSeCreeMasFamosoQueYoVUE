<template>
  <ion-item>
    <ion-avatar slot="start">
      <!-- <img :src="element.profile_pic_url" /> --> <!-- TODO: Cargar foto de perfil -->
      <img src="../../public/assets/img/avatar_default.jpg" />
    </ion-avatar>
    <ion-label>
      <h2>{{ element.username }}</h2>
      <h3>{{ element.full_name }}</h3>
    </ion-label>
    <a class="link" href="instagram://{{element.username}}" target="_blank">
      <ion-icon :icon="openOutline" />
    </a> 
  </ion-item>
</template>
<script>
import { openOutline } from "ionicons/icons";
import { IonItem, IonAvatar, IonLabel, IonIcon } from "@ionic/vue";
export default {
  name: "ItemComponent",
  components: { IonItem, IonAvatar, IonLabel, IonIcon },
  props: {
    element: {},
  },
  setup() {
    return {
      openOutline,
    };
  },
};
</script>
<style lang="scss" scoped>
ion-item {
  margin: 10px 0px;
}

.link{
  font-size: 24px;
  text-decoration: none;
  color: var(--ion-color-dark);
}
</style>

