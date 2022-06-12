<template>
  <div class="box">
    <img src="./../../public/assets/img/logo.png" alt="¿Quién se cree más famoso que YO?">
    <p>
      Quién se cree más famoso que yo es una app creada por los panas Alfonso
      "El Pantera" Muñoz y el enano, sirve para ver quién no te sigue o a quién
      no sigues
    </p>


    <ion-chip color="danger" class="box-alert">
      <ion-label>*Sólo se pueden consultar perfiles públicos</ion-label>
    </ion-chip>

    <ion-item>
      <ion-label color="dark" required inputmode="text" position="floating"
        >Usuario de Instagram</ion-label
      >
      <ion-input v-model="username"></ion-input>
    </ion-item>
    <ion-button expand="full" color="dark" @click="getFollowersList()"
      >Enviar</ion-button
    >
    <ion-accordion-group class="accordion">
      <ion-accordion value="Filters">
        <ion-item slot="header">
          <ion-label>Filtros (opcional)</ion-label>
        </ion-item>
        <ion-list slot="content">
          <ion-item>
            <ion-label
              color="dark"
              required
              inputmode="text"
              position="floating"
              >Titular de la tarjeta</ion-label
            >
            <ion-input autocapitalize="on"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label
              color="dark"
              required
              inputmode="text"
              position="floating"
              >Número de tarjeta</ion-label
            >
            <ion-input maxlength="16" type="text"></ion-input>
          </ion-item>
          <div class="double">
            <div class="double-date">
              <ion-item>
                <ion-label
                  color="dark"
                  required
                  inputmode="text"
                  position="floating"
                  >Fecha de caducidad</ion-label
                >
                <ion-input type="text" maxlength="5"></ion-input>
              </ion-item>
            </div>
            <div class="double-cvc">
              <ion-item>
                <ion-label
                  color="dark"
                  required
                  inputmode="text"
                  position="floating"
                  >CVC</ion-label
                >
                <ion-input type="text" maxlength="3"></ion-input>
              </ion-item>
            </div>
          </div>
          <ion-item class="paypal">
            <ion-icon :icon="logoPaypal" />
            <ion-label>&nbsp;PayPal <i>(próximamente)</i></ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </div>
</template>
<script>
import axios from "axios";
import{logoPaypal} from 'ionicons/icons'
import {
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonChip,
  IonList
} from "@ionic/vue";
export default {
  name: "HomeView",
  components: {
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonAccordion,
    IonAccordionGroup,
    IonChip,
    IonList
    
  },
  data() {
    return {
      username: "",
    };
  },

  methods: {
    async getFollowersList() {
      this.$store.dispatch("setCurrentUsername", this.username);

      const responseMe = await axios.post(
        "http://localhost:3000/not-following-me",
        { username: this.username }
      );
      const response = await axios.post("http://localhost:3000/not-following", {
        username: this.username,
      });

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

      this.$router.push("/results/");
    },
  },

  setup(){
    return {
      logoPaypal
    }
  }
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

  &-alert {
    padding: 20px 5px;
    justify-content: center;
    align-items: center;
  }
}
.double {
  display: flex;
  flex-flow: row;

  &-date {
    width: 70%;
  }

  &-cvc {
    width: 30%;
  }
}
.paypal{
  background: var(--ion-background-light);
}
</style>