/**
 * Write an algorithm, function inputs from browser format.
 * Find if entered date is backward or not?
 * 
 * Ex. Productivity Tools, Calendars, task managers, timers, alarm. 
 */

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