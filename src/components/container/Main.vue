<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script lang="ts">
export default{
  name:'ElMain'
}
</script>

<!-- 注意,若script中无内容，会被忽略 -->
<!-- <script setup lang="ts" name="el-main"></script> -->

<style lang="scss" scoped>
@import '../styles/mixin.scss';
@include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
}
</style>