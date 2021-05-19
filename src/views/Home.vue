<template>
  <v-container fluid class="pa-0">
    <div id="pg1">
      <center class="white--text">
        <h2 class="text-md-h2 text-sm-h3 font-weight-thin mb-4">
          El limite es el infinito
        </h2>
        <h4 class="subheading">Hola, mi nombre es Patrick</h4>
      </center>
    </div>
    <Pcard />
    <center>
      <h3
        class="text-md-h3 text-sm-h3 font-weight-thin mb-4 encabezado white--text"
      >
        Proyectos
      </h3>
    </center>
    <Pgrid />
  </v-container>
</template>
<style>
#pg1 {
  min-height: 95vh;
  display: flex;
  justify-content: center;
}
#pg1 center {
  align-self: center;
}
.encabezado {
  border-bottom: 3px solid teal;
  padding-bottom: 5px;
  display: inline-block;
}
</style>
<script>
import Pcard from "@/components/home/pcard.vue";
import Pgrid from "@/components/proyectos/pgrid.vue";
export default {
  name: "Home",
  components: {
    Pcard,
    Pgrid,
  },
};
</script>
