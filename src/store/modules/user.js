import { api } from "./../../api";
// import jwtDecode from "jwt-decode";
// import router from "./../../router";
// import setHeader from "./../../utils/setHeader";
import jwt_decode from "jwt-decode";



const state = {
  name: localStorage.name || null,
  userId: localStorage.userId || null,
  connected: false,
  token: localStorage.token || null,
  socketId: null,
  loading : false,
  userType : null,
  auth : false
};

const mutations = {
  setNameInState(state, name) {
    state.name = name;
    localStorage.name = name;
  },
  setUserIdInState(state, userId) {
    state.userId = userId;
    localStorage.userId = userId;
  },
  setTokenInState (state, token) {
    state.token = token;
    localStorage.token = token;
  },
  setUserTypeInState(state, userType){
    state.userType = userType;
  },
  setLoadingInState(state, payload) {
    state.loading = payload;
  },
  setAuthInState(state, payLoad) {
    state.auth = payLoad;
  },
  serverConnected(state, socketId) {
    state.socketId = socketId;
    state.connected = true;
  },
  serverDisconnected(state) {
    state.connected = false;
  },


};

const actions = {
  storeSetName({ commit }, name) {
    commit("setNameInState", name);
  },
  socket_user_connected({ commit }, socketId) {
    commit("serverConnected", socketId);
  },
  socket_disconnect({ commit }) {
    commit("serverDisconnected");
  },
  socket_auth_successful({commit}, data) {
    commit("setAuthInState", data.auth);
  },
  postCreateUser({ commit }) {
    if (state.socketId && state.name) {
      commit('setLoadingInState', true);
      api.post('/users', { name: state.name, socketId: state.socketId })
        .then(result => {
          if(result.data._id){
            commit('setUserIdInState', result.data._id);
            commit('setLoadingInState', false);
          }
        })
    }
  },
  patchAddSocketIdForUser({commit, dispatch}) {
    if (state.socketId && state.userId) {
      commit('setLoadingInState', true);
      api.patch('/users', { userId: state.userId, socketId: state.socketId })
      .then (result => {
        if(result.data && result.data._id) {
          commit('setLoadingInState', false);
        } else {
          dispatch('postCreateUser');
        }
      })
    }
  },
  postCreateRoom ({commit, dispatch}, roomPassword) {
    if (state.socketId && state.userId) {
      commit('setLoadingInState', true);
      api.post('/rooms', {userId : state.userId, password : roomPassword})
      .then(result => {
        if(result.data) {
          commit('setLoadingInState', false);
          commit('setTokenInState', result.data);
          try {
            const decoded = jwt_decode(result.data);
            dispatch('storeSetRoomId', decoded.roomId);
            commit('setUserTypeInState', decoded.userType);
          } catch (error) {
            console.log(error)
          }
        }
      })
    }
  },
  socketAutheToken(oject, socket){
    socket.emit('Authentication', state.token);
  },
  TryToAutoJoinRoom ({commit, dispatch}) {
    if (state.token) {
      const decoded = jwt_decode(state.token);
      commit('setUserIdInState', decoded.userId);
      commit('setUserTypeInState', decoded.userType);
      dispatch('storeSetRoomId', decoded.roomId);
    }
  }
};


export default { state, mutations, actions };