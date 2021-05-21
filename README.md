Date Difference
=============

- Please write a program using JavaScript that can calculate the number of days in-between two given dates. 
- You are not allowed to use any built in date/time/calendar functionality.

# Run
- Git clone the repository `git clone https://github.com/iloveyii/day_diff.git`
- CD to directory and install dependencies `npm i`
- Run the app `npm start`
- Make changes to run.js and see results

# How to use in code
- Create two object s
```
var oDate = require("./index");
//                    year month day hour minute
var date1 = new oDate(1960, 1, 1, 0, 0);
var date2 = new oDate(2021, 5, 21, 0, 0);
```
- And then call the function getDaysDiff as below
```
console.log("Number of days:", date2.getDaysDiff(date1);
// prints 22421
```


# How it works?
- Generally Datetime is first converted to GMT and then Unix timestamp (number of seconds elapsed since 1-1-1970)
- We convert the dates to timestamp (since REFERENCE_YEAR: 1, 1900, 1970)
- If we set REFERENCE_YEAR to 1970 then dates after this year would be calculated correctly, therefore the smaller its value the better
- The absolute difference between the timestamps of the two dates are then divided by 86400 (sec) to get the number days
# Limitations
- The function cannot calculate dates older than 1 
- The timezones are not implemented and you should add/subtract hours while creating object of oDate