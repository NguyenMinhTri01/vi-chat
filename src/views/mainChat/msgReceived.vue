<template>
  <li :class="{again : sameSender}" class="message-received">
    <div class="name-sender">
      <span v-if='!sameSender' >{{nameSender}}</span>
    </div>
    <div  class="content-received">
      <span
        >{{content}}</span
      >
    </div>
  </li>
</template>

<script>
export default {
  props : ['nameSender', 'content', 'sameSender']
  
};
</script>

<style>
.content-received {
  background: #cacaca;
  padding: 5px 10px 5px 10px;
  border-radius: 1.3em;
  color: black;
  max-width: 70%;
  font-family: inherit;
  display: inline-block;;
}
.message-received {
  margin: 15px 3px 5px 3px;
  position: relative;
}
.again {
  margin-top: 0 !important;
}

.name-sender {
  color: rgba(0, 0, 0, .40);
  font-size: 13px;
  font-weight: normal;
  line-height: 1.28;
  margin-bottom: 1px;
  overflow: hidden;
  padding-left: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit;
}

</style>