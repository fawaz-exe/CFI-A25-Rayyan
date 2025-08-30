const Person = require('./02-class.js'); // es5 syntax to import

class Instructor extends Person {
    constructor(name, age, email, password, exp){
        super(name, age,email,password,exp); // Super takes all properties from the parent class.
        this.exp = exp;
    }
}

const suhail = new Instructor('Suhail', 22,'suhail@code.in','09809','2y');
console.log(suhail);
suhail.insertHobby('Coding');
console.log(suhail);