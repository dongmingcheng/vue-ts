<script setup lang="ts">
import { FormType } from './components/form/type'

const comp = ref('form')
const model = reactive({
  ruleName:''
})
const rules = reactive({
  ruleName:[
    {required:true, message:'请输入用户姓名'}
  ]
})

const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate( isValid => {
    if(isValid){
      console.log(model)
    }else{
      
    }
  })
}
</script>

<template>
  <div v-if="comp=='container'">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <hr>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          Aside
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <hr>
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
  <div v-if="comp == 'form'">
    表单测试
    <el-form
      ref="myForm"
      :model="model"
      :rules="rules"
    >
      <el-form-item
        label="姓名"
        prop="ruleName"
      >
        <el-input v-model="model.ruleName" />
      </el-form-item>
      <br>
      <el-form-item>
        <button
          @click="login"
        >
          登 录
        </button>
      </el-form-item>
    </el-form>
    {{ model.ruleName }}
  </div>
</template>

<style scoped>
body{
  width:1000px;
  margin:10px auto;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
