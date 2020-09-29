<template>
  <li class="message-sent">
    <div class="content-sent">
      <span
        >{{content}}</span
      >
    </div>
  </li>
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
}
/*sent*/
</style>

