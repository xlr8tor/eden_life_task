import { createStore } from "vuex";
import profiles from "./modules/profiles";

export default createStore({
  modules: {
    profiles,
  },
});
