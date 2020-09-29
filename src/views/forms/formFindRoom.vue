<template>
  <form @submit.prevent>
    <input
      v-model="roomId"
      type="text"
      :class="{ 'class-err': err }"
      class="from-control fadeIn second mb-3"
      ref="roomId"
      :placeholder="placeholderRoomId"
      autocomplete="off"
    />
    <div class="btn-option">
      <button @click="findRoom" class="btn-find-room fadeIn fourth mb-3">
        <fa class="fa-spin" v-if="loading" :icon="['fas', 'spinner']" />
        <fa v-else :icon="['fas', 'search']" /> Tìm Phòng
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      roomId: "",
      placeholderRoomId: "Nhập ID Phòng",
      err: false,
      loading: false
    };
  },

  methods: {
    validateInputRoomId() {
      if (!this.roomId) {
        this.placeholderRoomId = "Bạn Chưa Nhập ID Phòng !";
        this.$refs.roomId.focus();
        this.err = true;
        return false;
      } else return true;
    },
    findRoom() {
      if (this.validateInputRoomId()) {
        this.loading = true;
        this.$store.dispatch("storeSetRoomId", this.roomId);
        this.$emit("eventFindRoom");
      }
    }
  },

  watch: {
    roomId(value) {
      if (value && this.err) {
        this.err = false;
        this.placeholderRoomId = "Nhập ID Phòng";
      }
    }
  }
};
</script>

<style scoped>
.btn-find-room {
  width: 100%;
  margin: 0;
  font-size: 15px;
}

.class-err::placeholder {
  color: #dc3545;
}

.class-err:focus {
  background-color: #fff;
  border-bottom: 2px solid #dc3545;
}
</style>