function abc(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1 < num2){
            resolve(`${num1} is less than ${num2}`);
        } else if(num1 > num2){
            resolve(`${num2} is less than ${num1}`);
        } else {
            reject(`Both are equal`);
        }
    })
}

console.log('first');

abc(8,8)
    .then((res)=>{
        console.log(res);
        console.log('I am then block')
    })
    .catch(err => {
        console.log(err);
        console.log('I am Catch Block')
    });

    console.log('last');