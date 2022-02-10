<template>
  <footer
    class="el-aside"
    :style="{width}"
  >
    <slot />
  </footer>
</template>

<script setup lang="ts" name="ElAside">
import { withDefaults } from 'vue'

interface Props {
    width?: string
}

withDefaults(defineProps<Props>(),{
    width: '300px'
})

</script>

<style lang="scss">
@import '../styles/mixin.scss';
@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}

</style>