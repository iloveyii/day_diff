
// Please write a program using JavaScript that can calculate the number of days in-between two given dates. 
// You are not allowed to use any built in date/time/calendar functionality.

/**
 * Converts string date to Date object
 * @param {Date|String} date 
 * @returns 
 */
function toDateObject(date) {
    if(typeof date === 'string') {
        return new Date(date);
    }
    return date;
}

/**
 * Finds the difference in days between date1 and date2
 * 
 * Assumptions: 
 * 1. If the difference is more than 12 hours, it is rounded up to 1 day
 * 2. Can pass date as Date object or string in a valid format
 * @param {Date|String} date1 
 * @param {Date|String} date2 
 */
function getDaysDiff(date1, date2) {
    const milliSecsInOneDay = 24 * 60 * 60 * 1000;
    date1 = toDateObject(date1);
    date2 = toDateObject(date2);
    const diffInMilliSeconds = Math.abs(date1.getTime() - date2.getTime());
    const diffInDays = diffInMilliSeconds / milliSecsInOneDay;
    
    return Math.round(diffInDays);
}

const d1 = "2021/05/19 22:00";
const d2 = "2021/05/20 10:00";
const daysDiff = getDaysDiff(d1, d2);
console.log("Difference in days :", daysDiff);
