<template>
  <article
    class="movie-item"
    v-for="movieItem in movieList"
    :key="movieItem.imdbID"
    @click="onDetail(movieItem.imdbID)"
  >
    <img class="movie-poster" :src="movieItem.Poster" />
    <span>{{ movieItem.Title }}</span>
  </article>
</template>

<script>
export default {
  props: {
    movieList: {
      type: Array,
    },
    onDetail: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 280px;
  height: 420px;
  padding: 10px;
  margin: 20px 10px 10px 10px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ebf8ff;
  box-shadow: 0px 0px 20px 0px #00000040;
}

.movie-poster {
  width: 243px;
  height: 360px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px #00000040;
}
</style>
