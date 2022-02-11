<template>
    <div>
        <input class="el-input--inner" :value="modelValue" @input="onInput" />
    </div>

</template>

<script setup lang="ts" name="ElInput">

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
}

</script>