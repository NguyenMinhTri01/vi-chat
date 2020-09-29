<template>
  <div class="col-lg-8 col-12 chat-right">
    <div class="header-right">
      <div class="user-name">
        <div @click="showChatLeft" class="icon-reposive">
          <fa :icon="['fas', 'chevron-right']" />
        </div>
        <p class="text-header-right">Nguyễn Minh Trí</p>
      </div>
      <div class="setting">
        <fa :icon="['fas', 'cog']" />
      </div>
    </div>
    <div class="chat-body" >
      <ul class="list-massage">
        <MsgSent :content="'Hello'" />
        <MsgReceived :nameSender="'Hạ Như'" :content="'Hello'" :sameSender="false" />
        <MsgReceived :nameSender="'Hạ Như'" :content="'Hello'" :sameSender="true" />
        <MsgSent :content="'fsdssd dsadsa dsada'" />
        <MsgSent :content="'fsdssd dsadsa dsada'" />
        <MsgSent :content="'fsdssd dsadsa dsada'" />
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
  </div> 

</template>

<script>
import MsgReceived from "./msgReceived";
import MsgSent from "./msgSent";
export default {
  components : {
    MsgReceived,
    MsgSent
  },

  data () {
    return {
      mgsContent : '',
      resize : false
    }
  },

  methods : {
    showChatLeft () {
      this.$emit('eventShowChatLeft');
    }
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
  width: 90%;
}

.setting {
  float: left;
  width: 10%;
  text-align: right;
  font-size: 25px;
  color: #007bff;
}
.chat-body {
  height: 78%;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
}

.chat-body-resize {
  height: 78% !important;
}

.chat-footer {
  padding: 10px 10px 5px 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 10px 0;
  height: 12%;
  box-sizing: border-box;
}
.chat-footer-resize {
  height: 15% !important;
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



@media (max-width: 800px) {
  .chat-footer {
    border-radius: 0px;
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