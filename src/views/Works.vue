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
        :class="{ selectedPicture: selectedPictures.includes(picture.name) }"
        @click="selectPictures(picture.name)"
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
      selectedCategory: 'untitled-moods',
      selectedPictures: []
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
    },
    selectPictures (name) {
      if (!this.selectedPictures.includes(name)) {
        this.selectedPictures.push(name)
      } else {
        const index = this.selectedPictures.indexOf(name)
        this.selectedPictures.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>

.options {
  padding: 0 10px;
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

.gallery img:hover {
  cursor: pointer;
}

.gallery img:not(selectedPicture) {
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin: 5px;
  transition: all 1.5s;
}

.gallery img.selectedPicture {
  width: 400px;
  height: 300px;
  transition: all 1.5s;
}

@media screen and (max-width: 820px) {
  .gallery img:not(selectedPicture) {
    width: 40vw;
    height: 120px;
  }

  .gallery img.selectedPicture {
    width: 83vw;
    height: 240px;
  }
}

</style>
