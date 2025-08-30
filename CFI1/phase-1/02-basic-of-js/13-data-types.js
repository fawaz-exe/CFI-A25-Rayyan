var readlineSync = require("readline-sync");

var profile = {
    fname: readlineSync.question('Enter your first name:'),
    lname:readlineSync.question('Enter your last name:'),
    age: readlineSync.questionInt('Enter your age:'),
    maritalStatus: readlineSync.keyInYN('Enter your MArtial Status:'),
    address: {
        home: readlineSync.question('Enter your home addr:'),
        work: readlineSync.question('Enter your home addr:'),
        remote: readlineSync.question('Enter your home addr:')
    }
}

// console.log(profile);
console.log(Object.keys(profile.address));
console.log(profile.age);
console.log(Object.values(profile));
console.log(profile.address.home);