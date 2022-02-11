<template>
    <div class="el-form-item">
        <label v-if="label">{{label}}</label>
        <slot />
        <p></p>
    </div>

</template>

<script setup lang="ts" name="ElFormItem">

interface Props {
    label?: string
    prop?: string
}

const props = withDefaults(defineProps<Props>(), {
    label:'',
    prop:''
})

</script>