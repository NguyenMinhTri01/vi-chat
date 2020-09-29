// import { api } from "./../../api";
// import jwtDecode from "jwt-decode";
// import router from "./../../router";
// import setHeader from "./../../utils/setHeader";



const state = {
  roomId : null,
  roomPassword : null
};

const mutations = {
  setRoomIdInState (state ,roomId) {
    state.roomId = roomId
  },
};

const actions = {
  storeSetRoomId({ commit } , roomId) {
    commit("setRoomIdInState" , roomId);
  },
};


export default { state, mutations, actions };