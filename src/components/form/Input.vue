<template>
  <div>
    <input
      class="el-input--inner"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
    >
  </div>
</template>

<script setup lang="ts" name="ElInput">
import { emitter } from '../../emitter'


// 实现双向绑定
defineProps<{
    modelValue:string
}>()

const emit = defineEmits<{
    (e: "update:model-value", value:string):void
}>()

const onInput = (e: Event) => {
    const input = e.target as HTMLInputElement
    emit('update:model-value', input.value)
    // 触发校验事件
    emitter.emit('validate')
}

const onBlur = () => {
    emitter.emit('validate')
}

</script>