<template>
  <img class="movie-poster" :src="movieDetail.Poster" />
  <h2>{{ movieDetail.Title }}</h2>
  <span>{{ movieDetail.Year }}</span>
  <span>{{ movieDetail.Rated }}</span>
  <span>{{ movieDetail.Released }}</span>
  <span>{{ movieDetail.Runtime }}</span>
  <span>{{ movieDetail.Plot }}</span>
  <button class="modal-button-close" @click="onModalClose()">Close</button>
</template>

<script>
export default {
  props: {
    movieDetail: {
      type: Object,
    },
    onModalClose: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-poster {
  width: 243px;
  height: 360px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px #00000040;
}

.modal-button-close {
  width: auto;
  height: 40px;
  border-radius: 16px;
  border: 0;
  margin: 10px;
  background-color: #4299e1;
}
</style>
