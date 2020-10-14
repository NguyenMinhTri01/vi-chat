<template>
  <form @submit.prevent>
    <input
      v-model="password"
      type="password"
      :class="{ 'class-err': errPassword }"
      class="from-control fadeIn second mb-3"
      ref="password"
      :placeholder="'Nhập Mật khẩu Phòng'"
      autocomplete="off"
    />
    <label :class="{'show-err' : errPassword}" style="color:red;display:none">{{errTextPassword}}</label>
    <input
      v-model="passwordConfirm"
      type="password"
      :class="{ 'class-err': errPasswordConfirm }"
      class="from-control fadeIn second mb-3"
      ref="passwordConfirm"
      :placeholder="'Nhập Lại Mật Khẩu'"
      autocomplete="off"
    />
    <label :class="{'show-err' : errPasswordConfirm}" style="color:red;display:none">{{errTextPasswordConfirm}}</label>
    <div class="btn-option">
      <button type="button" @click="createRoom" class="btn-create-room fadeIn third mb-3">
        <fa class="fa-spin" v-if="loading" :icon="['fas', 'spinner']" />
        <fa v-else :icon="['fas', 'plus']" /> Tạo Phòng
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      passwordConfirm : "",
      errTextPassword: "",
      errTextPasswordConfirm : "",
      errPassword: false,
      errPasswordConfirm : false,
    };
  },

  methods: {
    validateInput() {
      if (!this.password) {
        this.errTextPassword = "Bạn Chưa Nhập Mật Khẩu Phòng !";
        this.$refs.password.focus();
        this.errPassword = true;
        return false;
      } else if(this.password.length < 4) {
        this.errTextPassword = "Mật Khẩu Phòng ít Nhất 4 ký tự !";
        this.$refs.password.focus();
        this.errPassword = true;
        return false;        
      } else if(this.password.indexOf(' ') >= 0) {
        this.errTextPassword = "Mật Khẩu Phòng Không Được Chứa Khoản Cách !";
        this.$refs.password.focus();
        this.errPassword = true;
        return false;        
      } else if (!this.passwordConfirm){
        this.errTextPasswordConfirm = "Bạn Chưa Nhập Lại Mật Khẩu Phòng!";
        this.$refs.passwordConfirm.focus();
        this.errPasswordConfirm = true;
        return false;
      } else if (this.password !== this.passwordConfirm) {
        this.errTextPasswordConfirm = "Nhập Lại Mật Khẩu Chưa đúng!";
        this.$refs.passwordConfirm.focus();
        this.errPasswordConfirm = true;
        return false;
      } else return true
    },
    createRoom() {
      if (this.validateInput()) {
        this.$store.dispatch("storeSetRoomPassword", this.passwordConfirm);
        this.$store.dispatch("postCreateRoom", this.passwordConfirm);
      }
    }
  },
  computed : {
    loading() {
      return this.$store.state.user.loading;
    },

  },
  watch: {
    errPassword (value) {
      if(value) this.errPasswordConfirm = false
    },
    errPasswordConfirm (value) {
      if(value) this.errPassword = false
    },

  }
};
</script>

<style scoped>
.btn-create-room {
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
.show-err {
  display: block !important;
  visibility: visible !important;
}
</style>