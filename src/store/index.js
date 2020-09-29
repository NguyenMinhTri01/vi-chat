import Vue from "vue";
import Vuex from "vuex";
import userInfo from "./modules/userInfo";
import room from "./modules/room"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {userInfo, room}
});
