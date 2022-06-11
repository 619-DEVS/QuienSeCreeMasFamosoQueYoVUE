<template>
  <div class="tabs" color="danger">
    <div class="tabs-item">
      <ion-icon size="large" :icon="personRemove" />
    </div>
    <div class="tabs-item">
      <ion-icon size="large" :icon="personAdd" />
    </div>
  </div>
</template>
<script>
import { personAdd, personRemove } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
export default {
  name: "TabsComponent",
  components: { IonIcon },
  setup() {
    return {
      personAdd,
      personRemove,
    };
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  width: 100%;
  position: fixed;
  height: 56px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: row;
  justify-content: center;
  background: var(--ion-color-light-shade);

  &-item {
    width: 50%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:first-child {
      border-right: 2px solid var(--ion-color-light-tint);
    }

    &.active{
        color:var(--ion-color-danger);
        background:var(--ion-color-dark);
    }
  }
}
</style>