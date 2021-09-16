<template>
  <section id="get-in-touch" class="overflow-hidden">
    <v-row class="info white--text" no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/contact.png')" height="100%" />
      </v-col>

      <v-col class="pa-5" cols="12" md="6">
        <v-img
          class="grow hidden-sm-and-down"
          contain
          max-height="200"
          width="100%"
          position="top right"
          :src="require('@/assets/bubbles1.png')"
        />

        <h1 class="mb-5 display-3 v-heading mb-3 font-weight-light">Get In Touch</h1>

        <v-sheet color="transparent" max-width="600">
          <v-text-field color="info" label="Name" solo flat />

          <v-text-field color="info" label="Email" solo flat />

          <v-text-field color="info" label="Subject" solo flat />

          <v-textarea color="info" label="Message" solo flat />

          <v-btn color="secondary" rounded>
            Send
            <slot />
          </v-btn>
        </v-sheet>
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
export default class GetInTouch extends Vue {
  name = "CoreFooter";
}
</script>
