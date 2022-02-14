import mitt from 'mitt'

// 引入FromItem,作为事件回调返回参数类型
import { FormItem } from './components/form/type'

export type Events = {
    validate: undefined
    addFormItem: FormItem
}

export const emitter = mitt<Events>()
