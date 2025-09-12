class Person{

    // class is a blueprint creating an object.
    // constructor() => just like the keyword it constructs the properties for the object.
    // Class cannot hold a value in the memory. Its just a blueprint (prototype)

    constructor(name, age, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.hobby = [];
    }

    printName(){
        console.log({
            name: this.name,
            age: this.age,
            email: this.email,
            hobby: this.hobby
        })
    }

    insertHobby(hobby){
        this.hobby.push(hobby);
    }

}


/**
 * What is 'this' keyword in class?
 * 
 * => this keyword will refer current object key to the constructor parameters.
 *  You can use this.something to access a variable inside class.
 *  You use the parameter area to create a object value.
 * 
 * Q. What is the difference between a method and function?
 * 
 * => Methods belong to class, function can be used anytime.
 * => Methods need not need any intialization inside class.
 * => is constructor a method or a function? => its a special function/method
 * 
 * => .prototype() was used before ES6 in ES5 based classes.
 * 
 * => Does class return anything? No.
 * 
 * Whenever we create a new object its a called Instance or Instantiation.
 * 
 * 
 * 
 */

const anas = new Person('Anas Hussain',21,'anas@code.in','098098');
const ayaan = new Person('Khader Ayaan', 24, 'khaderayaan@gmail.com',"0923840923");
const alisha = new Person();

alisha.name = 'Alisha Shaikh';
alisha.email = 'alisha@github.com';
alisha.insertHobby('Coding');
console.log(alisha);

anas.printName();
anas.insertHobby('Padna');
anas.insertHobby('Travelling');
anas.insertHobby('Gaming');

anas.printName();

ayaan.printName();
ayaan.insertHobby('Reading');
ayaan.insertHobby('Football');
ayaan.printName();

console.log(anas.hobby);


// module.exports = Person; // es5 syntax to export a class/function