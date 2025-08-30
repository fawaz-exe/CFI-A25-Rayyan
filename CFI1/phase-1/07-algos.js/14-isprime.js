const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67, 9]

function isPrime(num){
    let factor = 0;
    for(let i = 2; i<num; i++) {
        if(num % i == 0) {
            factor++
        }
    }

    return factor == 0 ? true : false;
}

console.log(isPrime(7))

function filterPrime(arr){
    const primes =[];
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i]));{
            Primes.push(arr[i]);
        }
    }
    console.log(primes);
}

filterPrimes(arr)