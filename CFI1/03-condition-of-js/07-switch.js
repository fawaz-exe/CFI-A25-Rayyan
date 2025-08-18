// /**
//  * Create a program where you take user role
//  * and return user priviliges for that role
//  * Roles: admin, sub-admin, user, teacher
//  * Admin - Get Full Access
//  * Sub-Admin - Gets Access to delete/create courses
//  * Teacher - Gets access to create/delete tests
//  * User - Gets access to only consume the content.
//  */

var readline = require('readline-sync');

var role = readline.question("Whats your role? : ");

// if(role == "admin"){
//     console.log('Get Full Access');
// } else if(role == 'sub-admin'){
//     console.log('Gets Access to delete/create courses');
// } else if (role == 'teacher'){
//     console.log('Gets access to create/delete tests')
// } else if (role == 'user'){
//     console.log('Gets access to only consume the content.')
// } else {
//     console.log('Guest / Trial Account');
// }

switch(role){
    case "admin":
        console.log('Get Full Access');
        break;
    case "sub-admin":
        console.log('Gets Access to delete/create courses');
        break;
    case 'teacher':
        console.log('Gets access to create/delete tests');
        break;
    case 'user':
        console.log('Content Only');
        break;
    default:
        console.log('Trial user/ Guest Account');
        break;
}

// Assginment
// Create a calculator app using switch

/**
 * Create a simple calculator for solving arithmetics
 * + - / *
 * Inout two numbers , return the output with the operand and solve the operation;
 * 2 + 3 = 5;
 * 3 Inputs 
 * CLI Menu
 */