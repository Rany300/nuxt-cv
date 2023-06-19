import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown, faEnvelope, faList, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitterSquare, faTwitch, faGithubSquare, faCircleArrowDown, faList, faPhone, faEnvelope);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
