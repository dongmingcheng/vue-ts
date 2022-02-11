import App from './App.vue'

// 导入自定义布局
import ElContainer from './components/container'

// 导入表单组件
import ElForm from './components/form'

const app = createApp(App)
app.use(ElContainer)
    .use(ElForm)
    .mount('#app')