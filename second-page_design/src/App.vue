<template>
  <v-app>
    <v-content>
      <!--HEADER-->
      <Header />

      <!--ROUTER-->
      <router-view />

      <!--FOOTER-->
      <Footer />
    </v-content>
  </v-app>
</template>

<!--TYPESCRIPT-->
<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";


@Component({
  components: {
    Header: Header,
    Footer: Footer
  }
})


export default class App extends Vue {

  created() {
    console.log('INICIO.')
  }

  // saved(dw: boolean) {
  //   this.drawer = dw;
  //   console.error(dw);
  // }
}
</script>

<!--STYLES-->
<style scoped>
/* .bannerpal {
  background-image: url("../assets/img/backs/footer-bogota.jpg");
  background-repeat: no-repeat;
  width: 100%;
  background-size: auto;
}

.contenido {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
} */
</style>
