// let todaysDate = new Date();
// console.log(new Date);
// console.log(new Date('Mon Aug 04 2025 11:21:39 GMT+0530 (India Standard Time)'));
// console.log(new Date().toString());

// console.log(+new Date())

// console.log(new Date(1000000000000));
// let date = new Date(1000000000000);
// console.log(date.toString());

// let tomorrow = +new Date('Tue Aug 05 2025 00:00:00 GMT+0530 (India Standard Time)');
// let today = +new Date('Mon Aug 04 2025 11:21:39 GMT+0530 (India Standard Time)');
// console.log(tomorrow);
// console.log(today);
// console.log(tomorrow - today);


// let future = +new Date() + (15 * 60 * 60 * 1000);
// let futureTime = new Date(future);
// console.log(future.toString());

// let backward = +new Date() - (15 * 60 * 60 * 1000);
// let backwardTime = new Date(backward);
// console.log(backward.toString()); 

function isBackDated(timestamp){
    let current = new Date();
    timestamp = new Date(timestamp)
    if(timestamp < current){
        console.log('Back Dated');
    } else {
        console.log('Valid');
    }
}

isBackDated(new Date());