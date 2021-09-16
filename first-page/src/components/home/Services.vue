<template>
  <div class="home">
    <section id="services" class="overflow-hidden">
      <v-row class="accent" no-gutters>
        <v-col class="hidden-sm-and-down" md="6">
          <v-img :src="require('@/assets/services.png')" height="100%" />
        </v-col>

        <v-col class="text-center pa-5" cols="12" md="6">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <v-img
                class="grow hidden-sm-and-down"
                contain
                max-height="200"
                width="100%"
                position="bottom left"
                :src="require('@/assets/bubbles2.png')"
                style="transform: translateX(55%)"
              />

              <h1 class="display-3 v-heading mb-3 font-weight-light info--text">Services</h1>

              <p class="title font-weight-light mb-5" style="line-height: 1.7 !important;">
                Curabitur venenatis tortor erat, quis laoreet nis
                <br />lobortis eget. Fusce tempor aucto.
                <slot />
              </p>
            </v-col>

            <v-col v-for="(service, i) in services" :key="i" class="text-center mb-3" md="6">
              <v-avatar class="elevation-6 mb-2" color="#69A1BB" size="64" tile>
                <v-icon dark size="52" v-text="service.icon" />
              </v-avatar>

              <p class="title font-weight-light" style="line-height: 1.7 !important;">
                <span class="mb-2" v-text="service.name" />
                <br />
                <span v-html="service.blurb" />
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
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
