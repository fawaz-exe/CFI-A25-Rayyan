// Write an algorithm(Function) that receives an input string.
// Write an algorithm to Split the Input String into two strings based on even and odd indexes.
// Left padd '000' string and right pad with '111' string.
// Input 1 :
// code.in
// Output :
// 000cd.n111
// 000oei111
// Input 2:
// Hello there
// Output:
// 000Hlotee111
// 000el hr111


function splitString(input){
    let even = [];
    let odd = [];

    let leftPad = '000';
    let rightPad = '111';

    for(let i = 0; i<input.length;i++){
        if(i%2==0){
            even.push(input[i]);
        } else {
            odd.push(input[i]);
        }
    }
    let evenStr = leftPad + even.join("") + rightPad;
    let oddStr = leftPad + odd.join("") + rightPad;

    console.log(evenStr);
    console.log(oddStr);
}

splitString('code.in');