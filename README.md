Date Difference
=============

# How it works?
- Generally Datetime is first converted to GMT and then Unix timestamp (number of seconds elapsed since 1-1-1970)
- We convert the dates to timestamp (since REFEREMCE_YEAR: 0, 1900, 1970)
- If we set REFEREMCE_YEAR to 1970 then dates after this year would be calculated correctly, therefore the smaller its value the better
- The absolute difference between the timestamps of the two dates are then divided by 86400 (sec) to get the number days