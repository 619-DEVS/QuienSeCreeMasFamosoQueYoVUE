<template>
  <div class="tabs" color="danger">
    <div
      :class="{ active: activeTab == 'notFollowingMe' }"
      class="tabs-item"
      @click="setActiveTab('notFollowingMe')"
    >
      <ion-icon size="large" :icon="personRemove" />
    </div>
    <div
      :class="{ active: activeTab == 'notFollowing' }"
      class="tabs-item"
      @click="setActiveTab('notFollowing')"
    >
      <ion-icon size="large" :icon="personAdd" />
    </div>
    <div
      :class="{ active: activeTab == 'history' }"
      class="tabs-item"
      @click="setActiveTab('history')"
    >
      <ion-icon size="large" :icon="search" />
    </div>
  </div>
</template>
<script>
import { personAdd, personRemove, search } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
export default {
  name: "TabsComponent",
  components: { IonIcon },
  setup() {
    return {
      personAdd,
      personRemove,
      search,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.$store.dispatch("setActiveTab", tab);
    },
  },
  computed: {
    activeTab() {
      return this.$store.getters["getActiveTab"];
    },
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
  justify-content: space-between;
  background: var(--ion-color-light-shade);

  &-item {
    width: 33%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: var(--ion-color-light);

    // &:nth-child(2) {
    //   border-left: 2px solid var(--ion-color-light-tint);
    //   border-right: 2px solid var(--ion-color-light-tint);
    // }

    &.active {
      color: var(--ion-color-danger);
      background: var(--ion-color-dark);
    }
  }
}
</style>