<template>
  <v-footer
    height="88"
    class="justify-center"
  >
    <social-media :large="true"/>
  </v-footer>
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