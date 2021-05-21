var oDate = require("./index");

//                    year month day hour minute
var date1 = new oDate(1960, 1, 1, 0, 0);
var date2 = new oDate(2021, 5, 21, 0, 0);
console.log("Number of days:", date2.getDaysDiff(date1));

try {
    console.log("Number of days:", date2.getDaysDiff(new Date()));
} catch(e) {
    console.log(e.message);
}