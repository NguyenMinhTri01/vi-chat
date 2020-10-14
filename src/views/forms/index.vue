<template>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <h2 class="mt-3 logo"><fa :icon="['fas', 'sms']" /> Vi Chat</h2>
        </div>
        <div :class="{'form-hiden' : loading}">
          <FormInfoUser
            @eventShowFormCreateRoom="handleEventShowFormCreateRoom"
            @eventShowFormFindRoom="handlEventShowFormFindRoom"
            v-if="activeFormInfoUser"
          />
          <FormCreateRoom v-if="activeFormCreateRoom" />
          <FormFindRoom v-if="activeFormFindRoom" />
        </div>
        <Loading_V1 v-if="loading" />
        <div v-if="(activeFormCreateRoom || activeFormFindRoom) && !loading " id="formFooter" class="fadeInDown">
          <span @click="handleEventShowFormInfoUser" class="underlineHover">Quay Lại</span>
        </div>
      </div>
    </div>
</template>

<script>
import FormInfoUser from "./formInfoUser";
import FormFindRoom from "./formFindRoom";
import FormCreateRoom from "./formCreateRoom";
import Loading_V1 from "../../components/loading/loading_V1";
export default {
  components: {
    FormInfoUser,
    FormFindRoom,
    FormCreateRoom,
    Loading_V1
  },
  beforeCreate () {
    this.$store.dispatch("patchAddSocketIdForUser");
  },
  created () {
    this.$store.dispatch("TryToAutoJoinRoom");
  },

  data() {
    return {
      activeFormInfoUser: true,
      activeFormFindRoom: false,
      activeFormCreateRoom : false
    };
  },
  computed : {
    loading() {
      return this.$store.state.user.loading;
    },
    roomId() {
      return this.$store.state.room.roomId;
    }
  },
  watch : {
    roomId (value) {
      if (value) {
        this.$router.push(`/room/${value}`);
      }
    }
  },

  methods : {
    handleEventShowFormInfoUser() {
      this.activeFormCreateRoom = false;
      this.activeFormFindRoom = false;
      this.activeFormInfoUser = true;
    },
    handleEventCreateRoom () {
      
    },
    handlEventShowFormFindRoom () {
      this.activeFormInfoUser = false;
      this.activeFormCreateRoom = false;
      this.activeFormFindRoom = true;
    },
    handleEventShowFormCreateRoom () {
      this.activeFormInfoUser = false;
      this.activeFormFindRoom = false;      
      this.activeFormCreateRoom = true;
    }

  }
};
</script>

<style scoced>
a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

.logo {
  color: #39ace7;
}
.form-hiden {
  display: none !important;
  visibility: hidden !important;
} 

.class-h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  width: 90%;
  max-width: 450px;
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-top: 4%;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 15px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/
.btn-find-room,
.btn-create-room {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  width: 48%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.btn-find-room {
  margin-left: 2%;
}
.btn-create-room {
  margin-right: 2%;
}
.btn-find-room:hover,
.btn-create-room:hover {
  background-color: #39ace7;
}
.btn-find-room:active,
.btn-create-room:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}



input[type="text"], input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]::placeholder, input[type="password"]::placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;

}
.underlineHover {
  cursor: pointer;
}


.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

/* responsive */
@media (max-width: 768px) {
  .btn-find-room,
  .btn-create-room {
    width: 100%;
    margin: 0;
  }

  #formContent {
    width: 90%;
    max-width: 425px;
    margin-top: 10%;
  }
}
</style>