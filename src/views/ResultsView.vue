<template>
  <div class="box">
    <div class="list">
      <div :class="{active: (activeTab == 'notFollowingMe')}" v-show="activeTab == 'notFollowingMe'">
        <list-component   :list="currentNotFollowingMe" listTitle="Personas que no me siguen" />
      </div>
      <div :class="{active: (activeTab == 'notFollowing')}" v-show="activeTab == 'notFollowing'">
        <list-component  :list="currentNotFollowing" listTitle="Personas que no sigo" />
      </div>
    </div>
  </div>
  <tabs-component />
</template>
<script>
import ListComponent from "@/components/ListComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";
export default {
  name: "ResultsView",
  components: { ListComponent, TabsComponent },
  computed: {
    currentNotFollowingMe() {
      return this.$store.getters["getNotFollowingMe"];
    },
    currentNotFollowing() {
      return this.$store.getters["getNotFollowing"];
    },
    activeTab() {
      return this.$store.getters["getActiveTab"];
    },
  }
};
</script>
<style lang="scss" scoped>
.box{
  width: 100%;
}

.list{
  margin-bottom: 60px;
}

list-component{
}
</style>