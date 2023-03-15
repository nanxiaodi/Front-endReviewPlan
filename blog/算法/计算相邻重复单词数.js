// 删除字符串中的所有相邻重复项
/*
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，
这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，
其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
*/

const word = "abbaca"

// var removeDuplicates = function (s) {
//     let stack = [];
//     let str = '';
//     for (v of s) {
//         let prve = stack.pop();
//         if (prve != v) {
//             stack.push(prve)
//             stack.push(v)
//         }
//     }
//     str = stack.join('');
//     return str;
// };

// removeDuplicates(word)

// 反转字符串
// function reserveStr(str) {
//     var newStr = ''
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]
//     }
//     return newStr
// }

// var str = 'hello'
// console.log(reserveStr(str))

// 判断数组是否有重复元素
// function isUniqueArr(arr) {
//     let isUniqueArr = false
//     for (let i = 0; i < arr.length; i++) {
//         var newArr = arr.slice(i+1,-1)
//         if (newArr.indexOf(arr[i]) > -1) {
//             return isUniqueArr = true
//         }
//     }
 
//     return false
// }

// var arr = [1,'2',3,4,5,6,7,8]
// console.log(isUniqueArr(arr))

// 判断数组最大值
function arrMax(arr) {
    let isUniqueArr = false
    for (let i = 0; i < arr.length; i++) {
        var newArr = arr.slice(i+1,-1)
        if (newArr.indexOf(arr[i]) > -1) {
            return isUniqueArr = true
        }
    }
 
    return false
}