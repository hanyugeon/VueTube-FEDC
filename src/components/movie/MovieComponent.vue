<template>
  <main class="movie">
    <MovieContainer>
      <MovieItems :movieList="movieList" :onClickMovieItem="onClickMovieItem" />
    </MovieContainer>
  </main>
</template>

<script>
import MovieContainer from "./MovieContainer.vue";
import MovieItems from "./MovieItems.vue";

export default {
  props: {
    movieList: {
      type: Array,
    },
    onClickMovieItem: {
      type: Function,
    },
  },
  components: {
    MovieContainer,
    MovieItems,
  },
};
</script>

<style lang="scss" scoped>
.movie {
  display: grid;
  place-items: center;
  width: 100%;
  height: auto;
  padding-top: 60px;
}
</style>
