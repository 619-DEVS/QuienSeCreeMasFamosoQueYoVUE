<template>
  <h1 class="text-center">{{ listTitle }}</h1>
  <ion-list>
    <item-history-component
      v-for="item of list"
      :key="item.user"
      :element="item"
      @click="changeUser(item)"
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
    list: [],
    listTitle: String,
  },
  methods: {
    changeUser(user){
        console.log(user)
    }
  }
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
