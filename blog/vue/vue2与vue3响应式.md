# vue2响应式
- 当vue实例被创建的时候,会用Object.defineproperty遍历data下的属性,如果遇到属性还是一个对象,继续递归遍历(因为属性是一个对象的话,在改变属性的值的时候,无法被set监听到),将属性劫持,getter/setter
- 每个组件都有一个watcher(观察者),当setter监听到属性变化的时候,通知watcher(观察者)重新计算,watcher(观察者)会自动触发并且通过diff算法生成新的虚拟dom,render当前组件

### vue2响应式的缺点
- Object.defineproperty可以通过监听数组的下标修改数组的操作
    - vue2并没有这么做,因为性能和收益不能成正比,并且也无法监听到数组的原生方法
    - vue2是重新定义了数组的原型对象,将数组的pop(删尾),shift(删头),unshift(插入头),push(插入尾),splice(拼接),sort(排序),reverse(反转)的方法进行了重写
- Object.defineproperty只能监听属性,所以要对每个属性进行遍历,如果这个属性是对象,需要在进行深度遍历
- 因为Object.defineproperty无法监听对象本身,需要遍历属性,那么后面新增的属性,便无法监听,只能用vue给的set方法新增属性


### vue3响应式
- vue3使用proxy和reflect进行数据的监听与复制,因为es6proxy的新特性,是代理对象本身,就不用每个属性都进行遍历,监听到数据的变化,再遍历到要改变的数据,这样性能就优化了很多
- proxy代理对象本身,所以新增的属性也可以被监听到,就不需要专门的set方法就行重新监听了
