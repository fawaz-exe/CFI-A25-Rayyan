// E-Commerce Site (Login)
// Email,  Gmail, Facebook
// Authenticated, Please confirm your login details.

// Login Pages
// Check if you are logging from one of these:
/**
 * Email
 * Facebook
 * Gmail
 * If any of login detail are available then Login Success otherwise register
 */
//  let email = false;
//  let facebook = false;
//  let gmail = true;

//  if(email || facebook || gmail){
//     console.log('Login Success!');
//  } else {
//     console.log('Login Denied, Please register');
//  }

// At the time of Checkout
/*
* Verify your email
* Verify your loginstatus
* Verify your cardInfo
then Checkout successful
otherwise Check your Email, Login, Cardinfo
*/

let email = true;
let loginStatus = false;
let cardInfo = true;

if (email && loginStatus && cardInfo){
    console.log('You are allowed to make a purchase');
} else {
    console.log('Please verify your credentials!');
}