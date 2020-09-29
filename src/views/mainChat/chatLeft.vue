<template>
  <div class="col-lg-4 col-12 chat-left" :class="{ 'show-chatLeft': showLeft, 'hiden-chatLeft': hidenLeft }">
    <div class="header-left text-center">
      <p class="text-header-left">Thành Viên Trong Phòng</p>
        <div @click="hidenChatLeft" class="icon-reposive">
          <fa :icon="['fas', 'chevron-left']" />
        </div>
    </div>
    <div class="card-body contacts_body">
      <ul class="contact">
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">
                  <fa :icon="['fas', 'user-slash']" /> Xóa Khỏi
                  Phòng</b-dropdown-item
                >
                <b-dropdown-item href="#"
                  >Đặt Làm Quản Trị Viên</b-dropdown-item
                >
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="card-item">
            <div class="icon">
              <span class="m-2 icon-user">
                <fa :icon="['fas', 'user']" />
              </span>
            </div>
            <div class="info-user">
              <p style="margin:0; font-weight: bold;">Nguyễn Minh Trí</p>
              <i style="font-size:15px">10 giờ 30 phút</i>
            </div>

            <div class="option">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <fa :icon="['fas', 'ellipsis-v']" />
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showLeft"],
  methods : {
    hidenChatLeft () {
      this.hidenLeft = true
      this.$emit('eventHidenChatLeft');
    }
  },
  data () {
    return {
      hidenLeft : false
    }
  },
  watch : {
    showLeft(value) {
      if(value) this.hidenLeft = false
    }
  }
};
</script>

<style scoped>
.item:hover {
  background: rgba(0, 0, 0, 0.05);
}
.item {
  background: rgba(0, 0, 0, 0.03);
  font-family: inherit;
  height: 70px;
  padding: 10px;
}

/* .card-item {
} */
.icon {
  position: relative;
  height: 50px;
  width: 15%;
  text-align: center;
  float: left;
}
.info-user {
  position: relative;
  height: 50px;
  width: 75%;
  float: left;
  font-size: 16px;
}
.icon-user {
  font-size: 35px;
  color: #39ace7;
}

.option {
  height: 50px;
  width: 5%;
  float: left;
  padding: 5px;
  position: relative;
}

.contact {
  list-style: none;
  padding: 0;
  position: relative;
}

.chat-left {
  position: relative;
  padding: 0;
  border-right: 1px solid #cccccc;
  height: 100%;
}

.contacts_body {
  padding: 0 !important;
  overflow-y: auto;
  white-space: nowrap;
  height: 90%;
}

.header-left {
  padding: 10px 5px 5px 5px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px 0 0 0;
  border-bottom: 1px solid #cccccc;
  height: 10%;
}

.text-header-left {
  font-size: 1.6rem;
  color: #39ace7;
  font-family: inherit;
  margin-bottom: 0 !important;
}

.icon-reposive {
  width: 3%;
  float: left;
  height: 30px;
  padding: 0px 0px 0px 0px;
  visibility: hidden;
  display: none;
  color: #a9a9a9;
  position:relative;
  top: 4px;
}
@media (max-width: 990px) {


  @keyframes showLeft-chat {
    from {right: 100%;}
    to {right: 15%;}
  }
  @keyframes hidenLeft-chat {
    from {right: 15%;}
    to {
      right: 100%;
      display: none;
      visibility: hidden;
    }
  }  


  .chat-left {
    visibility: hidden;
    display: none;
  }
  .header-left {
    background: rgba(255, 255, 255);
    border-radius: 0px;
    height: 8%;
  }
  .text-header-left {
    font-size: 1.2rem;
    width: 97%;
    float: left;
  }
  .icon-reposive {
    visibility: visible;
    display: block;
  }
  .contacts_body {
    height: 92%;
  }
  .show-chatLeft {
    position: absolute;
    visibility: visible;
    display: block;
    border-right: 0px;
    z-index: 1;
    background-color: rgba(255, 255, 255);
    width: 85%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    right: 85%;
    animation-name: showLeft-chat;
    animation-duration: 1s;
    animation-fill-mode: forwards;  
  }
  .hiden-chatLeft {
    position: absolute;
    visibility: visible;
    display: block;
    border-right: 0px;
    z-index: 1;
    background-color: rgba(255, 255, 255);
    width: 85%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    right: 85%;
    animation-name: hidenLeft-chat;
    animation-duration: 1s;
    animation-fill-mode: forwards;  
  }
  .item:hover {
    background: rgba(0, 0, 0, 0.15);
  }
  .item {
    background: rgba(0, 0, 0, 0.08);
  }

}
</style>