#BFC
- 块级格式化上下文
    + 创建一个独立的空间，让空间里的子元素与空间外的子元素互相独立，不影响彼此
- 怎么触发BFC
    + overflow:hidden
    + displiay: inline-block
    + position: fixed
    + positon: absolute
    + display: flex
- 应用场景
    + 父盒子没有被撑开，可以用BFC使子元素清除浮动
    + BFC外部元素与内部元素margin重叠，可以使用BFC清除影响