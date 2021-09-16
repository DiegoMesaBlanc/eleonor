<template>
  <section class="pa-8">
    <v-row justify="center" class="mx-8">
      <v-col class="ma-1" md="5" align="right">
        <v-card
          outlined
          class="transparent rounded-0"
          height="20em"
          width="32em"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="20em"
          ></v-img>
        </v-card>
      </v-col>

      <v-col class="ma-1" md="5" align="left">
        <v-card
          outlined
          class="transparent rounded-0"
          height="20em"
          width="32em"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="20em"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mx-8">
      <v-col class="ma-1" md="5" align="right">
        <v-card
          outlined
          class="br text-left px-6 rounded-0"
          height="20em"
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
          <v-card-actions>
            <v-btn depressed width="40%" color="primary">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col class="ma-1" md="5" align="left">
        <v-card
          outlined
          class="transparent rounded-0"
          height="20em"
          width="32em"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="20em"
          ></v-img>
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
export default class AboutUs extends Vue {
  skills = [
    {
      name: "Web Design",
      value: 100,
    },
    {
      name: "Web Development",
      value: 75,
    },
    {
      name: "Web Support",
      value: 90,
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