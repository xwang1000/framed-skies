<template>
  <div class="sky-collector">
    <div class="image-wrapper">
      <p>coming soon</p>
      <img 
        src="https://static.wixstatic.com/media/5e14d6_fed438305ddc44d6b336d73e1512202e~mv2.png/v1/fill/w_540,h_462,al_c,q_80,usm_0.66_1.00_0.01/brooch%20.webp" 
        alt="framed skies"
      >
    </div>

    <div class="image-wrapper">
      <img 
        src="https://static.wixstatic.com/media/5e14d6_b3cada1a1e954dd8883abf4b4bd1f426~mv2.png/v1/fill/w_1200,h_568,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp" 
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
