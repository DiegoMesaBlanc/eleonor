<template>
  <section>
    <div class="pa-8 primary text-center">
      <v-row justify="center" class="mx-8 py-8">
        <v-col class="ma-1" md="5" align="right">
          <v-card
            outlined
            class="transparent rounded-0 text-center"
            height="25em"
            width="32em"
          >
            <v-card-title>
              <v-row>
                <v-col md="4"></v-col>

                <v-col md="4">
                  <v-avatar size="150">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-col>

                <v-col md="4"></v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="white--text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores dolorum optio quaerat possimus dignissimos qui ipsum
                corrupti modi atque impedit voluptatum excepturi numquam, nulla
                laudantium eos distinctio doloremque adipisci dolor.
              </p>

              <v-row>
                <v-col md="4"></v-col>

                <v-col md="4">
                  <div class="container">
                    <div>aaaaaaaaa</div>
                    <div class="underline"></div>
                  </div>
                </v-col>

                <v-col md="4"></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="ma-1" md="5" align="left">
          <v-card
            outlined
            class="transparent rounded-0 text-center"
            height="25em"
            width="32em"
          >
            <v-card-title>
              <v-row>
                <v-col md="4"></v-col>

                <v-col md="4">
                  <v-avatar size="150">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-col>

                <v-col md="4"></v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="white--text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores dolorum optio quaerat possimus dignissimos qui ipsum
                corrupti modi atque impedit voluptatum excepturi numquam, nulla
                laudantium eos distinctio doloremque adipisci dolor.
              </p>

              <v-row>
                <v-col md="4"></v-col>

                <v-col md="4">
                  <div class="container">
                    <div>aaaaaaaaa</div>
                    <div class="underline"></div>
                  </div>
                </v-col>

                <v-col md="4"></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-card class="rounded-0">
      <v-img
        height="10em"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      >
      </v-img>
    </v-card>
    </div>
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

<style scoped>
.container {
  width: 100%;
}

.underline {
  border-bottom: 6px solid #ef8235;
}
</style>