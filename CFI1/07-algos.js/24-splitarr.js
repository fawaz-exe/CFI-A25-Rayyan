// Split the array and add the first part to the end. There is a given array 
// and split it from a specified position, and move the first part of array add to the end.
// Write a function that accepts an array and index position to split as arguments.

// Input 1: [12, 10, 5, 6, 52, 36], index position to split = 2
// Output : [ 5, 6, 52, 36, 12, 10 ]

// Input 2: [, index position to split = 3
// Output : [ 6, 52, 36, 12, 10, 5 ]


function splitArray(arr,position){
    let firstpart = arr.slice(position, arr.length);
    let secondpart = arr.slice(0,position);
    let result = firstpart.concat(secondpart);
    console.log(result);
}
splitArray([12, 10, 5, 6, 52, 36],2)
