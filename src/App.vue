<template>
  <v-app>
    <Appbar v-if="!isMobile" />
    <v-main id="main" >
      <transition>
        <keep-alive>
            <router-view></router-view>
            <Subirbtn/>
        </keep-alive>
      </transition>
    </v-main>
    <Footer />
    <Botombar v-if="isMobile" />
  </v-app>
</template>
<style>
#main{
  background-color: #272727;
}
</style>
<script>
import Appbar from "@/components/menus/Appbar.vue";
import Botombar from "@/components/menus/Botombar.vue";
import Footer from "@/components/menus/Footer.vue";
import Subirbtn from '@/components/otros/Subirbtn.vue'
export default {
  name: "App",
  components: {
    Appbar,
    Botombar,
    Footer,
    Subirbtn,
  },
  data: () => ({
    isMobile: false,
  }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
};
</script>
