<template>
  <article class="header__middle">
    <input
      class="header-search-input"
      type="text"
      placeholder="Search Movie"
      v-model="searchInputValue"
      @keyup.enter="onSearchSubmit"
    />
    <button class="header-search-button" @click="onSearchSubmit">GO</button>
  </article>
</template>

<script>
export default {
  name: "HeaderSearchBar",
  props: {
    onSearchSubmit: Function,
  },
};
</script>

<style lang="scss" scoped>
.header__middle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}

.header-search-input {
  width: 180px;
  height: 40px;
  border-radius: 36px 0 0 36px;
  border: 0;
}

.header-search-button {
  width: 42px;
  height: 42px;
  border-radius: 0 36px 36px 0;
  border: 0;
  background-color: #bee3f8;
}

@media screen and (max-width: 768px) {
  .header__middle {
    width: 70%;
  }
}
</style>
