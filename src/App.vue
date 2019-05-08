<template>
  <div id="app">
    <div class="header">
      <div class="header__brand">
        <h1>Sheng Chenni</h1>
        <p>contemporary jewellery</p>
      </div>
      <NavBar />
    </div>

    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: work sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
}

h1 {
  font-weight: 400;
  font-family: work sans;
}

.header {
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.header__brand * {
  margin: 0;
}

.header__brand p {
  font-weight: 400;
  font-family: work sans;
  color: grey;
  opacity: .7;
}

</style>
