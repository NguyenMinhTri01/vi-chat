<template>
  <div class="message-sent">
    <div class="content-sent">
      <span>{{content}}</span>
      <span class="tooltiptext">Hôm Nay 10:30</span>
    </div>
  </div>
</template>

<script>
export default {
  props : ['content']
};
</script>

<style scoped>
/*sent*/
.message-sent {
  margin: 15px 3px 10px 3px;
  position: relative;
  text-align: right;
}
.content-sent {
  background: #3578e5;
  padding: 5px 10px 5px 10px;
  border-radius: 1.3em;
  color: white;
  max-width: 70%;
  font-family: inherit;
  display: inline-block;
  text-align: left;
  position: relative;
}
.content-sent .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, .30);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 2s;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 104%;
}

.content-sent:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}


/*sent*/
</style>

