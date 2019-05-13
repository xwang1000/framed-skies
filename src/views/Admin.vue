<template>
  <div class="admin">
    <div class="upload-panel">
      <form action="">
        <label for="avatar">upload image</label>
        <input 
          type="file" 
          id="file" 
          @change="processFile($event)"
          multiple
        >
      </form>

      <div class="upload-preview">
        <div class="upload-preview__column" v-for="file in files" :key="file.name">
          <img :src="file.url" alt="">
          <p>{{ file.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    }
  },
  methods: {
    processFile(event) {

      const fileList = event.target.files

      for (let i = 0; i < fileList.length; i++) {
        const reader = new FileReader()
        reader.onload = e => {
          const newFile = {
            name: fileList[i].name,
            url: e.target.result
          }
          
          this.files.push(newFile)
        }
        reader.readAsDataURL(event.target.files[i])
      }
    }
  }
}
</script>

<style scoped>
.upload-panel form {
  text-align: left;
}

.upload-preview {
  border-radius: 10px;
  padding: 10px;
  display: flex;
}

.upload-preview__column {
  position: relative;
  width: 20%;
  background-color: #eee;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.upload-preview__column img {
  max-width: 80%;
  max-height: 80%;
}

.upload-preview__column p {
  position: absolute;
  bottom: 0;
}

</style>
