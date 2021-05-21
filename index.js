
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


const d1 = "1960/01/01 00:00:00:+0000";
const d2 = "2021/05/21 00:00:00:+0000";
const daysDiff = getDaysDiff(d1, d2);
console.log("METHOD 1:", daysDiff); 

const REFEREMCE_YEAR = 1900;

function oDate(year, month, day, hour, minute) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;

    this.getDaysDiff = function(oDate2) {
        var ts1 = this.getTimeStamp();
        var ts2 = oDate2.getTimeStamp();
        if( ts1 > ts2) {
            return (ts1 - ts2) / 86400;
        } else {
            return (ts2 - ts1) / 86400;
        }
    }

    this.getTimeStamp = function() {
         var ts = this.getSInYearsSinceRefYear() + this.getSInMonthSinceStartOfThisYear() 
                + this.getSInDaysSinceThisMonth() + this.getSInHoursSinceThisDay()
                + this.getSInMinutesSinceThisHour();
        return ts;
    }

    this.getSInYearsSinceRefYear = function() {
        var ts = 0;
        for(var i = REFEREMCE_YEAR; i < this.year; i++) {
            var days = this.getDaysInYear(i);
            var s = days * 24 * 60 * 60;
            ts = ts + s;
        }
        return ts;
    }

    this.getSInMonthSinceStartOfThisYear = function() {
        var ts = 0;
        for(i=1; i < this.month; i++) {
            ts = ts + ( this.getDaysInMonth(this.year, i) * 24 * 60 * 60)
        }
        return ts;
    }

    this.getSInDaysSinceThisMonth = function() {
        return (this.day - 1) * 24 * 60 * 60;
    }

    this.getSInHoursSinceThisDay = function() {
        return this.hour * 60 * 60;
    }

    this.getSInMinutesSinceThisHour = function() {
        return this.minute * 60;
    }

    this.getDaysInYear = function(year=null) {
        var y = year ? year : this.year;
        return ((y % 4 === 0 && y % 100 > 0) || y %400 == 0) ? 366 : 365;
    }

    this.getDaysInMonth = function(year, month) {
        if(month == 2) {
            return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 29 : 28; // Leap ?
        }
        if(month <= 7) {
            return month % 2 ? 31 : 30;
        }
        return month % 2 ? 30 : 31;
    }
}


var newDate1 = new oDate(1960, 1, 1, 0, 0);
var newDate2 = new oDate(2021, 5, 21, 0, 0);
console.log("METHOD 2:", newDate1.getDaysDiff(newDate2));