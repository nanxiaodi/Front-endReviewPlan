# typescript

### enmu（枚举）

- 数字枚举
```
enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Days.Sun === 0) // true
console.log(Days[0] === 'Sun')
```
- 字符串枚举
```
enum Direction {
    Right = 'Right',
    Left = 'Left',
    Up = 'Up',
    Right = 'Right'
}

console.log(Direction.Right) // Right
```
- 特征
    - 就是一个对象用于所有可能的取值的聚合
    - 也为了对应的数据灵活
    - 
