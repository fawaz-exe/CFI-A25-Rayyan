// Check temparture

/**
 * Temp below 20 its cold, winter
 * Temp above 40 its hot, summer
 * Temp between 20 and 40 Normal, spring
 * */

let temperature = 20;

if(temperature > 40){
    console.log('Summer');
} else if (temperature < 20){
    console.log('Winter');
} else {
    console.log('Spring');
}