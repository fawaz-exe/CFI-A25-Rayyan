// Formula for Discounted Price (%):
// Discounted Price = Listing Price - Selling Price / Listing Price * 100
// Input: LP: 3000 , SP: 700 Output: Percantage
var readline = require("readline-sync");

var listingPrice = readline.questionInt("Enter the listing price: ");
var sellingPrice = readline.questionInt("Enter your selling price: ");

var discount = Math.round((listingPrice - sellingPrice) / listingPrice * 100);
console.log("Discount:" ,discount + "%");