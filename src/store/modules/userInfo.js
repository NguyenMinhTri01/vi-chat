// import { api } from "./../../api";
// import jwtDecode from "jwt-decode";
// import router from "./../../router";
// import setHeader from "./../../utils/setHeader";



const state = {
  name : null,
  userId : null,
};

const mutations = {
  setNameInState (state ,name) {
    state.name = name
  },
};

const actions = {
  storeSetName({ commit } , name) {
    commit("setNameInState" , name);
  },
};


export default { state, mutations, actions };