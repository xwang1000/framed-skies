<template>
  <div>
    <div class="image-wrapper">
      <img class="home__image"
        :src="`${publicPath}untitled-moods.png` "
        alt="home image"
      />
      <p>photography: Chang Ting-Hsuan</p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
}
}
</script>

<style scoped>
.image-wrapper {
  text-align: right;
}

.image-wrapper img {
  width: 90vw;
  max-width: 700px;
}

.image-wrapper p {
  font-weight: 400;
  opacity: .5;
  font-size: .8rem;
}
</style>
