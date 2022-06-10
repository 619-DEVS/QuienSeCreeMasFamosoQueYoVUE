<template>
  <div class="box">
    <h1 class="box-title">¿Quién se cree más famoso que yo?</h1>
    <p>
      Quién se cree más famoso que yo es una app creada por los panas Alfonso
      "El Pantera" Muñoz y el enano, sirve para ver quién no te sigue o a quién
      no sigues
    </p>
    <p class="box-danger">* IMPORTANTE hacer la consulta a un perfil público</p>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
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