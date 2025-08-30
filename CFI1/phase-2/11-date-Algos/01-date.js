let todaysDate = new Date();
console.log(todaysDate);

// Node => 2025-08-04T05:34:50.449Z = ISO Format => UTC 0; 
// Browser => Mon Aug 04 2025 11:21:39 GMT+0530 (India Standard Time) => System Time.
// UTC = Cordianated Universal Timestamp.

console.log(new Date('Mon Aug 04 2025 11:21:39 GMT+0530 (India Standard Time)'));
console.log(new Date().toString());