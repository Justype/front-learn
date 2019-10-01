/*
到 ES6 之后，增加了 class 关键字

class 和 extends 简化了JS类的定义

*/

class Person{
    // 构造函数
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    type = "human";
    say(){
        console.log(`My name is ${this.name}. And I'm ${this.age} years old.`);
    }
}

p1 = new Person(`chin`, 20);

p1.say();
console.log(p1);

class Student extends Person{
    constructor(name, age, score){
        super(name, age);
        this.score = score;
    }
    say(){
        console.log(`My name is ${this.name}. And I'm ${this.age} years old. My score is ${this.score}.`);
    }
}

s1 = new Student(`Ziyue`, 20, 85);
s1.say();
console.log(s1);



Person.type = 'person';
Person.log = function(){
    console.log(this.type);
}
console.log(Person.type);
console.log(Student.type);

Person.log();
Student.log();
// 在使用 extends 后，静态属性和方法也可以继承
