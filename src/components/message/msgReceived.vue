<template>
  <div :class="{again : sameSender}" class="message-received">
    <div class="name-sender">
      <span v-if='!sameSender' >{{nameSender}}</span>
    </div>
    <div  class="content-received">
      <span
        >{{content}}</span
      >
      <span class="tooltiptext">Hôm Nay 10:30</span>
    </div>
  </div>
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
  display: inline-block;
  position: relative;
  /* font-size: 18px; */
}
.message-received {
  margin: 15px 3px 5px 3px;
  position: relative;
}

.content-received .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, .30);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  opacity: 0;
  transition: opacity 2s;
  font-size: 0.8rem;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -1px;
  left: 105%;
}

.content-received:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
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