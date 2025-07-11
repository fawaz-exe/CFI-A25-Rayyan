import matrixInput from "./02-Input-matrix.js";

function main(){
    let matrix = matrixInput();
    
    if(matrix.length !== matrix[0].length)
        return console.log('Input is correct');

    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0, j = matrix.length - 1; i<matrix.length, j>=0;i++,j--){
        leftSum += matrix[i][i];
        rightSum += matrix[i][j];
    }
    console.log(leftSum, rightSum);
    let difference = leftSum - rightSum;
    
    console.log(Math.abs(difference));
    
}

main();