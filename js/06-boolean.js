/*
 * boolean 类型
 *  true or false
 * 
 * 转换 Boolean(value?: any): boolean
 * 1.将String类型转换为布尔类型
 *  只要字符串中有内容都会转换为true, 只有字符串中没有内容才会转换为false
 * 
 * 2.将Number类型转换为布尔类型
 *  只有数值是0才会转换为false, 其它的都会转换为true
 *  如果是NaN也会转换为false
 * 
 * 3.将undefined类型转换为布尔类型
 *  undefined会转换为false
 * 
 * 4.将null类型转换为布尔类型
 *  null会转换为false
 */

// string
console.log(`Boolean('Justype') = ${Boolean('Justype')}`);  // true
console.log(`Boolean('') = ${Boolean('')}`);        // false

// number
console.log(`Boolean(123) = ${Boolean(123)}`);      // true
console.log(`Boolean(1.23) = ${Boolean(1.23)}`);    // true
console.log(`Boolean(-123) = ${Boolean(-123)}`);    // true
console.log(`Boolean(0) = ${Boolean(0)}`);          // false

// undefined
console.log(`Boolean(undefined) = ${Boolean(undefined)}`);  // false

// null
console.log(`Boolean(null) = ${Boolean(null)}`);    // false
