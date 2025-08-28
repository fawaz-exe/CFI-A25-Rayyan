function fibanocci(input){
    let prev = 0, curr = 1 ; sum = 0;
    for(let i = 0; i<=input; i++){
        if(prev>=input) break;

        console.log(prev);
        sum = prev + curr;
        prev = curr;
        curr = sum;
    }
}

fibanocci(90000000);