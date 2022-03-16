<template>
  <v-card
    class="mx-auto my-15 pa-10 grey darken-4"
    dark
    elevation="20"
    max-width="750"
  >
    <v-row>
      <v-col cols="12" sm="1" md="1" lg="1" xl="1" class="ma-auto">
        <v-avatar size="56">
          <img alt="user" src="@/assets/img/perfil.jpg" />
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="11" md="11" lg="11" xl="11">
        <v-card-title> Hola, soy Patrick </v-card-title>
        <v-card-subtitle class="teal--text">
          Consultor en automatización de procesos
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-card-text>
      <div class="text-justify">
        Estudiante de Ingeniería en Sistemas de Información en la Universidad
        Peruana de Ciencias Aplicadas – UPC.
      </div>
      <br />
      <div class="text-justify">
        Soy una persona con muchas ganas de aprender y crecer tanto académica
        como personalmente buscando realizar prácticas pre-profesionales.
        Empatía, paciencia y creatividad son cualidades que puedo rescatar de mi
        persona.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal"> Contactame </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Pcard",
};
</script>