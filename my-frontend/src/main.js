
import { createApp } from 'vue'
import App from './App.vue'
import draggable from 'vuedraggable'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

export default{
    components:{
        draggable
    }
}
