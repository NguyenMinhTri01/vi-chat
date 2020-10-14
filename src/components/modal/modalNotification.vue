<template>
  <ul class="list-notification">
    <li class="notifi-item">
      <Rename :notifications="notificationRename" />
    </li>
    <li class="notifi-item">
      <Rename :notifications="notificationRename" />
    </li>
    <li class="notifi-item">
      <Rename :notifications="notificationRename" />
    </li>
    <li class="notifi-item">
      <ChangeMember :notifications="notificationChangeMember" />
    </li>
    <li class="notifi-item">
      <RemoveMember :notifications="notificationRemoveMember" />
    </li>
    <li class="notifi-item">
      <ChangeOwnerRoom :notifications="notificationChage" />
    </li>
    <li class="notifi-item">
      <ChangeAdministrators :notifications="notificationChage" />
    </li>
    
  </ul>  
</template>

<script>
import Rename from "../notification/rename";
import ChangeMember from "../notification/changeMemeber";
import RemoveMember from "../notification/removeMember";
import ChangeAdministrators from "../notification/changeAdministrators";
import ChangeOwnerRoom from "../notification/changeOwnerRoom";
export default {
  components : {
    Rename,
    ChangeMember,
    RemoveMember,
    ChangeAdministrators,
    ChangeOwnerRoom
  },
  data() {
    return {
      notificationRename : {
        oldName : 'Tri Minh',
        newName : 'Nguyễn Minh trí',
        time : 'Hôm Nay 10:30',
        code : 'rename'
      },
      notificationChangeMember : {
        memberName : 'Nguyễn Minh Trí',
        code : "out",
        time : 'Hôm Nay 10:30'
      },
      notificationRemoveMember : {
        adminName : 'Nguyễn Minh Trí',
        memberName : 'Trí Minh',
        code : 'remove',
        time : 'Hôm Nay 10:30'
      },
      notificationChage : {
        memberName : "abc",
        time : 'Hôm Nay 10:30'
      }
    }
  }
}
</script>

<style scoped>
.list-notification {
  display: block;
  position:absolute;
  width: 30%;
  max-height: 81%;
  background:#fff;
  box-sizing:border-box;
  z-index: 2;
  list-style: none;
  padding: 0;
  text-align: left;
  top: 7%;
  right: 1%;
  border-radius: 0.3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0;
  overflow: auto;
}

.notifi-item {
  font-size: 1rem;
  width: 100%;
  border-bottom: 0.3px solid #e1eaf3;
  box-sizing: border-box;
  padding: 10px;
}
.notifi-item:hover {
  background: #e1eaf3;
}


@media (max-width: 490px) {
  .list-notification {
    width: 40%;
  }
}
@media (max-width: 390px) {
  .list-notification {
  width: 50%;
  }
}


</style>