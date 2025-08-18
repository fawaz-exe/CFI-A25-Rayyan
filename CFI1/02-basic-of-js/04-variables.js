// Algebra
// age = 19
// x=1, y=10

// Lets a create a signup page
// full name, email, password, age, whichCourse, isLoggedIn

// var, let, const

// camelCase

var firstName = "Anas"; // DataType = String
var lastName = "Hussain"; // DataType = "String"
var email = "anashussain1702@gmail.com";
const password = "29874289abdc";
var courseName = "Full Stack Product Development";
var age = 23; // DataType = Number
var isLoggedIn = true; // DataType = boolean

// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(password);
// console.log(courseName);
// console.log(age);
// console.log(isLoggedIn);

// console.log("Full Name:", firstName, lastName);
// console.log("Email:", email, password);
// console.log("Course Name: " + courseName);
// console.log("Age:", age);
// console.log("Login Success:", isLoggedIn);
// console.log("Data Type of Age :",typeof(age));
// console.log("Data Type of email :",typeof(email));
// console.log("Data Type of Login Status :",typeof(isLoggedIn));

console.log(`
    Full name of the user is: ${firstName + lastName}
    and his email is ${email}
    and uses the password ${password}
    has the age ${age} 
    is LoggedIn? ${isLoggedIn}

    He has opted the course ${courseName}
`);

// Variables Name

/**
 * Camel Case: camelCaseCasing *
 * snake case: full_name
 * kebab-case: full-name
 * FullName
 */

var a = 2, b = 3, c = 7;
console.log(10 + 7); // 17
// 10 and 7 are the operands
// + , -, *, / are the operators

console.log(a+c);
console.log(a+=(b+c)); // 12