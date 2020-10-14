// import { api } from "./../../api";
// import jwtDecode from "jwt-decode";
// import router from "./../../router";
// import setHeader from "./../../utils/setHeader";



const state = {
  roomId : null,
  roomPassword : null,
  numberOfMember : 0,
  authentication : true,
};

const mutations = {
  setRoomIdInState (state ,roomId) {
    state.roomId = roomId
  },
  setRoomPasswordInState (state, roomPassword) {
    state.roomPassword = roomPassword;
  }
};

const actions = {
  storeSetRoomId({ commit } , roomId) {
    commit("setRoomIdInState" , roomId);
  },
  storeSetRoomPassword ({commit}, roomPassword) {
    commit("setRoomPasswordInState", roomPassword)
  }

};


export default { state, mutations, actions };