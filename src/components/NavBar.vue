<template>
  <div id="nav">
    <router-link to="/works">Works</router-link>
    <router-link to="/sky-collector">Sky Collector</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 15px 0px;
}

#nav a {
  opacity: .8;
  font-size: .9rem;
  font-weight: 500;
  font-family: work sans, sans-serif;
  color: #2c3e50;
  padding: 0 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(154, 186, 229);
}
</style>