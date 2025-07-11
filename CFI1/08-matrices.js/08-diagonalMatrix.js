import matrixInput from "./02-Input-matrix.js";

function main(){
    let matrix = matrixInput();
    
    if(matrix.length !== matrix[0].length)
        return console.log('Input is correct');

    let leftD = [];
    let rightD = [];

    for(let i = 0, j = matrix.length - 1; i<matrix.length, j>=0;i++,j--){
        leftD.push(matrix[i][i]);
        rightD.push(matrix[i][j]);
    }

    console.log(leftD, rightD);
    
}

main();


