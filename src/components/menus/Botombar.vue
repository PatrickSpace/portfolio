<template>
  <v-bottom-navigation dark color="teal" shift hide-on-scroll app>
    <v-btn v-for="item in menuitems" :key="item.id" :to="item.link">
      <span>{{ item.name }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "Appbar",

  data: () => ({
    menuitems: [
      { id: 1, name: "Home", link: "/", icon: "mdi-pandora" },
      { id: 2, name: "Proyectos", link: "proyectos", icon: "mdi-code-tags" },
      { id: 3, name: "Experiencia", link: "exp", icon: "mdi-briefcase-variant" },
      { id: 5, name: "Contacto", link: "contacto", icon: "mdi-contacts" },
    ],
  }),
};
</script>