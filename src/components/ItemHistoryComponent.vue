<template>
  <ion-item>
    <div class="historyElement">
      <div class="historyElement-title">
        <ion-icon size="large" :icon="sadOutline" />
        <ion-title>{{ username }}</ion-title>
      </div>

      <hr class="historyElement-divider" />
      <div class="historyElement-label">
        <ion-label>Hijos de puta:</ion-label>
        <ion-badge color="danger" slot="end">{{ numberNotFollowingMe }}</ion-badge>
      </div>
      <div class="historyElement-label">
        <ion-label>No se merecen mi follow:</ion-label>
        <ion-badge color="success" slot="end">{{ numberNotFollowing }}</ion-badge>
      </div>
    </div>
  </ion-item>
</template>
<script>
import { sadOutline } from "ionicons/icons";
import { IonItem, IonLabel, IonBadge, IonTitle, IonIcon } from "@ionic/vue";
export default {
  name: "ItemHistoryComponent",
  components: { IonItem, IonLabel, IonBadge, IonTitle, IonIcon },
  props: {
    username: String,
    history: {},
  },
  setup() {
    return {
      sadOutline,
    };
  },
  computed: {
    numberNotFollowingMe() {
      return this.$store.getters["getHistoryNotFollowingMe"](this.username);
    },
    numberNotFollowing() {
      return this.$store.getters["getHistoryNotFollowing"](this.username);
    },
  },
};
</script>
<style lang="scss" scoped>
ion-item {
  margin: 10px 0px;
}
.historyElement {
  padding: 10px 0px;
  display: flex;
  flex-flow: column;
  width: 100%;

  &-label {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 5px 0;
  }

  &-divider {
    width: 100%;
    background: var(--ion-color-dark);
  }

  &-title {
    display: flex;
    flex-flow: row;
    align-items: center;
    text-transform: capitalize;
    justify-content: center;
  }
}
</style>

