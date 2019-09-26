/*
包括各种运算符

1. 算数运算符：+ - * / %
    a. 除以零 Infinity
    b. 以0取余 NaN
    c. 与字符串的运算会有很大不同，一般会合并，建议先转换
    d. 任何数与NaN计算，均为NaN
    e. 取余运算结果的正负性, 取决于被取余的数
2. 赋值运算符
    = += -= *= /= %=
    let num1, num2;
    num1 = num2 = 3;
    由于赋值运算符的结合性是右结合性, 先将3赋值给num2, 然后再将num2中的值赋值给num1
3. 自增，自减   ++ --
    ++var; // 先运算，再赋值
    var++; // 先赋值，再运算
4. 关系运算符
    > < >= <= == != === !==
    a. 关系运算符返回 true 或 false
        如果关系成立, 就返回true, 如果关系不成立, 就返回false
    b. 数字比较
        对于非数值类型的数据, 会先转换成数值类型, 再进行判断
        任何数据和NaN进行比较, 返回值都是false
    c. == 与 ===
        == 会转换类型， === 不会
    d. 优先级
        关系运算符都是左结合性(从左至右的运算)
        关系运算符中 > < >= <= 的优先级高于 == != === !==
5. 逻辑运算符
    &&  与
    ||  或
    !   非
*/

// 将不同的例子封装到函数中
// 算数运算符
let cal = ()=>{
    console.log('算数运算');
    console.log(`5+2=${5 + 2}`);  //5+2=7
    console.log(`5-2=${5 - 2}`);  //5-2=3
    console.log(`5*2=${5 * 2}`);  //5*2=10
    console.log(`5/2=${5 / 2}`);  //5/2=2.5
    console.log(`5%2=${5 % 2}`);  //5%2=1     取余
    console.log('');

    console.log('!!!');
    // 注意事项
    // 除以零 Infinity
    console.log(`5/0=${5 / 0}`);  //5/2=Infinity
    // 以0取余 NaN
    console.log(`5%0=${5 % 0}`);  //5/2=NaN

    // 与字符串的运算 一般会合并，建议先转换
    console.log('与字符串的运算 一般会合并，建议先转换');
    console.log(`'123'+123=${'123' + 123}`);  //'123'+123=123123
    console.log(`'123'-123=${'123' + 123}`);  //'123'-123=123123
    console.log(`123+'123'=${123 + '123'}`);  //123+'123'=123123
    console.log(`123-'123'=${123 - '123'}`);  //123-'123'=0
    console.log('');

    // 任何数与NaN计算，均为NaN
    console.log('任何数与NaN计算，均为NaN');
    console.log(`NaN+123=${NaN + 123}`);  // NaN+123=NaN
    console.log(`NaN-123=${NaN - 123}`);  // NaN-123=NaN
    console.log(`NaN*123=${NaN * 123}`);  // NaN*123=NaN
    console.log(`NaN/123=${NaN / 123}`);  // NaN/123=NaN
    console.log(`NaN%123=${NaN % 123}`);  // NaN%123=NaN
    console.log('');
}

// 赋值运算符
let assign = ()=>{
    console.log('赋值运算符');
    let num = 1;    // 这就是赋值
    console.log(`let num=1; // num=${num}`);
    num += 2;       // 除此之外还有 += -= *= /= %=
    console.log(`num += 2; // num=${num}`);
    console.log('');
}

// 自增，自减
let selfCal = ()=>{
    let num2 = 0;
    console.log(`num=${num}, num2=${num2}`);
    num2 = num++;   // 先赋值，再运算
    console.log(`num2 = num++; // 先赋值，再运算`);
    console.log(`num=${num}, num2=${num2}`);
    num2 = --num;   // 先运算，再赋值
    console.log(`num2 = --num; // 先运算，再赋值`);
    console.log(`num=${num}, num2=${num2}`);
    console.log('');
}

// 关系运算符
let compare = ()=>{
    // 比较会发生类型转换
    console.log('比较会发生类型转换');
    console.log(`1>'123'=${1>'123'}`);
    console.log(`1<='123'=${1<='123'}`);
    console.log('');
    
    // 判断一个数是否为NaN: isNaN()
    console.log('判断一个数是否为NaN: isNaN()');
    console.log(`isNaN(Number('Justype'))=${isNaN(Number('Justype'))}`);
    console.log('');
    // 任何数与 NaN比较均为 false
    console.log('任何数与 NaN比较均为 false');
    console.log(`'Justype'>666=${'Justype'>666}`);  // false
    console.log(`NaN==NaN=${NaN==NaN}`);        // false
    console.log(`NaN===NaN=${NaN===NaN}`);      // false
    console.log('');
    
    // == 会转换类型， === 不会
    console.log('== 会转换类型， === 不会');
    console.log(`123=='123'=${123=='123'}`);    // true
    console.log(`123==='123'=${123==='123'}`);  // false
    console.log('');
    
}

let logic = ()=>{
    // && 逻辑 与
    console.log(`true&&true=${true&&true}`);
    console.log(`true&&false=${true&&false}`);
    console.log(`true&&true=${false&&true}`);
    console.log(`false&&false=${false&&false}`);
    console.log('');
    
    // || 逻辑 或
    console.log(`true||true=${true||true}`);
    console.log(`true||false=${true||false}`);
    console.log(`true||true=${false||true}`);
    console.log(`false||false=${false||false}`);
    console.log('');
    
    // !  非
    console.log(`!true=${!true}`);
    console.log(`!false=${!false}`);
    console.log('');
    
}

logic();
