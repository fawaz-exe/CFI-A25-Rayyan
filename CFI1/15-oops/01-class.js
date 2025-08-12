//OOPS- Object Oriented Program
// class: we can store anything in class and use it later
//constructor: 



class User{
    constructor(Username,Email){
        this.User = Username;
        this.Email = Email;
    }


    printUser(){
        console.log(this.User);
    }
    printEmail(){
        console.log(this.Email)
    }
}
const rayyan = new User('rayyan_24')
const ayyan = new User('ayyan')
const khan = new User('khan@gmail.com')


rayyan.printUser();
khan.printEmail();