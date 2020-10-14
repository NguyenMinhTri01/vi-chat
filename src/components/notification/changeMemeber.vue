<template>
  <div class="change-member">
    <strong>{{notifications.memberName}} </strong>
    <span v-if="notifications.code == 'enter'">đã vào phòng</span>
    <span v-if="notifications.code == 'out'">đã thoát khỏi phòng</span>
    <p>{{notifications.time}}</p>
  </div>
</template>

<script>
export default {
  props : ['notifications']
}
</script>

<style scoped>
.change-member {
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