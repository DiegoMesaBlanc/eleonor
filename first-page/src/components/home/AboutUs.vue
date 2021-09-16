<template>
  <div class="home">
    <section id="about" class="overflow-hidden">
      <v-row class="white" no-gutters>
        <v-col class="pa-5" cols="12" md="6">
          <v-img
            class="grow hidden-sm-and-down"
            contain
            max-height="200"
            width="100%"
            position="top right"
            :src="require('@/assets/bubbles1.png')"
            style="transform: translate(5%, -5%)"
          />

          <h1 class="display-3 v-heading mb-3 font-weight-light info--text">About Us</h1>

          <p class="title font-weight-light mb-5" style="line-height: 1.7 !important;">
            Lorem ipsum dolor sit amet, consectetur adipi
            <br />scin elit. Etiam vulputate augue vel felis gravida
            <br />porta. Lorem ipsum dolor sit amet.
            <slot />
          </p>

          <h1 class="info--text display-1 v-heading mb-3 font-weight-light">Skills</h1>

          <p class="title font-weight-light mb-5" style="line-height: 1.7 !important;">
            Lorem ipsum dolor sit amet, consecte tur adipi scin e
            <br />lit. Etiam vulputate augu e vel felis gravida porta.
            <slot />
          </p>

          <v-alert outlined="" color="info">
            <v-row>
              <v-col cols="10">
                <v-row>
                  <v-col cols="8">
                    <h1 class="display-1 font-weight-light">Diego Mesa</h1>
                    <p class="font-weight-light" style="line-height: 1.7 !important;">
                      Desarrollador Full-stack
                      <br />
                      <br />. Angular y Vue JS
                      <br />. Desarrollo backend en Node Js, Pyton y Java.
                    </p>
                  </v-col>

                  <v-col cols="4">
                    <v-avatar color="white" size="200">
                      <v-img
                        class="grow hidden-sm-and-down"
                        contain
                        max-height="200"
                        width="100%"
                        position="top left"
                        :src="require('@/assets/diego.png')"
                      />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>

            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="10">
                <v-row>
                  <v-col cols="4">
                    <v-avatar color="white" size="200">
                      <v-img
                        class="grow hidden-sm-and-down"
                        contain
                        max-height="200"
                        width="100%"
                        position="top left"
                        :src="require('@/assets/diego.png')"
                      />
                    </v-avatar>
                  </v-col>

                  <v-col cols="7" style="z-index:1;">
                    <h1 class="display-1 font-weight-light">Diego Mesa</h1>
                    <p class="font-weight-light" style="line-height: 1.7 !important;">
                      Desarrollador Full-stack
                      <br />
                      <br />. Angular y Vue JS
                      <br />. Desarrollo backend en Node Js, Pyton y Java.
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-alert>
        </v-col>

        <v-col class="hidden-sm-and-down" md="6">
          <v-img :src="require('@/assets/aboutme.png')" height="100%" />
        </v-col>
      </v-row>
    </section>
  </div>
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
