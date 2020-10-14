<template>
  <form @submit.prevent class="mb-3">
    <input
      v-model="name"
      type="text"
      id="login"
      :class="{ 'class-err': err }"
      class="from-control fadeIn second mb-3"
      ref="name"
      :placeholder="placeholderInputName"
      autocomplete="off"
    />
    <div class="btn-option">
      <button
        @click="showFormCreateRoom"
        class="btn-create-room fadeIn fourth mb-3"
      >
        Tạo Phòng
      </button>
      <button
        @click="showFormFindRoom"
        class="btn-find-room fadeIn fourth mb-3"
      >
        Tìm Phòng
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      err: false,
      name: this.$store.state.user.name || "",
      placeholderInputName: "Nhập Tên Của Bạn"
    };
  },
  created() {
    this.name = localStorage.name;
  },
  methods: {
    validateInputName() {
      if (!this.name) {
        this.placeholderInputName = "Bạn Chưa Nhập Tên !";
        this.$refs.name.focus();
        this.err = true;
        return false;
      } else return true;
    },

    createRoom() {
      this.$emit("eventCreateRoom");
    },
    setUpUser() {
      if (!this.userId) {
        this.$store.dispatch("postCreateUser");
      } else{
        this.$store.dispatch("patchAddSocketIdForUser");
      }
    },
    showFormFindRoom() {
      if (this.validateInputName()) {
        ///
        this.$emit("eventShowFormFindRoom");
      }
    },
    showFormCreateRoom() {
      if (this.validateInputName()) {
        this.$store.dispatch("storeSetName", this.name);
        this.setUpUser();
        this.$emit("eventShowFormCreateRoom");
      }
    }
  },
  computed : {
    userId () {
      return this.$store.state.user.userId;
    },
  },

  watch: {
    name(value) {
      if (value && this.err) {
        this.err = false;
        this.placeholderInputName = "Nhập Tên Của Bạn";
      }
    }
  }
};
</script>

<style scoped>
.class-err::placeholder {
  color: #dc3545;
}

.class-err:focus {
  background-color: #fff;
  border-bottom: 2px solid #dc3545;
}
</style>