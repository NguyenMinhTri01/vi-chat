<template>
  <div class="remove-member">
    <strong>{{notifications.adminName}} </strong>
    <span>đã xóa </span>
    <strong>{{notifications.memberName}}</strong>
    <span> ra khỏi phòng </span>
    <p>{{notifications.time}}</p>
  </div>
</template>

<script>
export default {
  props : ['notifications']
}
</script>

<style scoped>
.remove-member {
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