export function apply(fn, obj, args) {
  // 处理obj是undefined或者null的情况
  if(obj === undefined  || obj === null) {
    obj = window
  }
  // 给obj添加一个方法：temFn：this
  obj.temFn = fn
  // 调用obj的temFn方法,传入args参数，得到返回值
  const result = obj.temFn(...args)
  // 删除obj上的temFn
  delete obj.temFn
  // 返回方法的返回值
  return result
}