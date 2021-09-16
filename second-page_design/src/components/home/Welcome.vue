<template>
  <section id="welcome" class="overflow-hidden">
    <v-card class="rounded-0">
      <v-img
        height="25em"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      >
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-btn color="white" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-card-title class="white--text mt-8">
          <v-row>
            <v-col md="3"></v-col>

            <v-col md="3">
              <h1 class="ml-3">Eleonor SA</h1>
            </v-col>

            <v-col md="3"></v-col>
            <v-col md="3"></v-col>
          </v-row>
        </v-card-title>

        <v-row>
          <v-col md="5"></v-col>

          <v-col md="2">
            <div class="container">
              <div class="underline"></div>
            </div>
          </v-col>

          <v-col md="5"></v-col>
        </v-row>
      </v-img>
    </v-card>
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
export default class Welcome extends Vue {
  name = "CoreFooter";
}
</script>

<style scoped>
.container {
  width: 80%;
}

.underline {
  border-bottom: 5px solid #ef8235;
}
</style>
