function subtractwithoutminus(a,b){
    let steps = 0;
    if(a<b){
         for(let i = a; i < b; i++){
        steps++;
    } 
    } else
    console.log(steps);
}

subtractwithoutminus(25,100)