<template>
  <header class="header">
    <HeaderContainer>
      <HeaderStart />
      <HeaderSearchBar ref="searchBar" :onSearchSubmit="onSearchSubmit" />
      <HeaderEnd />
    </HeaderContainer>
  </header>
</template>

<script>
import HeaderContainer from "./HeaderContainer.vue";
import HeaderStart from "./HeaderStart.vue";
import HeaderSearchBar from "./HeaderSearchBar.vue";
import HeaderEnd from "./HeaderEnd.vue";

export default {
  props: {
    onSearchSubmit: Function,
  },
  components: {
    HeaderContainer,
    HeaderStart,
    HeaderSearchBar,
    HeaderEnd,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: block;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 60px;
  background-color: #4299e1;
  box-shadow: 0px 0px 20px 0px #00000040;
}
</style>
