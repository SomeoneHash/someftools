import {call} from './call'

export function bind(fn, obj, ...args) {
  // 返回一个新的函数
  return (...args2) => {
    // 调用原来的函数，且指定this为obj，参数列表由args和args2依次组成
    return call(fn, obj, ...args, ...args2)
  }
}