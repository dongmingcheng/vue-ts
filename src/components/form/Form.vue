<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script setup lang="ts" name="ElForm">
import {PropType} from 'vue'
import { Rules } from 'async-validator'

import { FormItem,key } from './type'
import { emitter } from '../../emitter'

// PropType自动推断类型,确保传入类型和Rules的类型一致
const props = defineProps({
    model:{type:Object, required:true},
    rules:{type:Object as PropType<Rules>, required:false, default:undefined}
})

// 将数据传递到所有的子组件
provide(key,{
    model:props.model,
    rules:props.rules
})

// 定义一个集合，这里是所有子组件的校验
const items = ref<FormItem[]>([])

emitter.on('addFormItem', (item) => {
  items.value.push(item)
})

const validate = (cb: (isValid: boolean) => void) => {
  const tasks = items.value.map( item => item.validate())
  Promise.all(tasks).then(() => {cb(true)}).catch(() => {cb(false)})
}

defineExpose({validate})


</script>