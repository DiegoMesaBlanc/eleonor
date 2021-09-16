<template>
  <section>
    <v-row class="pa-8" justify="center">
      <v-col class="mx-5" md="2">
        <v-card outlined class="transparent rounded-0" height="15em">
          <v-card-text>
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
          <v-card-text>
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
          <v-card-text>
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
        <v-card outlined class="br rounded-0" height="15em">
          <v-card-text>
            <p class="display-1">Sobre nuestros desarrolladores</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>


<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component({
  components: {
    // "Welcome": Welcome,
  },
})
export default class Services extends Vue {
  services = [
    {
      name: "Research",
      icon: "mdi-clipboard-text-outline",
      blurb: "Curabitur et nisi semper,<br> pellent e sque ",
    },
    {
      name: "Design",
      icon: "mdi-pencil-outline",
      blurb: "Curabitur et nisi semper, <br>pellent.",
    },
    {
      name: "Development",
      icon: "mdi-settings-outline",
      blurb: "Curabitur et nisi semper, <br>pellent.",
    },
    {
      name: "Support",
      icon: "mdi-account",
      blurb: "Curabitur et nisi semper, <br>pellent.",
    },
  ];
}
</script>

<style scoped>
.br {
  border: 0.5em solid #ef8235 !important;
  background-color: transparent;
}
</style>
