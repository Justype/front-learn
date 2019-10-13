/*
Array
- 数组就是用来存储一组数据的
- 数组是引用类型

定义：
1. 空的数组
let 变量名 = new Array();
let 变量名 = [];

2. 设定长度的
let 变量名 = new Array(长度:number);

3. 有内容的
let 变量名 = new Array(data1, data2, ...);
let 变量名 = [data1, data2, ...];

调用：  量名[索引号];       // 从0开始
存储：  变量名[索引号] = 数据;

不同：
**JS中一个数组可以存储不同的类型。**

*/

let get = () => {
    // 数组遍历，依次取出所有数据
    let arr = [`Justype`, 20, 2019, 10];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // 数组解构赋值 ES6

    // 完全解构：元素必需一一对应
    // let [a, b, c, d, e] = arr;
    // console.log(`a=${a}`);
    // console.log(`b=${b}`);
    // console.log(`c=${c}`);
    // console.log(`d=${d}`);
    // console.log(`e=${e}`);

    // 可以预赋值
    // let [a, b, c, d, e=666] = arr;
    // console.log(`a=${a}`);
    // console.log(`b=${b}`);
    // console.log(`c=${c}`);
    // console.log(`d=${d}`);
    // console.log(`e=${e}`);

    // 少了剩下的不取出
    let [a, b, c] = arr;
    console.log(`a=${a}`);
    console.log(`b=${b}`);
    console.log(`c=${c}`);

    // 扩展运算符 ...变量名  ES6
    // 必需写到最后
    [a, ...b] = arr;
    console.log(`a=${a}`);
    console.log(`b=${b}`);

}


let edit = () => {
    let arrm = [1, 2, 3, 4, 5];

    // splice();
    // 参数1:开始的位置
    // 参数2:替换/删除 元素的数目
    // * 参数3开始:替换的内容 （数目可以不相等）
    let a = arrm.splice(1, 3, `a`, `b`);
    console.log(arrm);
    console.log(a);
    
    // push(); 在数组最后添加元素
    arrm.push(1, 2);
    console.log(arrm);

    // unshift(); 在数组最前面添加元素
    arrm.unshift('a', 'b');
    console.log(arrm);

    // pop(); 取出最后的一个元素 （会删除）
    console.log(arrm.pop());
    console.log(arrm);
    
    // shift(); 取出第一个元素 （会删除）
    console.log(arrm.shift());
    console.log(arrm);

    // concat(数组); 结合两个数组并返回
    let arr = [1,2];
    console.log(arrm.concat(arr));
    // 或者使用解构赋值
    let arr2 = [...arr, ...arrm];
    console.log(arr2);
    
    // reverse(); 反转，会修改原本的数组
    console.log(arrm.reverse());
    console.log(arrm);
    
}

let output = ()=>{
    let arro = [1,2,3,4,5];
    // 作为字符串输出
    console.log(arro.toString());
    // 以指定方式连接
    console.log(arro.join('+'));
    
    // slice(起始位置, 结束位置); 不包含结束位置
    console.log(arro.slice(1,4));
    
    // 查找
    // .indexOf() 查找 返回第一个
    // 找不到返回 -1
    // 参数1:查找的元素
    // * 参数2：开始查找的位置
    console.log(arro.indexOf(3));

    // .lastIndexOf() 向前找
    // 参数1:查找的元素
    // * 参数2：开始查找的位置

    // .includes();
    console.log(arro.includes(3));
    
}

// get();
// edit();
output();