<template>
  <h1 class="text-center">{{ listTitle }}</h1>
  <ion-list>
    <item-history-component
      v-for="(history, username) of list"
      :key="username"
      :history="history"
      :username="username"
      @click="changeUser(username, history)"
    ></item-history-component> 
  </ion-list>
</template>
<script>
import ItemHistoryComponent from "./ItemHistoryComponent.vue";
import { IonList } from "@ionic/vue";
export default {
  name: "HistoryComponent",
  components: { ItemHistoryComponent, IonList },
  props: {
    list: {},
    listTitle: String,
  },
  methods: {
    changeUser(username, history) {
      this.$store.dispatch("setCurrentUsername", username);
      this.$store.dispatch("setCurrentNotFollowingMe", history.notFollowingMe);
      this.$store.dispatch("setCurrentNotFollowing", history.notFollowing);
      this.$store.dispatch("setActiveTab", 'notFollowingMe');
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  overflow: scroll;
}
ion-list {
  background: transparent;
}
</style>
