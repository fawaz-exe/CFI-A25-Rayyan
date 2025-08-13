class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    describe(){
        return `${this.name} is ${this.age} years old.`
    }
}
class Bird extends Animal{
    fly(){
        return `${this.name} is flying!`
    }
}
class Fish extends Animal{
    swim(){
        return `${this.name} is swimming`
    }
}
let bird=new Bird("Tweety",2)
console.log(bird.describe())
console.log(bird.fly());

let fish=new Fish("Neo",1)
console.log(fish.describe())
console.log(fish.swim());