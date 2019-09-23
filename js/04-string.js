/*
 * 在之前的常量中就了解了一些：数字、字符串、布尔;
 * 变量学习中还接触到了 undefined;
 * 其实还有一些其他的类型：null, NaN;
 */

/*
 * string 字符串类型
 * 输入输出的一般都是字符串类型，所以了解如何转换它还是比较重要的。
 * 
 * 学习：
 *      1. 将Number类型转换为字符串类型
 *      2. 将Boolean类型转换为字符串类型
 *      3. 将undefined类型转换为字符串类型
 *      4. 将null类型转换为字符串类型
 * 
 * 在JavaScript中如果想将以上的四种基本数据类型转换为字符串类型, 常用的方法有三种
 *      1. 对于Number类型和Boolean类型来说, 可以通过 变量名称.toString()的方式来转换
 *      2. 可以通过String(常量or变量);转换为字符串
 *      3. 还可以通过 变量or常量 + "" / 变量or常量 + ''转换为字符串
 *      
 *      !!! 不能使用常量直接调用toString方法, 因为常量是不能改变的
 *      变量名称.toString是对拷贝的数据进行转换, 所以不会影响到原有的数据
 * 
 *      第三种方法相当于调用了 变量名称.toString()
 *      !!! undefined 和 null 没有 .toString() 方法
 */

let num = 666;
console.log(`String(num) = ${String(num)}`);                    // 666
console.log(`typeof String(num) = ${typeof String(num)}`);      // string
console.log(`num.toString() = ${num.toString()}`);              // 666
console.log(`typeof num.toString() = ${typeof num.toString()}`);// string
console.log(`num = ${num}`);                                    // 666
console.log(`typeof num = ${typeof num}\n`);                      // number
// 变量名称.toString() 方法并没有改变原来变量的 类型和值

let undef;      // undefined 没有 .toString() 方法       
console.log(`String(undef) = ${String(undef)}`);                // undefined
console.log(`typeof String(undef) = ${typeof String(undef)}`);  // string
console.log(`undef = ${undef}`);                                // undefined
console.log(`typeof undef = ${typeof undef}\n`);                  // number

let nullt = null;        // null 没有 .toString() 方法
console.log(`String(nullt) = ${String(nullt)}`);                // null
console.log(`typeof String(nullt) = ${typeof String(nullt)}`);  // string
console.log(`nullt = ${nullt}`);                                // null
console.log(`typeof nullt = ${typeof nullt}\n`);                  // object

let nan = NaN;  // 数字的一种，下面会学到
console.log(`String(nan) = ${String(nan)}`);                // NaN
console.log(`typeof String(nan) = ${typeof String(nan)}`);  // string
console.log(`nan = ${nan}`);                                // NaN
console.log(`typeof nan = ${typeof nan}\n`);                  // number

