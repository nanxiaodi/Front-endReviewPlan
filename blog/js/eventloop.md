# 事件循环
## 事件循环执行顺序
---
- js任务分为同步任务和异步任务，，浏览器在执行js任务的时候，先执行同步任务，再执行异步任务，异步任务又分为macro task和micro task两个不同的任务类型，miroTask又优先于macroTask，在同步任务执行时，遇到microtask，就放到microtaskQueen,遇到macrotask就放到macrotaskQueen中，等到同步任务执行完毕后，如果microtaskQueen有任务，就先执行microtask的任务，如果没有了，则执行macrotask，在macrotask执行中，包裹的还有microtask，则继续放入一个新的microtaskQueen中，再本次macrotask执行完成后，再次优先于microtask

### macro task(宏任务)
- setTimeout、setInterval、setImmediate(node环境下)、I/O

### micro task(微任务)
- promise、Process.nextTick(node环境)、MutationObserver
