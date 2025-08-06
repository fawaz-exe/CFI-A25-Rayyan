import matrixInput from "./02-Input-matrix.js";
import printMatrix from "./03-print-Matrix.js";

function main(){
    const matrix = matrixInput();
    const primes = [];
    printMatrix(matrix, 'IS PRIME or NOT: ');
    for(let i = 0; i<matrix.length;i++){
        for(let j = 0; j<matrix[i].length;j++){
            if(isPrime(matrix[i][j])){
                primes.push(matrix[i][j]);
            }
        }   
    }
    console.log(primes);
}


function isPrime(num){
    if(num <=  1)
        return false;
    let factors = 0;
    for(let i = 2; i<num;i++){
        if(num % i ==0){
            factors++;
            break;
        }
    }
    return factors == 0 ? true : false;
}

main();