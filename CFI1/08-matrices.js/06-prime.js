import matrixInput from "./03-input-matrix";
import printMatrix from "./04-print-matrix";

function main(){
    const matrix = matrixInput();
    const primes = [];
    printMatrix(matrix, 'IS PRIME OR NOT');
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(isPrime(matric[i][j]))
                primes.push(matrix[i][j])
        }
    }
} console.log(primes);

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