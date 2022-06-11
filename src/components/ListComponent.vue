<template>
  <h1 class="text-center">{{ listTitle }}</h1>
  <ion-list>
    <item-component
      v-for="item of list"
      :key="item.user"
      :element="item"
    ></item-component>
  </ion-list>
</template>
<script>
import ItemComponent from "./ItemComponent.vue";
import { IonList } from "@ionic/vue";
export default {
  name: "ListComponent",
  components: { ItemComponent, IonList },
  props: {
    list: [],
    listTitle: String,
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
