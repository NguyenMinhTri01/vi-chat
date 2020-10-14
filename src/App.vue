<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created () {
   
  }
}
</script>
<style>
body, html {
  height: 100%;
  margin: 0;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("../src/assets/background.jpg");
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-size: cover;
  background-position: center;
  height: 100%;
  padding-top : 2%;
  padding-bottom: 2%;
}

@media (max-width: 990px) {
  .app {
    padding: 0;
  }
}
</style>
