<template>
  <div class="home">
    <Welcome />

    <Recent-projects />

    <Services />

    <About-us />

    <Get-in-touch />
  </div>
</template>


<script lang='ts'>
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

// import SocialMedia from "@/components/SocialMedia";
import Welcome from "@/components/home/Welcome.vue";
import RecentProjects from "@/components/home/Recent-projects.vue";
import Services from "@/components/home/Services.vue";
import About from "@/components/home/AboutUs.vue";
import GetInTouch from "@/components/home/Get-in-touch.vue";

@Component({
  components: {
    "Welcome": Welcome,
    "Recent-projects": RecentProjects,
    "Services": Services,
    "About-us": About,
    "Get-in-touch": GetInTouch,
  },
})
export default class HelloWorld extends Vue {
  name = "CoreFooter";
  
}
</script>
