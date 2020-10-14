<template>
  <div class="col-lg-8 col-12 chat-right">
    <div class="header-right">
      <div class="user-name">
        <div @click="showChatLeft" class="icon-reposive">
          <fa :icon="['fas', 'chevron-right']" />
        </div>
        <p class="text-header-right">Nguyễn Minh Trí</p>
      </div>
      <div  class="icon-option">
        <div @click="modalSettingShow = true"  class="icon-item">
          <fa :icon="['fas', 'cog']" />
        </div>        

        <div @click="modalSharingShow = true" class="icon-item">
          <fa :icon="['fas', 'share-square']" />
        </div>
        <div @click="modalnotificationShow = !modalnotificationShow" id="icon-bell" class="icon-item">
          <span class="number-notifi">2</span>
          <fa :icon="['fas', 'bell']" />
        </div>
      </div>
    </div>
    <div class="chat-body" >
      <ul class="list-massage">
        <li><MsgSent :content="'Hello'" /></li>
        <li><MsgReceived :nameSender="'Tri Minh'" :content="'Hello'" :sameSender="false" /></li>
        <li><MsgReceived :nameSender="'Tri Minh'" :content="'Hello'" :sameSender="true" /></li>
      </ul>
    </div>
    <div class="chat-footer" >
      <form class="input">
        <textarea v-model="mgsContent" class="input-message" name="" id="" cols="50" rows="1"></textarea>
      </form>
      <div class="icon-sent">
        <fa :icon="['far', 'paper-plane']" />
      </div>
    </div>
    <ModalSetting :modalShow="modalSettingShow" @eventHideModal="modalSettingShow = false" />
    <ModalSharing :modalShow="modalSharingShow" @eventHideModal="modalSharingShow = false" />
    <ModalNotification v-if="modalnotificationShow" />
  </div> 

</template>

<script>
import MsgReceived from "../../components/message/msgReceived";
import MsgSent from "../../components/message/msgSent";
import ModalSetting from "../../components/modal/modalSetting";
import ModalSharing from "../../components/modal/modalSharing";
import ModalNotification from "../../components/modal/modalNotification";
export default {
  components : {
    MsgReceived,
    MsgSent,
    ModalSetting,
    ModalSharing,
    ModalNotification
  },

  data () {
    return {
      mgsContent : '',
      modalSettingShow : false,
      modalSharingShow : false,
      modalnotificationShow : false
    }
  },

  computed :{

  },

  methods : {
    showChatLeft () {
      this.modalnotificationShow = false
      this.$emit('eventShowChatLeft');
    },
  },

  watch : {

  }
}

</script>

<style scoped>

.chat-right {
  position: relative;
  padding: 0;
  height: 100%;
}
.text-header-right {
  font-size: 1.60rem;
  color: #05131a;
  font-family: inherit;
  margin-bottom: 0 !important;
  font-weight: bold;
}
.header-right {
  padding: 10px 10px 5px 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 10px 0 0;
  border-bottom: 1px solid #cccccc;
  height: 10%;
}
.icon-reposive {
  width: 3%;
  float: left;
  height: 30px;
  padding: 0px 0px 0px 0px;
  visibility: hidden;
  display: none;
  color: #a9a9a9;
  position:relative;
  top: 4px;
}
.user-name {
  float: left;
  position: relative;
  width: 80%;
}

.icon-item {
  float: left;
  width: 33.333%;
  text-align: right;
  font-size: 22px;
  color: #007bff;
  position: relative;
}
.icon-option {
  width: 20%;
  float: left;
}

.icon-item:hover {
  color: #0518f7;
}

.number-notifi {
  border-radius: 50%;
  font-size: 10px;
  background: red;
  padding: 1px 3px 1px 3px;
  position: relative;
  color: white;
  bottom: 14px;
  left: 24px;
  text-align: center;
  font-family: inherit;
  font-weight: bold;
}







.chat-body {
  height: 78%;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
}



.chat-footer {
  padding: 10px 10px 5px 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 10px 0;
  height: 12%;
  box-sizing: border-box;
}


.icon-reposive:hover {
  color:#696565
}

.list-massage {
  list-style: none;
  margin: 0;
  padding: 0 5px 0 5px;
}

 /* input-message*/

.input {
  width: 95%;
  height: 94%;
  position: relative;
  float: left;
}
.icon-sent {
  width: 5%;
  height: 94%;
  position: relative;
  float: left;
  font-size: 1.5em;
  text-align: right;
  padding: 1% 0 1% 0;
  color: #3578E5;
}

.icon-sent:hover {
  color: #0518f7;
}


.input-message {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #888; 
  outline: none;
  resize: none;
}

.input-message:focus {
  border: 1px solid #3578E5; 
}

.input-message::-moz-focus-outer {
  border: 1px solid #3578E5; 
}

 /* input-message*/



@media (max-width: 490px) {
 .user-name {
  width: 60%;
}
.icon-option {
  width: 40%;
}
.text-header-right {
  font-size: 1rem;
}
.icon-sent {
  font-size: 1.2em;
  width: 8%;
}
.input {
  width: 92%;
}

}

@media (max-width: 990px) {
  .text-header-right {
    font-size: 1.2rem;
  }
  .icon-reposive {
    visibility: visible;
    display: block;
    margin-right: 10px;
  }

  .chat-right {
    width: 100%;
  }
  .header-right {
    width: 100%;
    border-radius: 0px;
    height: 8%;
  }
  .chat-body {
    height: 82%;
  }

  .chat-footer {
    border-radius: 0px;
    height: 10%;
  }
}

</style>