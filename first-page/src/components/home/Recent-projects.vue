<template>
  <section id="recent-projects" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="primary text-center pa-5 white--text" cols="12" md="6">
        <v-img
          class="grow hidden-sm-and-down"
          contain
          max-height="200"
          width="100%"
          position="top right"
          :src="require('@/assets/bubbles1.png')"
          style="transform: rotate(180deg) translateX(25%)"
        />

        <h1 class="display-3 v-heading mb-3 font-weight-light">
          Recent Projects
          <slot />
        </h1>

        <p class="title font-weight-light mb-5" style="line-height: 1.7 !important;">
          Lorem ipsum dolor sit amet, consectetur adipi
          <br />scin elit. Etiam vulputate augue vel felis gravida
          <br />porta. Lorem ipsum dolor sit amet.
          <slot />
        </p>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col v-for="project in projects" :key="project" cols="12" md="6">
                <a href="#">
                  <v-img :src="require(`@/assets/${project}.jpeg`)" max-height="300" />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/recentprojects.png')" height="100%" />
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
export default class RecentProjects extends Vue {
  projects = ["project1", "project2", "project3", "project4"];
}
</script>
