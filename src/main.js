import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import router from "./router";
import VueYouTubeEmbed from "youtube-vue3";

const app = createApp(App);
app.use(router);
app.use(VueYouTubeEmbed);
app.mount("#app");
