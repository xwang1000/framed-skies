<template>
  <div>
    <div class="options">
      <span
        v-for="category in pictureCategories"
        :key="category"
        :class="{ disabledCategory: category !== selectedCategory }"
        @click="selectCategory(category)"
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
import pictures from "@/db.json";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      pictures,
      selectedCategory: "untitled-moods"
    };
  },
  computed: {
    pictureCategories () {
      return [...new Set(this.pictures.map(picture => picture.category))];
    }
  },
  methods: {
    selectCategory (category) {
      this.selectedCategory = category
    }
  }
};
</script>

<style scoped>
.options {
  padding: 20px 30px;
  padding-top: 0;
}

.options span {
  display: inline-block;
  border-radius: 5px;
  margin: 0 5px 5px 5px;
  padding: 3px 5px;
}

.options span:hover {
  cursor: pointer;
}

.options span:not(.disabledCategory) {
  border: 1px solid rgb(154, 186, 229);
  color: rgb(154, 186, 229);
}

.disabledCategory {
  color: grey;
  opacity: .5;
  border: 0.5px solid grey;
}

.gallery img {
  width: 200px;
  height: 180px;
  object-fit: cover;
  margin: 5px;
}
</style>
