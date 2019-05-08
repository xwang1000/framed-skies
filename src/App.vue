<template>
  <div id="app">
    <div class="header">
      <div class="header__brand">
        <h1>Sheng Chenni</h1>
        <p>contemporary jewellery</p>
      </div>
      <NavBar />
    </div>

    <div class="content-wrap">
      <router-view />
    </div>

    <Footer />
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: work sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #414c57;
  transition: all .6s ease;
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding: 20px;
  padding-bottom: 4rem;
}

@media screen and (max-width: 800px) {
  html {
    font-size: 90%;
  }

  .header h1 {
    font-size: 1.4rem;
  }

  .header p {
    font-size: .9rem;
  }
}

h1 {
  font-weight: 400;
  font-family: work sans;
}

p {
  line-height: 1.5rem;
}

.header {
  padding: 1.4rem 2rem;
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
