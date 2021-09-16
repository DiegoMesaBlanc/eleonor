<template>
  <section class="primary">
    <v-row class="pa-8" justify="center">
      <v-col class="mx-5" md="2">
        <v-card outlined class="br rounded-0" height="15em">
          <v-card-text class="white--text flex-column">
            <p class="display-1">Sobre nuestra compañía</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="mx-5" md="2">
        <v-card outlined class="transparent rounded-0" height="15em">
          <v-card-text class="white--text flex-column">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto deserunt, libero autem magni eum tempore rerum et,
              maiores voluptatem, nobis sint! Nisi ipsa libero odit quasi
              assumenda! Voluptatibus, earum atque.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="mx-5" md="2">
        <v-card outlined class="transparent rounded-0" height="15em">
          <v-card-text class="white--text flex-column">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto deserunt, libero autem magni eum tempore rerum et,
              maiores voluptatem, nobis sint! Nisi ipsa libero odit quasi
              assumenda! Voluptatibus, earum atque.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="mx-5" md="2">
        <v-card outlined class="transparent rounded-0" height="15em">
          <v-card-text class="white--text flex-column">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto deserunt, libero autem magni eum tempore rerum et,
              maiores voluptatem, nobis sint! Nisi ipsa libero odit quasi
              assumenda! Voluptatibus, earum atque.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>


<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

// import SocialMedia from "@/components/SocialMedia";

@Component({
  components: {
    // "Welcome": Welcome,
  },
})
export default class RecentProjects extends Vue {
  projects = ["project1", "project2", "project3", "project4"];
}
</script>

<style scoped>
.br {
  border: 0.5em solid #ef8235 !important;
  background-color: transparent;
}
</style>