/*-----------------------------------
  filename: vuetify.ts
  proyect:  susWebsite - Plugins
  date:     YYYY-MM-DD
  autor:    SUS development team (dmesa, jdelchiaro) 
------------------------------------*/

//IMPORTS
import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

//EXPORTS
export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    themes: {
      light: {
        primary: "#1f2428",
        secondary: "#ef8235",
        accent: "#8c9eff",
        error: "#b71c1c",
        black: "#1f1a17",
        info: "#00ACC1"
      }
    }
  }
});