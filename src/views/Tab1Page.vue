<template>
  <ion-page>
    <header-test/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <h1>Test</h1>
      </ion-card>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderTest from '../components/HeaderTest.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, HeaderTest, IonCard }
});
</script>
