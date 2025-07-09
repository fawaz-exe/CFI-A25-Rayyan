
// 1 2
// 3 4

/**
 *  1   2   3
 *  4    5   6
 *  7    8   9
 */

import matrixInput from "./02-input-matrix.js";

function printMatrix(m, nameOfMatrix){
    // m = matrixInput();
    console.log(`${nameOfMatrix} :`);
    for(let i = 0; i<m.length;i++){
        console.log(m[i].join(' '));
    }
    return m;
}

export default printMatrix;

// printMatrix();