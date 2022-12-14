<template>
  <ModalComponent
    :isModalViewing="isModalViewing"
    :movieDetail="movieDetail"
    :onModalClose="onModalClose"
  />
  <HeaderComponent ref="headerComponent" :onSearchSubmit="onSearchSubmit" />
  <MovieComponent :movieList="movieList" :onDetail="onDetail" />
</template>

<script>
import ModalComponent from "./components/modal/ModalComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MovieComponent from "./components/movie/MovieComponent";
import { requestMovieList, requestMovieDetail } from "./utils/api.js";

export default {
  components: {
    ModalComponent,
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

<style scoped lang="scss"></style>
