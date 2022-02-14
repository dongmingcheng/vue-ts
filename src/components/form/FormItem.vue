<template>
  <div class="el-form-item">
    <label v-if="label">{{ label }}</label>
    <slot />
    <p v-if="error">
      {{error}}
    </p>
  </div>
</template>

<script setup lang="ts" name="ElFormItem">import Schema from 'async-validator';
import { emitter } from '../../emitter';
import { FormItem,key } from './type';



interface Props {
    label?: string
    prop?: string
}

const props = withDefaults(defineProps<Props>(), {
    label:'',
    prop:''
})

// 获取父组件的formData
const FormData = inject(key)

const error = ref('')


onMounted(() => {
  if(props.prop){
    emitter.on('validate', () => {
      validate()
    })
    emitter.emit('addFormItem', o)
  }
})


const validate = () => {
  if(FormData?.rules === undefined){
    return Promise.resolve({result: true})
  }
  const rules = FormData.rules[props.prop]
  const value = FormData.model[props.prop]
  const schema = new Schema( {[props.prop]:rules} )

  return schema.validate({[props.prop]: value}, (errors) => {
    error.value = errors ? errors[0].message || '校验错误' : ''
  })
}

const o: FormItem = {
  validate
}

// 导出o
defineExpose(o)
</script>