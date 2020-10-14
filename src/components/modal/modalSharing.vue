<template>
  <b-modal @hidden="hidenMadal" title="Chia Sẻ Nhóm" v-model="show">
      <p class="lable-modal">Link Chia Sẻ:</p>
      <b-alert
        :show="copyLinkSuccess"
        dismissible
        variant="success"
      >
        Đã Copy Liên Kết
      </b-alert>      
      <b-input-group>
        <b-form-input
          class="link-sharing"
          :readonly="true"
          :plaintext="true"
          v-model="urlShare"
          :max="255"
          :id="'urlShare'"
        >
        </b-form-input>
        <b-input-group-append>
          <b-button
            @click="copyClipboard"
            class="btn-copy"
            ><fa :icon="['far', 'copy']"
          /></b-button>
        </b-input-group-append>        
      </b-input-group>
      <p class="lable-modal">QR Code:</p>
      <div class="qr-code">
        <QrcodeVue :value="urlShare" :size="200" level="H" />
      </div>


    <template v-slot:modal-footer>
      <b-button
        variant="primary"
        size="sm"
        class="float-right"
        @click="show = false"
        >Đóng
        <fa :icon="['far', 'times-circle']" />
      </b-button>
    </template>
  </b-modal>

</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components : {
    QrcodeVue
  },
  props : ['modalShow'],
  data() {
    return {
      show : false,
      urlShare : "http://localhost:8080/room/das",
      copyLinkSuccess : false
    }
  },
  methods : {
    hidenMadal () {
      this.copyLinkSuccess = false
      this.$emit('eventHideModal');
    },
    copyClipboard () {
      navigator.clipboard.writeText(this.urlShare)
      .then(() => {
        this.copyLinkSuccess = true
      }, () => {
        this.copyLinkSuccess = false
        /* clipboard write failed */
      });      
    },
    toast(configToast, content) {
      this.$bvToast.toast(`${content}`, configToast)    
    },   

  },

  watch : {
    modalShow (value) {
      if(value) {
        this.show = value
      }
    }
  }
}
</script>

<style scoped>

.link-sharing{
  background:#d7f1e0;
  font-weight: 500;
  text-overflow: ellipsis;
  outline-color: mediumseagreen;

}
.btn-copy {
  background: #93e8b9;
  border: #93e8b9;
  font-weight: 500;
}
.lable-modal {
  margin: 10px 0 10px 0;
  font-weight: bold;
}
.qr-code {
  text-align: center;
}
</style>