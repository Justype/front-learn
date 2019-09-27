/*
在 ES6 之后，才出现了 class关键字。

在我看来，JS的面对对象，与其他语言不一样，不过在ES6之后语法就很相似了
首先来了解一下一开始JS的面对对象吧
    JS 的对象都来源于 Object
*/



function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(){
    console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
}

let p1 = new Person(`Ziyue`, 20);

p1.say();

function Student(name, age, score){
    Person.call(this, name, age);
    this.score = score;
}

Student.prototype.say = function(){
    console.log(`My name is ${this.name}. I'm ${this.age} years old. My grade is ${this.score}`);
}

let s1 = new Student(`Cheng`, 21, 85);
s1.say();