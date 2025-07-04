function multiplyNums(left, right){
    let sum = 0;
    console.log(` Step 1 => \n Print the Numbers : ${left} \t ${right}`);
    console.log('Step 2 => \n');
    console.log('Step 3 => \n');

    
// console.log(left, right);
    while(left >= 1){
        if(left % 2 == 0){
            console.log('****');
        } else {
            console.log(left, right);
            sum = sum + right;
        }
        left = Math.floor(left/2);
        right = right * 2;
    }

    console.log('Step 3  = > Display the Sum:', sum);
}

multiplyNums(100,100);