<template>
  <article class="modal-container">
    <slot></slot>
  </article>
</template>

<script></script>

<style lang="scss" scoped>
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
</style>
