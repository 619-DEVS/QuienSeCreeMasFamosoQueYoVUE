<template>
  <h1 class="text-center">{{ listTitle }}</h1>
  <ion-list>
    <ion-searchbar
      placeholder="A ver el hijo de puta 😡"
      animated
      v-model="listFilter"
    ></ion-searchbar>

    <item-component
      v-for="item of listFiltered"
      :key="item.user"
      :element="item"
    ></item-component>
  </ion-list>
</template>
<script>
import ItemComponent from "./ItemComponent.vue";
import { IonList, IonSearchbar } from "@ionic/vue";
export default {
  name: "ListComponent",
  components: { ItemComponent, IonList, IonSearchbar },
  props: {
    list: Array,
    listTitle: String,
  },
  computed: {
    listFiltered() {
      return this.list.filter((element) =>
        element.username.includes(this.listFilter)
      );
    },
  },
  data() {
    return {
      listFilter: "",
    };
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
