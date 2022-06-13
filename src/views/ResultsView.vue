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
      <img
        src="./../../public/assets/img/u_cant_unfollow_me.png"
        alt="Cargando..."
      />
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
import axios from "axios";
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
    username() {
      return this.$store.getters["getCurrentUsername"];
    },
  },
  async mounted() {
    if (!this.isLoading) return;
    try {
      const responseMe = await axios.post(
        "http://80.88.90.58:619/not-following-me",
        { username: this.username }
      );
      const response = await axios.post(
        "http://80.88.90.58:619/not-following",
        {
          username: this.username,
        }
      );

      this.$store.dispatch("setCurrentNotFollowingMe", responseMe.data.data);
      this.$store.dispatch("setCurrentNotFollowing", response.data.data);

      this.$store.dispatch("setActiveTab", "notFollowingMe");
      this.$store.dispatch("addHistoryElement", {
        username: this.username,
        history: {
          notFollowingMe: responseMe.data.data,
          notFollowing: response.data.data,
        },
      });

      this.$store.dispatch("setLoadingState", false);
    } catch (error) {
      console.error(error);
      let errorMsg = "";
      switch (error.response.data.name) {
        case "UserNotFound":
          errorMsg = "Usuario no encontrado.";
          break;
        case "CantGetFollows":
          errorMsg = "Ha habido un error al solicitar los seguidores.";
          break;
        case "CantGetFollowing":
          errorMsg = "Ha habido un error al solicitar los seguidos.";
          break;
        case "PrivateProfileUser":
          errorMsg =
            "Mira que te lo he dicho, que no busques un perfil privado.\n Te lo he puesto hasta en rojo.\n Pues nada, has tenido que hacer la gracia.\n Me cago en tu puta madre.\n Tus padres no te quieren.";
          break;
        default:
          errorMsg = "Ha ocurrido un error inesperado."
          break;
      }
      this.$store.dispatch("setHasError", { open: true, message: errorMsg });
      this.$router.push("/home/");
    }
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

  div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    img {
      height: 50vh;
    }
  }
}
</style>
