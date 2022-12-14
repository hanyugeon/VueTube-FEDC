<template>
  <!-- Modal -->
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

  <!-- Header -->
  <HeaderComponent ref="headerComponent" :onSearchSubmit="onSearchSubmit" />

  <!-- movie -->
  <main class="movie">
    <section class="movie-container">
      <article
        class="movie-item"
        v-for="movieItem in movieList"
        :key="movieItem.imdbID"
        @click="onDetail(movieItem.imdbID)"
      >
        <img class="movie-poster" :src="movieItem.Poster" />
        <span>{{ movieItem.Title }}</span>
      </article>
    </section>
  </main>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent";
import { requestMovieList, requestMovieDetail } from "./utils/api.js";

export default {
  components: {
    HeaderComponent,
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

.movie {
  display: grid;
  place-items: center;
  width: 100%;
  height: auto;
  padding-top: 60px;
}

.movie-container {
  display: grid;
  place-items: center;
  max-width: 1280px;
  height: 100%;
  grid-template-columns: repeat(2, 0.8fr);
}

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

@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
  }

  .movie-container {
    grid-template-columns: repeat(1, 0.8fr);
  }
}
</style>
