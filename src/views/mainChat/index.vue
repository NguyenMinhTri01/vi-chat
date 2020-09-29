<template>
  <div class="container main-chat">
    <div class="row justify-content-center h-100">
      <ChatLeft :showLeft="showLeft" @eventHidenChatLeft="handleEnventHidenChatLeft" />
      <ChatRight @eventShowChatLeft="handleEnventShowChatLeft"/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import ChatLeft from "./chatLeft";
import ChatRight from "./chatRight";

export default {
  components: {
    ChatLeft,
    ChatRight
  },
  data() {
    return {
      showLeft : false
    }
  },
  methods : {
    handleEnventShowChatLeft() {
      this.showLeft = true;
    },
    handleEnventHidenChatLeft() {
      this.showLeft = false;
    }
  }
};
</script>

<style scoped>
/* index */
.main-chat {
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

@media (max-width: 990px) {
  .main-chat {
    border-radius: 0px;
    width: 100% !important;
    max-width: 100% !important;
  }
}
/* index */
</style>