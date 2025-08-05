// 1   2        3   4
// 3   4        5   6

import matrixInput from "./02-input-matrix.js";
import printMatrix from "./03-print-matrix.js";

function matrixAddition(){
    const matrixA = matrixInput();
    const matrixB = matrixInput();

    // console.log('Matrix A : ',matrixA);
    // console.log('Matrix B : ',matrixB);

    printMatrix(matrixA, 'Matrix A');
    printMatrix(matrixB, 'Matrix B');


    if(matrixA.length == matrixB.length && matrixA[0].length == matrixB[0].length){
        const sum = new Array(matrixA.length);
        for(let i = 0; i < sum.length; i++){
            sum[i] = new Array(matrixA[0].length);
        }

        for(let i = 0; i<sum.length;i++){
            for (let j = 0; j<sum[i].length;j++){
                sum[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }

        printMatrix(sum, 'Sum');

    } else {
        console.log('Invalid Matrix');
    }
}

matrixAddition();