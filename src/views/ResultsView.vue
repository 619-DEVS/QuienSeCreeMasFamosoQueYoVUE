<template>
  <div class="box">
    <div>
      <div class="list">
        <div
          :class="{ active: activeTab == 'notFollowingMe' , 'slide-fade-enter-from': activeTab == 'notFollowingMe' }"
          v-show="activeTab == 'notFollowingMe'"
        >
          <list-component
            :list="currentNotFollowingMe"
            listTitle="Personas que no me siguen"
          />
        </div>
        <div
          :class="{ active: activeTab == 'notFollowing' , 'slide-fade-enter-from': activeTab == 'notFollowing' }"
          v-show="activeTab == 'notFollowing'"
        >
          <list-component
            :list="currentNotFollowing"
            listTitle="Personas que no sigo"
          />
        </div>
        <div
          :class="{ active: activeTab == 'history' , 'slide-fade-enter-from': activeTab == 'history' }"
          v-show="activeTab == 'history'"
        >
          <history-component :list="history" listTitle="Historial" />
        </div>
      </div>
    </div>
    <tabs-component />
  </div>
</template>
<script>
import ListComponent from "@/components/ListComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import HistoryComponent from "@/components/HistoryComponent.vue";
export default {
  name: "ResultsView",
  components: { ListComponent, TabsComponent, HistoryComponent },
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
    history() {
      return this.$store.getters["getHistory"];
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}

.list {
  margin-bottom: 60px;
}
</style>