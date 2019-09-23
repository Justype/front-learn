/**
 * 学习变量：
 *  变量的 定义、获取、修改
 *  ES6变量的定义
 *  预解析
 *  命名规则
 */

// 定义一个变量
var num;
// 同时定义多个变量的格式
// 格式: var 变量名称1, 变量名称2, .... ;


// 从变量中获取存储的数据
console.log(num);   // undefined


// 赋值：往变量中存储数据，第一次赋值为初始化
num = 123;
console.log(num);   // 123

// 再次赋值，修改变量中存储的数据
num = 666;
console.log(num);   // 666


// ES6 定义变量
let num6 = num;
console.log(num6);

/**
 * ES6 定义方法与之前的不同:
 *      1. 之前的定义方法会有预解析
 *      2. ES6 let 不能重复定义变量
 *          let num2; let num2; //报错
 *          var num1; var num1; //不报错
 * 
 * 预解析：把变量的声明提升到最前面
 */

// 展示预解析

console.log(`preNum = ${preNum}`);      // preNum = undefined
var preNum = 66;
console.log(`"pre"Num = ${preNum}`);    // "pre"Num = 66

/**
 * 命名规则：
 *      1. 只能由26个英文字母的大小写、10个阿拉伯数字0~9、下划线_、美元符号$组成
 *      2. 区分大小写
 *      3. 数字不能开头
 *      4. 不可以使用关键字、保留字作为标识符
 * 
 * 建议驼峰命名：除类名小驼峰
 */
