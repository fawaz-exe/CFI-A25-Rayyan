var students = ['rayyan', 'ayyan', 'zayyan', 'mohammed', 'anas', 'suleiman'];
console.log('original array: ', students);

// var data = students.slice(5,5);
// console.log('sliced array: ',data);

//splice operation

var data = students.splice(0,6, 'ali');
console.log('splice operation: ', data);
console.log('original array: ',students)

