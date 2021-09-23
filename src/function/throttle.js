/* 用来返回节流函数的工具函数 */
export function throttle(callback, delay) {
  let pre = 0 // 默认值不要是Data.now() ==> 第1次事件立即调用
  return function(event) { // 节流函数/真正的事件回调函数 this是发生事件的标签
      const current = Date.now()
      // 只有离上次调用callback的时间差大于delay
      if(current - pre > delay) {
        // 调用真正处理事件的函数，this是事件源，参数是event 
        callback.call(this, event)
        // 记录此次调用的时间
        pre = current
      }
    
  }
}