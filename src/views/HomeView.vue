<template>
  <div class="box">
    <img
      class="home-logo"
      src="./../../public/assets/img/logo.png"
      alt="¿Quién se cree más famoso que YO?"
    />
    <p>
      ¿Quién se cree más famoso que YO? es una app creada por los panas Alfonso
      "El Pantera" Muñoz y Miguel Ángel "El Ateo" Torres, sirve para ver quién
      no te sigue o a quién no sigues
    </p>

    <ion-chip color="danger" class="box-alert">
      <ion-label>*Sólo se pueden consultar perfiles públicos</ion-label>
    </ion-chip>

    <ion-item>
      <ion-label color="dark" inputmode="text" position="floating"
        >Usuario de Instagram</ion-label
      >
      <ion-input required maxlength="30" v-model="username"></ion-input>
    </ion-item>
    <ion-button
      v-show="username"
      expand="full"
      color="dark"
      @click="getFollowersList()"
      >Enviar</ion-button
    >
      <ion-alert
      :is-open="isModalOpen"
      header="Alert"
      sub-header="Subtitle"
      message="This is an alert message."
      css-class="my-custom-class"
      :buttons="buttons"
      @didDismiss="closeModal()"
    >
    </ion-alert>
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
import { ref } from 'vue';
import { logoPaypal } from "ionicons/icons";
import {
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonChip,
  IonList,
  IonIcon,
  IonAlert
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
    IonList,
    IonIcon,
    IonAlert
  },
  data() {
    return {
      username: "",
      buttons: ['Ok'],
      isModalOpen: false,
    };
  },
  setup() {
    return {
      logoPaypal
    }
  },
  methods: {
    async getFollowersList() {
      try {
        this.$store.dispatch("setLoadingState", true);
        this.$router.push("/results/");
        this.$store.dispatch("setCurrentUsername", this.username);

      }

      catch (error) {
        this.$router.push("/home/");
        this.setOpen(true);
      }
      
    },
    setOpen(opened) {
      this.isModalOpen = opened;
    },
    closeModal() {
      this.setOpen(false);
      this.$store.dispatch('setHasError', false);
    }
  },
  computed: {
    hasError() {
      return this.$store.getters['getHasError'];
    }
  },
  mounted() {
    if (this.hasError) this.setOpen(true);
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
.paypal {
  background: var(--ion-background-light);
}
</style>