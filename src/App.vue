<template>
  <section class="modal" v-if="isModalViewing" @click.self="onModalClose()">
    <article class="modal-container">
      <img class="movie-poster" :src="movieDetail.Poster" />
      <h2>{{ movieDetail.Title }}</h2>
      <span>{{ movieDetail.Year }}</span>
      <span>{{ movieDetail.Rated }}</span>
      <span>{{ movieDetail.Released }}</span>
      <span>{{ movieDetail.Runtime }}</span>
      <span>{{ movieDetail.Plot }}</span>
      <button class="modal-button-close" @click="onModalClose()">Close</button>
    </article>
  </section>

  <HeaderComponent ref="headerComponent" :onSearchSubmit="onSearchSubmit" />
  <MovieComponent :movieList="movieList" :onDetail="onDetail" />
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent";
import MovieComponent from "./components/movie/MovieComponent";
import { requestMovieList, requestMovieDetail } from "./utils/api.js";

export default {
  components: {
    HeaderComponent,
    MovieComponent,
  },
  data() {
    return {
      searchInputValue: "",
      movieList: [],
      movieDetail: {},
      isModalViewing: false,
    };
  },
  methods: {
    getSearchInputValue() {
      const $header = this.$refs.headerComponent;
      const $searchBar = $header.$refs.searchBar;
      const inputValue = $searchBar.searchInputValue;

      return inputValue;
    },
    setSearchInputValue(value) {
      this.searchInputValue = value;
    },
    async onSearchSubmit() {
      try {
        if (!this.getSearchInputValue()) return;

        this.setSearchInputValue(this.getSearchInputValue());
        const response = await requestMovieList(this.searchInputValue);
        this.movieList = response.Search;

        return;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async onDetail(imdbID) {
      try {
        if (this.isModalViewing) return;

        const response = await requestMovieDetail(imdbID);
        this.isModalViewing = true;
        this.movieDetail = {};
        this.movieDetail = response;

        return;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onModalClose() {
      this.isModalViewing = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #00000040;
}

.modal-container {
  display: grid;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  width: 340px;
  height: 520px;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
  overflow: auto;
  overscroll-behavior: contain;
  background-color: #bee3f8;
  box-shadow: 0px 0px 20px 0px #ffffffa0;
}

.modal-button-close {
  width: auto;
  height: 40px;
  border-radius: 16px;
  border: 0;
  margin: 10px;
  background-color: #4299e1;
}

@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
  }
}
</style>
