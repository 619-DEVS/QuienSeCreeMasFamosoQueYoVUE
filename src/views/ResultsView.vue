<template>
  <div class="box" v-if="!isLoading">
    <div>
      <div class="list">
        <transition name="slide-fade">
          <div
            :class="{
              active: activeTab == 'notFollowingMe',
              test: activeTab == 'notFollowingMe',
            }"
            v-show="activeTab == 'notFollowingMe'"
          >
            <list-component
              :list="currentNotFollowingMe"
              listTitle="Personas que no me siguen"
            />
          </div>
        </transition>
        <transition name="slide-fade">
          <div
            :class="{
              active: activeTab == 'notFollowing',
              test: activeTab == 'notFollowing',
            }"
            v-show="activeTab == 'notFollowing'"
          >
            <list-component
              :list="currentNotFollowing"
              listTitle="Personas que no sigo"
            />
          </div>
        </transition>
        <transition name="slide-fade">
          <div
            :class="{
              active: activeTab == 'history',
              test: activeTab == 'history',
            }"
            v-show="activeTab == 'history'"
          >
            <history-component :list="history" listTitle="Historial" />
          </div>
        </transition>
      </div>
    </div>
    <tabs-component />
  </div>
  <div class="loading" v-else>
    <div>
      <img src="../../public/assets/img/u_cant_unfollow_me.png" alt="Cargando...">
      <h1>Cargando</h1>
      <ion-spinner name="circles"></ion-spinner>
    </div>
  </div>
</template>
<script>
import { IonSpinner } from "@ionic/vue";
import ListComponent from "@/components/ListComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import HistoryComponent from "@/components/HistoryComponent.vue";
export default {
  name: "ResultsView",
  components: { ListComponent, TabsComponent, HistoryComponent, IonSpinner },
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
    isLoading() {
      return this.$store.getters["getLoadingState"];
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

.loading {
  width: 100%;
  background: var(--ion-background-dark);
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    img{
      height: 350px;
    }
  }
}
</style>