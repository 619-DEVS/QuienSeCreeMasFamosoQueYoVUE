<template>
  
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </div>

  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar translucent>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon :icon="mail" />
          <ion-label>Inbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="paperPlane" />
          <ion-label>Outbox</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="heart" />
          <ion-label>Favorites</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="archive" />
          <ion-label>Archived</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="trash" />
          <ion-label>Trash</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="warning" />
          <ion-label>Spam</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButtons,
  IonMenuButton
} from "@ionic/vue";

import { mail, paperPlane, heart, archive, trash, warning } from "ionicons/icons";
export default {
  name: "MainMenu",
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonButtons,
    IonMenuButton
  },

  setup() {
    return {
      mail,
      paperPlane,
      heart,
      archive,
      trash,
      warning,
    };
  },
};
</script>
<style scoped lang="scss">
</style>