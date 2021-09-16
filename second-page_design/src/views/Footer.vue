<template>
  <section class="pa-8">
    <v-row justify="center" class="mx-8">
      <v-col class="ma-1" md="5" align="left">
        <v-card
          outlined
          class="text-left px-6 rounded-0 transparent"
          height="17.5em"
          width="32em"
        >
          <v-card-title>
            <p class="display-1 text--primary">Nuestros proyectos</p>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores dolorum optio quaerat possimus dignissimos qui ipsum
              corrupti modi atque impedit voluptatum excepturi numquam, nulla
              laudantium eos distinctio doloremque adipisci dolor.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="ma-1" md="5" align="right">
        <v-card
          outlined
          class="br text-left px-6 rounded-0"
          height="17.5em"
          width="32em"
        >
          <v-card-title>
            <p class="display-1 text--primary">Siguenos</p>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores dolorum optio quaerat possimus dignissimos qui ipsum
              corrupti modi atque impedit voluptatum excepturi numquam.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4"></v-col>

      <v-col md="4">
        <social-media :large="true" />
      </v-col>

      <v-col md="4"></v-col>
    </v-row>
  </section>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

import SocialMedia from "@/components/home/SocialMedia.vue";

@Component({
  components: {
    SocialMedia: SocialMedia,
  },
})
export default class Footer extends Vue {
  name = "CoreFooter";
}
</script>

<style scoped>
.br {
  border: 0.5em solid #ef8235 !important;
  background-color: transparent;
}
</style>