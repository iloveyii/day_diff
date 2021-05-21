Date Difference
=============

# Run
- Git clone the repository `git clone https://github.com/iloveyii/day_diff.git`
- CD to directory and `npm start`

# How to use in code
- Create two object s
```
//                    year month day hour minute
var date1 = new oDate(1960, 1, 1, 0, 0);
var date2 = new oDate(2021, 5, 21, 0, 0);
```
- And then call the function getDaysDiff as below
```
console.log("Number of days:", date2.getDaysDiff(date1);
```


# How it works?
- Generally Datetime is first converted to GMT and then Unix timestamp (number of seconds elapsed since 1-1-1970)
- We convert the dates to timestamp (since REFEREMCE_YEAR: 0, 1900, 1970)
- If we set REFEREMCE_YEAR to 1970 then dates after this year would be calculated correctly, therefore the smaller its value the better
- The absolute difference between the timestamps of the two dates are then divided by 86400 (sec) to get the number days
# Limitations
- The function cannot calculate dates older than 1 
- The timezones are not implemented and you should add/subtract hours while creating object of oDate