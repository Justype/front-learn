/*
JS的流程控制语句与其他的语言相似

分支语句
    if-else if-else
        与其他语言相似
    switch(){case xxx: break; default: break;}
        case判断的是===
        break; 不是必须，不添加，继续向下执行
        default: 可以放到任意位置，不是必须
循环
    while(){}
    do{}while()
    for(;;){}
        都是类似的
        break; continue;
*/

// 分支语句 if-else if-else
// if
let x = 5;
if(x<0){
    console.log('x<0');
}else if(x>0){
    console.log('x>0');
}else{
    console.log('x=0');
}


