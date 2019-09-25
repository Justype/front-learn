/**
 * 包括各种运算符
 *  1. 算数运算符：+ - * / %
 *      a. 除以零 Infinity
 *      b. 以0取余 NaN
 *      c. 与字符串的运算会有很大不同，一般会合并，建议先转换
 *      d. 任何数与NaN计算，均为NaN
 *      e. 取余运算结果的正负性, 取决于被取余的数
 *  2. 赋值运算符
 *      = += -= *= /= %=
 *      let num1, num2;
 *      num1 = num2 = 3;
 *      由于赋值运算符的结合性是右结合性, 先将3赋值给num2, 然后再将num2中的值赋值给num1
 *  3. 自增，自减   ++ --
 *      ++var; // 先运算，再赋值
 *      var++; // 先赋值，再运算
 */

// 算数运算符
console.log('算数运算');
console.log(`5+2=${5+2}`);  //5+2=7
console.log(`5-2=${5-2}`);  //5-2=3
console.log(`5*2=${5*2}`);  //5*2=10
console.log(`5/2=${5/2}`);  //5/2=2.5
console.log(`5%2=${5%2}`);  //5%2=1     取余
console.log('');

console.log('!!!');
// 注意事项
// 除以零 Infinity
console.log(`5/0=${5/0}`);  //5/2=Infinity
// 以0取余 NaN
console.log(`5%0=${5%0}`);  //5/2=NaN

// 与字符串的运算 一般会合并，建议先转换
console.log('与字符串的运算 一般会合并，建议先转换');
console.log(`'123'+123=${'123'+123}`);  //'123'+123=123123
console.log(`'123'-123=${'123'+123}`);  //'123'-123=123123
console.log(`123+'123'=${123+'123'}`);  //123+'123'=123123
console.log(`123-'123'=${123-'123'}`);  //123-'123'=0
console.log('');

// 任何数与NaN计算，均为NaN
console.log('任何数与NaN计算，均为NaN');
console.log(`NaN+123=${NaN+123}`);  // NaN+123=NaN
console.log(`NaN-123=${NaN-123}`);  // NaN-123=NaN
console.log(`NaN*123=${NaN*123}`);  // NaN*123=NaN
console.log(`NaN/123=${NaN/123}`);  // NaN/123=NaN
console.log(`NaN%123=${NaN%123}`);  // NaN%123=NaN
console.log('');

// 赋值运算符
console.log('赋值运算符');
let num = 1;    // 这就是赋值
console.log(`let num=1; // num=${num}`);
num += 2;       // 除此之外还有 += -= *= /= %=
console.log(`num += 2; // num=${num}`);
console.log('');

// 自增，自减
let num2 = 0;
console.log(`num=${num}, num2=${num2}`);
num2 = num++;   // 先赋值，再运算
console.log(`num2 = num++; // 先赋值，再运算`);
console.log(`num=${num}, num2=${num2}`);
num2 = --num;   // 先运算，再赋值
console.log(`num2 = --num; // 先运算，再赋值`);
console.log(`num=${num}, num2=${num2}`);
console.log('');

