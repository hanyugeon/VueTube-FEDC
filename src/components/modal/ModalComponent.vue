<template>
  <section class="modal" v-if="isModalViewing">
    <!-- <section class="modal" v-if="isModalViewing" @click.self="onModalClose()"> -->
    <ModalContainer>
      <ModalMovieDetail :movieDetail="movieDetail" />
    </ModalContainer>
  </section>
</template>

<script>
import ModalContainer from "./ModalContainer.vue";
import ModalMovieDetail from "./ModalMovieDetail.vue";

export default {
  props: {
    isModalViewing: {
      type: Boolean,
    },
    movieDetail: {
      type: Object,
    },
  },
  components: {
    ModalContainer,
    ModalMovieDetail,
  },
};
</script>

<style lang="scss" scoped>
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

@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
  }
}
</style>
