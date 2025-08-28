// Bitwise Operators
// Bitwise AND (&)

/**
 * Truth Table
 * A B  A & B
 * 0 0  0
 * 0 1  0
 * 1 0  0
 * 1 1  1
 * 
 */

console.log(10 & 5);
console.log(25 & 26);
console.log(100 & 10);
console.log(8 & 20);

console.log(10 | 5);
console.log(25 | 26); // 27 23
console.log(100 | 10); // 110 105
console.log(8 | 20); // 28  28
console.log(99 | 9); // 107 106

// Bitwise NOT (~)
// ~a = -(a+1)
console.log(~(-20));

// Bitwise XOR => assignment
// XOR => Exclusive OR
/**
 * A    B       A^B
 * 0    0       0
 * 0    1       1
 * 1    0       1
 * 1    1       0
 */

console.log(15^12);
console.log(5^13);
console.log(25^30);
console.log(31^6); 

// 10:     1 0 1 0
// 5:      0 1 0 1
// 10 & 5  0  0  0  0
        // 16  8  4  2  1
// 25       1  1  0  0  1  
// 26       1  1  0  1  0
// 25 & 26  1  1   0   0   0 = 24

// 100      1 1 0 0 1 0 0
// 10       0  0  0  1 0 1 0
         //   0  0  0  0