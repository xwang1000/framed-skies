<template>
  <div>
    <div class="options">
      <span v-for="category in pictureCategories"
        :key="category"
      >
        {{category}}
      </span>
    </div>
    <div class="gallery">
      <img 
        v-for="picture in pictures" 
        v-show="picture.category === selectedCategory"
        :key="picture.name" 
        :src="`${publicPath + picture.name}`" 
        :alt="picture.name"
      >
    </div>

  </div>


</template>

<script>
import pictures from '@/db.json'
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      pictures,
      selectedCategory: 'untitled-moods'
    }
  },
  computed: {
    pictureCategories () {
      return [...new Set(this.pictures.map(picture => picture.category))]
    }
  }
}
</script>

<style scoped>
.options {
  padding: 20px 30px;
}

.options span {
  display: inline-block;
  border: 1px solid rgb(154, 186, 229);
  color: rgb(154, 186, 229);
  border-radius: 8px;
  margin: 0 5px;
  margin-bottom: 5px;
  padding: 3px 4px;
}

.gallery img {
  width: 200px;
  height: 180px;
  object-fit: cover;
  margin: 5px;
}
</style>
