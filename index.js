
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

var dateObject = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0
}

function oDate(year, month, day, hour, minute) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.getDaysDiff = function(oDate2) {
        console.log("Diff in days: ", this.getTimeStamp());
    }
    this.getTimeStamp = function() {
         var ts = this.getSInYearsSince1970() + this.getSInMonthSinceStartOfThisYear() 
                + this.getSInDaysSinceThisMonth() + this.getSInHoursSinceThisDay()
                + this.getSInMinutesSinceThisHour();
        return ts;
    }
    this.getSInYearsSince1970 = function() {
        var ts = 0;
        for(var i = 1970; i < this.year; i++) {
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

/*
var newDate1 = new oDate(1970, 7, 2, 1, 0);
var newDate2 = new oDate(2021, 5, 4, 10, 30);
console.log("TS:::", newDate1.getTimeStamp());
console.log("TS:::", newDate2.getTimeStamp());

var d = new Date('1970/07/02 01:00:00:+0000');
var d22 = new Date('2021/05/04 10:30:00:+0000');
var ts = d.getTime() / 1000;
var ts22 = d22.getTime() / 1000;
console.log("TS Date:::", ts, d);
console.log("TS Date:::", ts22, d22); */

for(year = 1970; year < 2022; year ++) {
    for(month=1; month < 2; month++) {
        var days = new oDate(year, month, 1, 0, 0).getDaysInMonth();
        for(day=1; day <= days; day++) {
            var dt = new Date(year + "/" + month + "/" + day + " 00:00:00:+0000");
            var dtTs = dt.getTime() / 1000;
            var customDate = new oDate(year, month, day, 0, 0);
            var customDateTs = customDate.getTimeStamp();
            if( dtTs != customDateTs) {
                console.log("DAY : ", year, month, day, dt, dtTs, customDateTs, customDateTs - dtTs);
            }
        }

    }
}