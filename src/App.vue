<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="header__brand">
        <h1>Sheng Chenni</h1>
        <p>contemporary jewellery</p>
      </div>
      </router-link>
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
  font-family: "Work Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #414c57;
  transition: all .6s ease;
  position: relative;
  min-height: 100vh;
}

@media screen and (max-width: 800px) {
  html {
    font-size: 90%;
  }

  .header {
    padding: .8rem 1rem;
  }

  .header h1 {
    font-size: 1.2rem;
  }

  .header p {
    font-size: .8rem;
  }

  .content-wrap {
    padding: .8rem 1rem;
    padding-bottom: 4rem;
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

.header a {
  opacity: .8;
  font-size: .9rem;
  font-weight: 500;
  font-family: work sans, sans-serif;
  color: #2c3e50;
  padding: 0 5px;
  text-decoration: none;
}

.content-wrap {
  padding: 1.4rem 2rem;
  padding-bottom: 4rem;
}

</style>
