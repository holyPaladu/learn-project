<script setup lang="ts">

</script>

<template>
  <div class="main-block"></div>
  <button class="button button--outline"></button>
</template>

<style scoped lang="scss">
.main-block {
  width: 100px;
  height: 100px;
  background-color : $error-color;
}
.button {
  padding: 12px 24px;
  border-radius: 4px;
  background: $primary-color;
  color: white;

  @include respond-to('md') {
    padding: 16px 32px;
  }

  &--outline {
    background: transparent;
    border: 2px solid $primary-color;
  }
}
</style>