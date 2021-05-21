
// ******************************
// TASK
// ******************************
// Please write a program using JavaScript that can calculate the number of days in-between two given dates. 
// You are not allowed to use any built in date/time/calendar functionality.

 
/**
 * The numbe of seconds since REFERENCE_YEAR is the timestamp
 * Values can be 1, 1900, 1970 etc
 * The smaller its value, the more older dates we can calculate 
 */
var REFERENCE_YEAR = 1;

function oDate(year, month, day, hour, minute) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;

    /**
     * Find the difference in days between the two given dates
     * @param {oDate} oDate2 
     * @returns 
     */
    this.getDaysDiff = function(oDate2) {
        if(oDate2 instanceof oDate) {
            var ts1 = this.getTimeStamp();
            var ts2 = oDate2.getTimeStamp();
            if( ts1 > ts2) {
                return (ts1 - ts2) / 86400;
            } else {
                return (ts2 - ts1) / 86400;
            }
        } else {
            throw Error("should be instance of oDate");
        }
        
    }

    /**
     * The number of seconds elapsed since REFERENCE_YEAR to the given date
     * @returns seconds
     */
    this.getTimeStamp = function() {
         var ts = this.getSInYearsSinceRefYear() + this.getSInMonthSinceStartOfThisYear() 
                + this.getSInDaysSinceThisMonth() + this.getSInHoursSinceThisDay()
                + this.getSInMinutesSinceThisHour();
        return ts;
    }

    /**
     * Get timestamp for the year difference (REFERENCE_YEAR - given year)
     * @returns seconds
     */
    this.getSInYearsSinceRefYear = function() {
        var ts = 0;
        for(var i = REFERENCE_YEAR; i < this.year; i++) {
            var days = this.getDaysInYear(i);
            var s = days * 24 * 60 * 60;
            ts = ts + s;
        }
        return ts;
    }

    /**
     * Get timestamp for the months elapsed in the given year/date
     * @returns seconds
     */
    this.getSInMonthSinceStartOfThisYear = function() {
        var ts = 0;
        for(i=1; i < this.month; i++) {
            ts = ts + ( this.getDaysInMonth(this.year, i) * 24 * 60 * 60)
        }
        return ts;
    }

    /**
     * Convert the number of days in the given date timestamp
     * @returns seconds
     */
    this.getSInDaysSinceThisMonth = function() {
        return (this.day - 1) * 24 * 60 * 60;
    }

    /**
     * Convert the hours of the date to timestamp
     * @returns seconds
     */
    this.getSInHoursSinceThisDay = function() {
        return this.hour * 60 * 60;
    }

    /**
     * Convert minutes of the date to timestamp
     * @returns seconds
     */
    this.getSInMinutesSinceThisHour = function() {
        return this.minute * 60;
    }

    /**
     * Find the number of days in the given year/date 
     * Checks for leap year
     * @param {number} year 
     * @returns 
     */
    this.getDaysInYear = function(year=null) {
        var y = year ? year : this.year;
        return ((y % 4 === 0 && y % 100 > 0) || y %400 == 0) ? 366 : 365;
    }

    /**
     * Get the number of days in a month for the given year
     * Check leap year for february
     * @param {number} year 
     * @param {number} month 
     * @returns 
     */
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

module.exports = oDate;

