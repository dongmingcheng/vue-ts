import App from './App.vue'

// 导入自定义布局
import ElContainer from './components/container'

const app = createApp(App)
app.use(ElContainer)
    .mount('#app')