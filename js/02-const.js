/**
 * 在学习变量之前，要了解一下常量，一般都是：
 *      变量名 = 常量
 * 常量表示一些固定不变的数据
 * 
 * 常量类型：
*/

// 1. 数字 number
// 整型常量其实就是正数, 在JavaScript中随便写一个数都是number
console.log(`typeof 123 = ${typeof 123}`);
console.log(`typeof 1.23 = ${typeof 1.23}`);


// 2. 字符串常量 string
//  字符串常量其实就是用单引号或者双引号括起来的内容, 我们就称之为字符串常量
console.log(`typeof 'a' = ${typeof 'a'}`);
console.log(`typeof 'Justype' = ${typeof 'Justype'}`);
console.log(`typeof "123" = ${typeof "123"}`);
console.log(`typeof "中文" = ${typeof "中文"}`);
// 注意点: 无论用单引号或者双引号括起来了多少个字符, 在JavaScript中都是字符串常量

// 3.布尔常量 boolean
// 在JavaScript中布尔常量只有两个取值, 真(true)或者假(false)
console.log(`typeof true = ${typeof true}`);
console.log(`typeof false = ${typeof false}`);

// 4. 自定义常量 --在ES6中新增的
// const 常量名称 = 常量取值;
const pi = 3.1415926535;
console.log(pi);
console.log(`typeof pi = ${pi}`);   // typeof pi = 3.1415926535

/**
 * 最后这个 const pi 的输出结果是我没有想到的，竟然是一开始赋的值。
 */
