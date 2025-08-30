/**
 * Print the numbers from 1 to 100 inclusive, each on their own line.

If, however, the number is a multiple of three then print Fizz instead, and if the number is a multiple of five then print Buzz.

If multiple conditions hold true then all replacements should be printed, for example 15 should print FizzBuzz.
 */

// for(i=0;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log('fizzbuzz');
//     } else if (i%5==0) {
//         console.log('buzz')
//     } else if(i%3==0){
//         console.log('fizz')
//     } else{
//         console.log(i)
//     }
// } 


for(i=0;i<=100;i++){
    if(i%5==0 && i%3==0){
        console.log('fizzbuzz')
    } else if(i%2==0 && i%7==0){
        console.log('foobar')
    }else if(i%2==0){
        console.log('Foo')
    } else if(i%3==0){
        console.log('fizz')
    } else if(i%5==0){
        console.log('buzz')
    } else if(i%7==0){
        console.log('Bar')
    } else {
        console.log(i)
    }
}