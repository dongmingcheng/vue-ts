<template>
    <div class="el-form">
        <slot />
    </div>

</template>

<script setup lang="ts" name="ElForm">
import {PropType} from 'vue'
import { Rules } from 'async-validator'

import { FormItem,key } from './type';

// PropType自动推断类型,确保传入类型和Rules的类型一致
const props = defineProps({
    model:{type:Object, required:true},
    rules:{type:Object as PropType<Rules>}
})

// 将数据传递到所有的子组件
provide(key,{
    model:props.model,
    rules:props.rules
})

// 定义一个集合，这里是所有子组件的校验
const items = ref<FormItem[]>([])



</script>