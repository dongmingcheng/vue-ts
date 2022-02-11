import { InjectionKey } from "vue";
import { Rules, Values } from "async-validator";

// 定义传入数据接口
export interface FormData {
    // Record<S,T> ts的高级接口定义方式
    model: Record<string, unknown>
    rules?:Rules
}

// 定义form-item 的接口,主要用于数据校验
export interface FormItem {
    validate: () => Promise<Values>
}

export type FormType = {
    validate: (cb: (isValid: boolean) => void) => void
}

export const key: InjectionKey<FormData> = Symbol('form-data')