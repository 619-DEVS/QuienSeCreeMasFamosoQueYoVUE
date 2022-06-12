<template>
  <div class="box">
    <h1 class="box-title">¿Quién se cree más famoso que yo?</h1>
    <p>
      Quién se cree más famoso que yo es una app creada por los panas Alfonso
      "El Pantera" Muñoz y el enano, sirve para ver quién no te sigue o a quién
      no sigues
    </p>
    <p class="box-danger">* IMPORTANTE hacer la consulta a un perfil público</p>
    <ion-item>
      <ion-label color="dark" required inputmode="text" position="floating"
        >Usuario de Instagram</ion-label
      >
      <ion-input v-model="username"></ion-input>
    </ion-item>
    <ion-button @click="getFollowersList()">Enviar</ion-button>
  </div>
</template>
<script>
import axios from 'axios';

import { IonInput, IonLabel, IonItem, IonButton } from "@ionic/vue";
export default {
  name: "HomeView",
  components: { IonInput, IonLabel, IonItem, IonButton },
  data() {
    return {
      username: "",
    };
  },

  methods: {
    async getFollowersList() {
      this.$store.dispatch('setCurrentUsername', this.username);

      const responseMe = await axios.post('http://localhost:3000/not-following-me', {username: this.username});
      const response = await axios.post('http://localhost:3000/not-following', {username: this.username});
      
      this.$store.dispatch('setCurrentNotFollowingMe', responseMe.data.data);
      this.$store.dispatch('setCurrentNotFollowing', response.data.data);
      this.$store.dispatch('setActiveTab', 'notFollowingMe');
      this.$store.dispatch('addHistoryElement', {username: this.username, history: {notFollowingMe: responseMe.data.data, notFollowing: response.data.data}});

      this.$router.push('/results/');
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  height: inherit;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: center;
  text-shadow: 1px 1px 2px black;

  &-danger {
    padding: 10px;
    background: rgba(255, 0, 0, 0.8);
    border-radius: 10px;
  }

  @media only screen and (min-width: 1440px) {
    width: 60%;
  }
}
</style>