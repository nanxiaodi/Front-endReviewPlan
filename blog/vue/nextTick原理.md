# nextTick
- 将修改dom的操作都放在一个队列里，等修改dom的操作执行完毕后，从队列里调用操作一次性修改dom,队列里的操作执行完毕后，执行回调，将nextTick改造成微任务，执行回调
