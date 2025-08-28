const arr = [12, 6,7,23,1, 101, 45, 34, 5, 6, 7, 8, 923, 2323, 94];

const result = arr.map((ele)=>{
    return ele * 2;
});

// .map() by default returns the output in a new array.

console.log(result);
console.log(arr);