<template>
  <div class="sky-collector">
    <div class="image-wrapper">
      <p>coming soon</p>
      <img 
        src="@/assets/frames.png" 
        alt="framed skies"
      >
    </div>

    <div class="image-wrapper">
      <img 
        src="@/assets/frames-pink.png" 
        alt="framed skies"
      >
    </div>

  </div>
</template>

<style scoped>

.sky-collector img {
  margin: 10px;
}

.image-wrapper:nth-child(1) {
  text-align: right;
}

.image-wrapper:nth-child(1) p {
  opacity: .8;
  margin: 0;
  padding-right: 1rem;
}

.image-wrapper:nth-child(1) img {
  width: 70vw;
  max-width: 400px;
}

.image-wrapper:nth-child(2) {
  text-align: left;
} 

.image-wrapper:nth-child(2) img {
  width: 80vw;
  max-width: 500px;
}
</style>
