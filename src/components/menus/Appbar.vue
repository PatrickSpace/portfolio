<template>
  <v-app-bar app dark class="px-10">
    <v-toolbar-title
      ><v-btn icon to="/" color="teal">
        <v-icon>mdi-pandora</v-icon>
      </v-btn></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in menuitems"
      :key="item.id"
      :to="item.link"
      text
      plain
      color="teal"
      active-class="activo"
    >
      {{ item.name }}</v-btn
    >
    <v-divider vertical></v-divider>
    <v-btn icon target="_blank" href="https://www.linkedin.com/in/patricklostaunau/">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon target="_blank" href="https://github.com/PatrickSpace">
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<style>
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
  color: white;
}
</style>

<script>
export default {
  name: "Appbar",
  data: () => ({
    menuitems: [
      { id: 1, name: "Proyectos", link: "proyectos" },
      { id: 2, name: "Experiencia", link: "exp" },
      { id: 4, name: "Skills", link: "skills"},
      { id: 3, name: "Contacto", link: "contacto" },
    ],
  }),
};
</script>