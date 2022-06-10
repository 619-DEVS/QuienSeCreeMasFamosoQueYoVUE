<template>
  <div id="container">
    <h1>{{pageTitle}}</h1>
    <ul v-for="igUser of arrayData" :key="igUser.id">
      <card-ig :igUser=igUser></card-ig>
    </ul>
    <strong>Bienvenido: {{ test }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</template>

<script> 
import cardIg from './cardIg.vue';
export default {
  name: 'ExploreContainer',
  components: {cardIg},
  methods: {
    sayHello() {
      console.log('hola');
    },
    goToProfile() {

    },
    async getNotFollowing() {
      
    }
  },
  props: {
    test: {}
  },
  data() {
    return {
      pageTitle: 'EL MEJOR TITULO',
      tokenId: '619ReyMisterio',
      arrayData: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.getNotFollowing();

    }, 3000)
  }

};
</script>

<style scoped lang="scss">
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
