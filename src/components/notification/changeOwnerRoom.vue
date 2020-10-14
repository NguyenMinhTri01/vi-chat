<template>
  <div class="change-ownerRoom">
    <strong>{{notifications.memberName}} </strong>
    <span>đã trở thành chủ phòng</span>
    <p>{{notifications.time}}</p>
  </div>
</template>

<script>
export default {
  props : ['notifications']
}
</script>

<style scoped>
.change-owerRoom{
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