/**
 * 这是一个全局状态管理模板示例，文件名导出名请以use开头谢谢
 */
import { defineStore } from 'pinia'
import { storeName } from '../storeName'

export const useExample = defineStore(storeName.SHOW_EXAMPLE, {
  state: () => ({
    name: ''
  }),
  actions: {},
  getters: {}
})
