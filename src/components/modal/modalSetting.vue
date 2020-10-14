<template>
  <b-modal @hidden="hidenMadal" title="Cài Đặt" v-model="show">
    <form class="form-group" ref="form" @submit.stop.prevent="handleSubmit">
      <label for="input-name">Tên của bạn</label>
      <b-form-input
        ref="inputName"
        id="input-name"
        :autocomplete="'off'"
        :disabled="disableInput"
        :state="nameState"
        aria-describedby="input-name-feedback"
        v-model="userName"
        placeholder="Nhập Tên Của Bạn"
      >
      </b-form-input>
      <b-form-invalid-feedback id="input-name-feedback">
        Tên ít nhất 3 ký tự
      </b-form-invalid-feedback>

      <!-- option of admin group -->
      <template>
        <label class="mt-3" for="input-password-group">Mật khẩu nhóm</label>
        <b-input-group>
          <b-form-input
            id="input-password-group"
            :type="groupPW.typeInput"
            :disabled="disableInput"
            :state="passwordState"
            aria-describedby="input-password-group-feedback"
            v-model="groupPW.value"
          >
          </b-form-input>
          <b-input-group-append>
            <b-button @click="showPassword" variant="info"
              ><fa :icon="['fas', groupPW.icon]"
            /></b-button>
          </b-input-group-append>
          <b-form-invalid-feedback id="input-password-group-feedback">
            Mật khẩu nhất 3 ký tự
          </b-form-invalid-feedback>
        </b-input-group>
        <label class="mt-3" for="">Mật khẩu bảo mật: </label>
        <fa
          @click="changeStatusPW"
          class="switch"
          :icon="['fas', switchPW.icon]"
        />
        <span>{{ switchPW.text }}</span>
      </template>

      <!-- option of admin group -->
    </form>
    <div class="info-author">
      <strong> <fa :icon="['fas', 'info-circle']" /> Thông Tin Tác Giả:</strong>
      <div class="content-info">

        <p><strong>Author:</strong> Nguyễn Minh Trí</p>
        <p><strong>Github:</strong> <a href="https://github.com/NguyenMinhTri01" target="_blank" rel="noopener noreferrer">github.com/NguyenMinhTri01</a></p>        
        <p><strong>Email:</strong> <a href="mailto:nguyenminhtri07011999@gmail.com">nguyenminhtri07011999@gmail.com</a> </p>
      </div>

    </div>
    <template v-slot:modal-footer>
      <b-button
        v-if="btnSaveStatus"
        variant="success"
        size="sm"
        class="float-right"
        >Lưu Thay Đổi
        <fa :icon="['fas', 'check']" />
      </b-button>
      <b-button
        v-else
        @click="disableInput = false"
        variant="warning"
        size="sm"
        class="float-right"
        >Chỉnh Sửa
        <fa :icon="['fas', 'edit']" />
      </b-button>
      <b-button
        variant="secondary"
        size="sm"
        class="float-right"
        @click="outGroup"
        >Rời nhóm
        <fa :icon="['fas', 'sign-out-alt']" />
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props : ['modalShow'],
  data () {
    return {
      show : false ,
      userName : "Nguyễn Minh Trí",
      disableInput : true,
      btnSaveStatus : false,
      switchPW : {
        icon : 'toggle-on',
        status : true,
        text : 'Bật'
      },
      groupPW : {
        value : 'adbcd',
        typeInput : 'password',
        icon : 'eye'
      }
    }
  },
  computed :{
    nameState () {
       return this.userName.length > 2 ? null : false
    },
    passwordState () {
      return this.groupPW.value.length > 2 ? null : false
    }
  },  

  methods : {
    hidenMadal () {
      this.disableInput = true;
      this.btnSaveStatus = false;
      this.$emit('eventHideModal');
    },
    outGroup () {
      // handle out group
      this.show = false
      this.$router.push('/');
    },
    showPassword () {
      if (this.groupPW.typeInput === 'password') {
        this.groupPW.typeInput = 'text',
        this.groupPW.icon = 'eye-slash'
      } else if (this.groupPW.typeInput === 'text') {
        this.groupPW.typeInput = 'password',
        this.groupPW.icon = 'eye'
      }
    },
    toast(configToast, content) {
      this.$bvToast.toast(`${content}`, configToast)    
    },    
    changeStatusPW () {
      if (this.switchPW.status) {
        this.switchPW.status = false;
        this.switchPW.icon = 'toggle-off';
        this.switchPW.text = 'Tắt';
        //call api update status;
        this.toast({
          title : `Cập Nhật`,
          toaster : 'b-toaster-bottom-right',
          solid : true,
          appendToast : true,
          autoHideDelay : 1000,
          variant : 'success'
        },'Thành Công')
      } else {
        this.switchPW.status = true;
        this.switchPW.icon = "toggle-on";
        this.switchPW.text = 'Bật';
        //call api update status
        this.toast({
          title : `Cập Nhật`,
          toaster : 'b-toaster-bottom-right',
          solid : true,
          appendToast : true,
          autoHideDelay : 1000,
          variant : 'success'
        },'Thành Công')
      }
    },    
  },
  watch : {
    disableInput (value) {
      if (!value) {
        setTimeout(() => {
          this.$refs['inputName'].focus();
        }, 100);
      }
    },
    userName(value){
      if (value && !this.btnSaveStatus) {
        this.btnSaveStatus = true
      }
    },
    'groupPW.value' (value) {
      if (value && !this.btnSaveStatus){
        this.btnSaveStatus = true
      }
    },
    modalShow (value) {
      if(value) {
        this.show = value
      }
    }
  }  
};
</script>

<style scoped>
.switch {
  margin-left: 20px;
  margin-right: 5px;
  font-size: 30px;
  color: #007bff;
  position: relative;
  top:5px;
  cursor:pointer;
}
.switch:hover {
  color: #0518f7;
}

.info-author p {
  margin-bottom: 0;
}

.info-author {
  margin-top: 30px;
  border: 1px solid #dde8dd;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  font-size: 0.8rem;
  background-color: #e1f2f9;
  font-family: inherit;
}
.info-author a {
  color: black;
}

.content-info {
  margin: 5px 0 0 10px;
}


@media (max-width: 425px) { }

@media (max-width: 990px) {

.info-author {
  font-size: 0.75rem;
}


}

</style>