// var temp = '';

// for(let i = 1; i<=8; i++) {
//     temp += i;
//     console.log(temp)
// }

// var temp = '';

// for(let i = 9; i > 0; i--){
//     temp += i;
//     console.log(temp)
// }

// for(let j = 5; j>= 1; j--){
//     var temp = '';
// for(let i = 1; i <=j; i++){
//     temp+= i;
// }
// console.log(temp);

// }

// var temp = '';

// for(var i = 1; i<=5; i++){
//     var space = ' ';
//     temp += '8';
//     for(var j = 1; j<=5-i; j++){
//         space += ' ';
//     }
//     console.log(space + temp)
// }



// var temp = '';

// for(var i = 1; i<=5; i++){
//     var space = ' ';
//     temp += i;
//     for(var j = 1; j<=5-i; j++){
//         space += ' ';
//     }
//     console.log(space + temp)
// }
var temp = '';
let space = '';

for (var count = 9; count > 1; count--){
    temp = temp + count
    let num= temp * 9;
    let space = '';
    for(var j = 1; j<count; j++){
        space += ' ';
    }
    console.log(`${temp} * 9 + ${count - 2}${space} = ${num + (count - 2)}`)
}