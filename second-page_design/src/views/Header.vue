<template>
  <v-app-bar v-scroll="onScroll" :color="!isScrolling ? 'transparent' : 'white'" fixed flat>
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
      />
    </v-slide-x-transition>

    <v-spacer />

    <SocialMedia />

    <v-btn color="primary" rounded class="ml-3" large>
      Download for Free
      <v-icon right small>mdi-open-in-new</v-icon>
      <slot />
    </v-btn>
  </v-app-bar>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

import SocialMedia from "@/components/home/SocialMedia.vue";

@Component({
  components: {
    SocialMedia: SocialMedia,
  },
})
export default class Header extends Vue {
  name = "CoreAppBar";
  showLogo = false;
  isScrolling = false;

  onScroll() {
    const offset = window.pageYOffset;
    this.isScrolling = offset > 50;
    this.showLogo = offset > 200;
  }
}
</script>
