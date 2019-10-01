/*
函数是专门用于封装代码的, 是一段可以随时被反复执行的代码块

函数格式
    function 函数名称(形参列表){
        被封装的代码;
    }

匿名函数
    function(形参列表){
        被封装的代码;
    }
    (形参列表)=>{
        被封装的代码;
    }
这两种方式略有区别，在对象的时候再提及。

注意：
1. 没有形参的函数，返回值可以没有
2. 函数没有通过return明确返回值, 默认返回undefined


*/

// 特殊的函数，递归（调用自身）

function fibo(i){
    if(i===0)
        return 0;
    else if(i===1 || i===2)
        return 1;
    else if(i>2)
        return fibo(i-1) + fibo(i-2);
    else
        return -1;
}

// fibo(50);   // 调用函数太多，性能太低，无法运行
fibo(25);
