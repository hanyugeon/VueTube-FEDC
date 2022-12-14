<template>
  <section class="movie-container">
    <slot></slot>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.movie-container {
  display: grid;
  place-items: center;
  max-width: 1280px;
  height: 100%;
  grid-template-columns: repeat(2, 0.8fr);
}

@media screen and (max-width: 768px) {
  .movie-container {
    grid-template-columns: repeat(1, 0.8fr);
  }
}
</style>
