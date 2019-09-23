/*
 * number 数字类型
 * 整数，小数，NaN(not a number)
 * 
 * 转换方法
 *  1. 通过Number(常量or变量);方式来转换
 *  2. 还可以通过数学运算中的+号和-号来转换  // 相当于调用 Number()
 *  3. 还可以通过parseInt(需要转换的字符串)/parseFloat(需要转换的字符串)
 * 
 */

// Number();
// 1. 将String类型转换为数值类型
    // 空字符串 / false / null转换之后都是0
    // 字符串中不仅仅是数字 / undefined转换之后是NaN
    // 其它的正常转换

// 如果字符串中都是数值, 那么就正常转换
console.log(`Number('123') = ${Number('123')}`);                // 123
console.log(`Number('1.23') = ${Number('1.23')}`);              // 1.23

// 如果字符串是一个空串"" / "   ", 那么转换之后是0
console.log(`Number('') = ${Number('')}`);                      // 0
console.log(`Number('   ') = ${Number('   ')}`);                // 0

// 如果字符串中不仅仅是数字, 那么转换之后是NaN
console.log(`Number('Justype') = ${Number('Justype')}`);        // NaN
console.log(`Number('Justype123') = ${Number('Justype123')}`);  // NaN
console.log(`Number('123Justype') = ${Number('123Justype')}`);  // NaN

// 2. 将Boolean类型转换为数值类型
// true  转换之后是 1
console.log(`Number(true) = ${Number(true)}`);                  // 1
// false 转换之后是 0
console.log(`Number(false) = ${Number(false)}`);                // 0

// 3. 将undefined类型转换为数值类型  -- 转换之后是NaN
console.log(`Number(undefined) = ${Number(undefined)}`);        // NaN

// 4. 将null类型转换为数值类型   -- 转换之后是0
console.log(`Number(null) = ${Number(null)}`);                  // 0

// parseInt()
// 只要不是数字开头，全部都是 NaN  !!! parseInt/parseFloat都会将传入的数据当做字符串来处理
// 直到不是数字的部分停止
console.log(`parseInt('123') = ${parseInt('123')}`);                // 123
console.log(`parseInt('1.23') = ${parseInt('1.23')}`);              // 1
console.log(`parseInt('1.89') = ${parseInt('1.89')}`);              // 1

console.log(`parseInt('') = ${parseInt('')}`);                      // NaN
console.log(`parseInt('   ') = ${parseInt('   ')}`);                // NaN

console.log(`parseInt('Justype') = ${parseInt('Justype')}`);        // NaN
console.log(`parseInt('Justype123') = ${parseInt('Justype123')}`);  // NaN
console.log(`parseInt('123Justype') = ${parseInt('123Justype')}`);  // 123

console.log(`parseInt(true) = ${parseInt(true)}`);   
console.log(`parseInt(false) = ${parseInt(false)}`);                // NaN

console.log(`parseInt(undefined) = ${parseInt(undefined)}`);        // NaN

console.log(`parseInt(null) = ${parseInt(null)}`);                  // NaN

// parseFloat();
// 只要不是数字开头，全部都是 NaN
// 直到不是小数的部分停止，第二个小数点后停止
console.log(`parseFloat('123') = ${parseFloat('123')}`);                // 123
console.log(`parseFloat('1.23') = ${parseFloat('1.23')}`);              // 1.23
console.log(`parseFloat('1.89.12') = ${parseFloat('1.89.12')}`);        // 1.89

console.log(`parseFloat('') = ${parseFloat('')}`);                      // NaN
console.log(`parseFloat('   ') = ${parseFloat('   ')}`);                // NaN

console.log(`parseFloat('Justype') = ${parseFloat('Justype')}`);        // NaN
console.log(`parseFloat('Justype123') = ${parseFloat('Justype123')}`);  // NaN
console.log(`parseFloat('123Justype') = ${parseFloat('123Justype')}`);  // 123
console.log(`parseFloat('1.23Justype') = ${parseFloat('1.23Justype')}`);// 1.23

console.log(`parseFloat(true) = ${parseFloat(true)}`);                  // NaN
console.log(`parseFloat(false) = ${parseFloat(false)}`);                // NaN

console.log(`parseFloat(undefined) = ${parseFloat(undefined)}`);        // NaN

console.log(`parseFloat(null) = ${parseFloat(null)}`);                  // NaN

// + 字符串;
// 相当于调用了 Number(字符串);
console.log(`+'123' = ${+'123'}`);                  // 123
console.log(`+'1.23' = ${+'1.23'}`);                // 1.23
console.log(`-'1.23' = ${-'1.23'}`);                // -1.23
console.log(`+'1.89.12' = ${+'1.89.12'}`);          // NaN

console.log(`+'' = ${+''}`);                        // 0
console.log(`+'   ' = ${+'   '}`);                  // 0

console.log(`+'Justype' = ${+'Justype'}`);          // NaN
console.log(`+'Justype123' = ${+'Justype123'}`);    // NaN
console.log(`+'123Justype' = ${+'123Justype'}`);    // NaN
console.log(`+'1.23Justype' = ${+'1.23Justype'}`);  // NaN

console.log(`+true = ${+true}`);                    // 1
console.log(`+false = ${+false}`);                  // 0

console.log(`+undefined = ${+undefined}`);          // NaN

console.log(`+null = ${+null}`);                    // 0