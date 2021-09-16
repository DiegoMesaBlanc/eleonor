<template>
  <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/welcome.png')" height="100vh" />
      </v-col>

      <v-col class="align-content-space-between layout wrap" cols="12" md="6">
        <v-img
          class="grow hidden-sm-and-down"
          contain
          max-height="200"
          width="100%"
          position="top right"
          :src="require('@/assets/bubbles1.png')"
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row align="center" justify="center">
          <v-col cols="10" md="6">
            <h1 class="display-3 v-heading mb-3 font-weight-light">Welcome!</h1>
            <slot />

            <p class="title font-weight-light" style="line-height: 1.7 !important;">
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
              <br />Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
              <slot />
            </p>

            <v-btn color="secondary" rounded class="mt-4">
              Learn More!
              <slot />
            </v-btn>
          </v-col>
        </v-row>

        <v-img
          class="grow hidden-sm-and-down"
          contain
          max-height="200"
          width="100%"
          position="bottom left"
          :src="require('@/assets/bubbles2.png')"
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
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
export default class Welcome extends Vue {
  name = "CoreFooter";
}
</script>
