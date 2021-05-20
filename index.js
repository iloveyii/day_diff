
// Please write a program using JavaScript that can calculate the number of days in-between two given dates. 
// You are not allowed to use any built in date/time/calendar functionality.

console.log("day diff");

function toDateObject(date) {
    if(typeof date === 'string') {
        return new Date(date);
    }
    return date;
}

/**
 * Assumptions: 
 * 1. If the difference is more than 12 hours, it is rounded up to 1 day
 * 2. Can pass date as Date object or string in a valid format
 * @param {Date} date1 
 * @param {Date} date2 
 */
function getDaysDiff(date1, date2) {
    const milliSecsInOneDay = 24 * 60 * 60 * 1000;
    date1 = toDateObject(date1);
    date2 = toDateObject(date2);
    const diffInMilliSeconds = Math.abs(date1.getTime() - date2.getTime());
    const diffInDays = diffInMilliSeconds / milliSecsInOneDay;
    
    console.log("Days diff: ", Math.round(diffInDays), diffInDays);
    console.log("Milli diff: " , diffInMilliSeconds);
}

// const d1 = new Date();
const d1 = "2021/05/19 23:59";
// const d1 = "2021-05-20T00:00:00.000-03:00";
// This would take more than 2 sec: becuase the main thread (this file) will execute first ie the loop wait2 below when it is finished
// The async/setTimeout thread will be executed which will take more 2 secs. Therefore total time = main thread + timeout

// const d2 = new Date();
const d2 = "2021/05/20 23:59";
getDaysDiff(d1, d2);
