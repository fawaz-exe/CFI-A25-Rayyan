// Write an algorithm that tells me the time 15 mins later.
// Write an algorithm that tells me the time 5 hours backward.

let future = +new Date() + (15 * 60 * 1000);
let futureTime = new Date(future);
console.log(futureTime.toString());

let backward = +new Date() - (5 * 60 * 60 * 1000);
let backTime = new Date(backward);
console.log(backTime.toString());