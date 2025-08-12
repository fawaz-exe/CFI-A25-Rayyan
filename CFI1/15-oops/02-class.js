class person{
    constructor(name, age, email, password){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
         this.hobby = {};

    }
    printName(){
        console.log({
            name: this.name,
            age: this.age,
            email: this.email,
            password: this.password,
            hobby: this.hobby,
         })
         insertHobby(hobby)
        
    }
}

const Rayyan = new person('Rayyan', 18, 'khan182007@gmail.com', 'rayyankhan');