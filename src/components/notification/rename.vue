<template>
  <div class="rename">
    <strong>{{notifications.oldName}} </strong>
    <span>đã đổi tên thành </span>
    <strong>{{notifications.newName}}</strong>
    <p>{{notifications.time}}</p>
  </div>
</template>

<script>
export default {
  props : ['notifications']
}
</script>

<style scoped>
.rename {
  width: 100%;
  box-sizing: border-box;
}
p {
  margin: 0;
  display: block;
  color: #007bff;
  font-size: 0.8rem;
}

</style>